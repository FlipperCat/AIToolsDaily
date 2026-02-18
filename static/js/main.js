/* ============================================================
   AI TOOLS DAILY - MAIN JAVASCRIPT
   ============================================================ */

(function() {
  'use strict';

  // ============================================================
  // THEME TOGGLE
  // ============================================================

  const ThemeManager = {
    STORAGE_KEY: 'aitoolsdaily-theme',

    init() {
      const savedTheme = localStorage.getItem(this.STORAGE_KEY);
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const theme = savedTheme || (prefersDark ? 'dark' : 'light');

      this.setTheme(theme);
      this.bindEvents();
    },

    setTheme(theme) {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem(this.STORAGE_KEY, theme);
    },

    toggle() {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      this.setTheme(next);
    },

    bindEvents() {
      const toggleBtn = document.querySelector('.theme-toggle');
      if (toggleBtn) {
        toggleBtn.addEventListener('click', () => this.toggle());
      }

      // Listen for system preference changes
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem(this.STORAGE_KEY)) {
          this.setTheme(e.matches ? 'dark' : 'light');
        }
      });
    }
  };

  // ============================================================
  // HEADER SCROLL EFFECT
  // ============================================================

  const HeaderManager = {
    init() {
      const header = document.querySelector('.header');
      if (!header) return;

      let lastScroll = 0;

      window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 50) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
      }, { passive: true });
    }
  };

  // ============================================================
  // SEARCH FUNCTIONALITY
  // ============================================================

  const SearchManager = {
    modal: null,
    input: null,
    results: null,
    searchIndex: [],
    fuse: null,

    init() {
      this.modal = document.querySelector('.search-modal');
      this.input = document.querySelector('.search-input');
      this.results = document.querySelector('.search-results');

      if (!this.modal) return;

      this.loadSearchIndex();
      this.bindEvents();
    },

    async loadSearchIndex() {
      try {
        const response = await fetch('/index.json');
        this.searchIndex = await response.json();

        // Initialize Fuse.js for fuzzy search
        if (typeof Fuse !== 'undefined') {
          this.fuse = new Fuse(this.searchIndex, {
            keys: ['title', 'description', 'content', 'tags'],
            threshold: 0.3,
            includeScore: true,
            includeMatches: true,
          });
        }
      } catch (error) {
        console.log('Search index not available');
      }
    },

    open() {
      this.modal.classList.add('active');
      document.body.style.overflow = 'hidden';
      setTimeout(() => this.input.focus(), 100);
    },

    close() {
      this.modal.classList.remove('active');
      document.body.style.overflow = '';
      this.input.value = '';
      this.results.innerHTML = '';
    },

    search(query) {
      if (!query || query.length < 2) {
        this.results.innerHTML = '';
        return;
      }

      let results = [];

      if (this.fuse) {
        results = this.fuse.search(query).slice(0, 8);
      } else {
        // Fallback simple search
        const lowerQuery = query.toLowerCase();
        results = this.searchIndex
          .filter(item =>
            item.title.toLowerCase().includes(lowerQuery) ||
            item.description.toLowerCase().includes(lowerQuery)
          )
          .slice(0, 8)
          .map(item => ({ item }));
      }

      this.renderResults(results, query);
    },

    renderResults(results, query) {
      if (results.length === 0) {
        this.results.innerHTML = `
          <div class="search-empty">
            <p>No results found for "${query}"</p>
          </div>
        `;
        return;
      }

      this.results.innerHTML = results.map(({ item }) => `
        <a href="${item.permalink}" class="search-result-item">
          <div class="search-result-title">${item.title}</div>
          <div class="search-result-excerpt">${item.description}</div>
        </a>
      `).join('');
    },

    bindEvents() {
      // Open search
      const searchBtns = document.querySelectorAll('.search-btn');
      searchBtns.forEach(btn => {
        btn.addEventListener('click', () => this.open());
      });

      // Close on backdrop click
      this.modal.addEventListener('click', (e) => {
        if (e.target === this.modal) this.close();
      });

      // Close on escape
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && this.modal.classList.contains('active')) {
          this.close();
        }
        // Open with Cmd/Ctrl + K
        if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
          e.preventDefault();
          this.modal.classList.contains('active') ? this.close() : this.open();
        }
      });

      // Search on input
      let debounceTimer;
      this.input.addEventListener('input', (e) => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
          this.search(e.target.value);
        }, 200);
      });
    }
  };

  // ============================================================
  // CATEGORY FILTER
  // ============================================================

  const FilterManager = {
    init() {
      const filterBtns = document.querySelectorAll('.filter-btn');
      const articles = document.querySelectorAll('.article-card[data-category]');

      if (filterBtns.length === 0) return;

      filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          const filter = btn.dataset.filter;

          // Update active button
          filterBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');

          // Filter articles
          articles.forEach(article => {
            const category = article.dataset.category;

            if (filter === 'all' || category === filter) {
              article.style.display = '';
              article.classList.add('animate-on-scroll', 'visible');
            } else {
              article.style.display = 'none';
            }
          });
        });
      });
    }
  };

  // ============================================================
  // SCROLL ANIMATIONS
  // ============================================================

  const AnimationManager = {
    init() {
      const animatedElements = document.querySelectorAll('.animate-on-scroll');

      if (animatedElements.length === 0) return;

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      });

      animatedElements.forEach(el => observer.observe(el));
    }
  };

  // ============================================================
  // NEWSLETTER FORM
  // ============================================================

  const NewsletterManager = {
    init() {
      const forms = document.querySelectorAll('.newsletter-form');

      forms.forEach(form => {
        form.addEventListener('submit', async (e) => {
          e.preventDefault();

          const email = form.querySelector('input[type="email"]').value;
          const button = form.querySelector('button');
          const originalText = button.innerHTML;

          button.innerHTML = 'Subscribing...';
          button.disabled = true;

          try {
            // Submit to Netlify Forms
            const formData = new FormData(form);
            await fetch('/', {
              method: 'POST',
              headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
              body: new URLSearchParams(formData).toString()
            });

            button.innerHTML = '✓ Subscribed!';
            button.style.background = 'var(--color-success)';
            form.querySelector('input').value = '';

            setTimeout(() => {
              button.innerHTML = originalText;
              button.style.background = '';
              button.disabled = false;
            }, 3000);
          } catch (error) {
            button.innerHTML = 'Error - Try again';
            button.style.background = 'var(--color-error)';

            setTimeout(() => {
              button.innerHTML = originalText;
              button.style.background = '';
              button.disabled = false;
            }, 3000);
          }
        });
      });
    }
  };

  // ============================================================
  // READING PROGRESS
  // ============================================================

  const ReadingProgress = {
    init() {
      const progressBar = document.querySelector('.reading-progress');
      const article = document.querySelector('.article-content');

      if (!progressBar || !article) return;

      window.addEventListener('scroll', () => {
        const articleTop = article.offsetTop;
        const articleHeight = article.offsetHeight;
        const windowHeight = window.innerHeight;
        const scrolled = window.scrollY;

        const progress = Math.min(
          Math.max((scrolled - articleTop + windowHeight * 0.5) / articleHeight, 0),
          1
        );

        progressBar.style.transform = `scaleX(${progress})`;
      }, { passive: true });
    }
  };

  // ============================================================
  // MOBILE MENU
  // ============================================================

  const MobileMenuManager = {
    init() {
      const menuBtn = document.querySelector('.mobile-menu-btn');
      const nav = document.querySelector('.nav');

      if (!menuBtn || !nav) return;

      menuBtn.addEventListener('click', () => {
        nav.classList.toggle('mobile-open');
        menuBtn.classList.toggle('active');
      });
    }
  };

  // ============================================================
  // TABLE OF CONTENTS
  // ============================================================

  const TOCManager = {
    init() {
      const toc = document.querySelector('.table-of-contents');
      const article = document.querySelector('.article-content');

      if (!toc || !article) return;

      const headings = article.querySelectorAll('h2, h3');

      if (headings.length < 3) {
        toc.style.display = 'none';
        return;
      }

      const list = toc.querySelector('ul');

      headings.forEach((heading, i) => {
        const id = heading.id || `heading-${i}`;
        heading.id = id;

        const li = document.createElement('li');
        li.className = heading.tagName === 'H3' ? 'toc-h3' : 'toc-h2';
        li.innerHTML = `<a href="#${id}">${heading.textContent}</a>`;
        list.appendChild(li);
      });

      // Highlight current section
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          const id = entry.target.id;
          const link = toc.querySelector(`a[href="#${id}"]`);

          if (entry.isIntersecting) {
            toc.querySelectorAll('a').forEach(a => a.classList.remove('active'));
            link?.classList.add('active');
          }
        });
      }, { rootMargin: '-20% 0px -80% 0px' });

      headings.forEach(h => observer.observe(h));
    }
  };

  // ============================================================
  // COPY CODE BLOCKS
  // ============================================================

  const CodeCopyManager = {
    init() {
      const codeBlocks = document.querySelectorAll('pre code');

      codeBlocks.forEach(block => {
        const pre = block.parentElement;
        const button = document.createElement('button');
        button.className = 'copy-code-btn';
        button.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>';

        button.addEventListener('click', async () => {
          await navigator.clipboard.writeText(block.textContent);
          button.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>';
          setTimeout(() => {
            button.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>';
          }, 2000);
        });

        pre.style.position = 'relative';
        pre.appendChild(button);
      });
    }
  };

  // ============================================================
  // LAZY LOADING IMAGES
  // ============================================================

  const LazyLoadManager = {
    init() {
      const images = document.querySelectorAll('img[data-src]');

      if (images.length === 0) return;

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            observer.unobserve(img);
          }
        });
      }, { rootMargin: '50px' });

      images.forEach(img => observer.observe(img));
    }
  };

  // ============================================================
  // SMOOTH SCROLL FOR ANCHOR LINKS
  // ============================================================

  const SmoothScrollManager = {
    init() {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
          const href = anchor.getAttribute('href');
          if (href === '#') return;

          const target = document.querySelector(href);
          if (target) {
            e.preventDefault();
            const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
            const targetPosition = target.offsetTop - headerHeight - 20;

            window.scrollTo({
              top: targetPosition,
              behavior: 'smooth'
            });
          }
        });
      });
    }
  };

  // ============================================================
  // INITIALIZE ALL MODULES
  // ============================================================

  document.addEventListener('DOMContentLoaded', () => {
    ThemeManager.init();
    HeaderManager.init();
    SearchManager.init();
    FilterManager.init();
    AnimationManager.init();
    NewsletterManager.init();
    ReadingProgress.init();
    MobileMenuManager.init();
    TOCManager.init();
    CodeCopyManager.init();
    LazyLoadManager.init();
    SmoothScrollManager.init();
  });

})();
