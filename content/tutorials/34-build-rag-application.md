---
title: "Build a RAG Application: Step-by-Step Tutorial"
description: "Create a retrieval-augmented generation (RAG) system that answers questions based on your documents"
date: 2026-02-17
categories: ["Tutorials"]
tags: ["rag", "llm", "retrieval", "embeddings", "semantic-search"]
affiliate_disclosure: true
---

RAG (Retrieval-Augmented Generation) is the most powerful technique for building AI applications that use your data. This guide walks you through building a RAG system from scratch: from uploading documents through answering questions grounded in your data.

## What is RAG?

### The Problem with Raw LLMs

Language models have limitations:
- **Knowledge cutoff**: Models trained on data up to certain date
- **Hallucinations**: Making up facts that sound plausible but are false
- **Outdated information**: Can't access new documents
- **Privacy**: Sending proprietary data to API risky

### How RAG Solves It

RAG = Retrieval + Generation

1. **Retrieval**: Find relevant documents matching user's question
2. **Augmentation**: Add those documents to the prompt
3. **Generation**: Generate answer based on documents

**Example**: User asks "What's our refund policy?"

RAG process:
1. Search documents for "refund policy"
2. Find relevant help article
3. Add article to prompt: "Based on this policy: [article text]..."
4. LLM generates answer grounded in policy
5. User gets accurate, sourced answer

### Why RAG Works

| Problem | RAG Solution |
|---------|--------------|
| Hallucinations | Grounds answers in documents |
| Outdated knowledge | Uses your current documents |
| Privacy | Documents stay on your server |
| Attribution | You can cite sources |
| Accuracy | 70-90% reduction in hallucinations |

## Architecture Overview

A RAG system has these components:

```
User Question
     ↓
[Vector Database] - Find similar documents
     ↓
[Document Retrieval] - Get top 3-5 documents
     ↓
[Prompt Assembly] - Add documents to prompt
     ↓
[LLM] - Generate answer
     ↓
Answer with Sources
```

## Step 1: Prepare Your Documents

### Document Collection

Gather documents for your knowledge base:
- PDFs
- Word documents
- Text files
- Website content
- Help articles
- FAQs

**Start with 10-50 documents for testing, scale to 1000+ later.**

### Document Preprocessing

```python
from pypdf import PdfReader
import os

def extract_text_from_pdf(pdf_path):
    """Extract text from PDF file"""
    reader = PdfReader(pdf_path)
    text = ""
    for page in reader.pages:
        text += page.extract_text()
    return text

# Extract from all PDFs
documents = []
for filename in os.listdir("./documents"):
    if filename.endswith(".pdf"):
        text = extract_text_from_pdf(f"./documents/{filename}")
        documents.append({
            "title": filename,
            "content": text
        })

print(f"Extracted {len(documents)} documents")
```

### Document Chunking

Raw documents are too large. Break into chunks:

```python
from langchain.text_splitter import RecursiveCharacterTextSplitter

splitter = RecursiveCharacterTextSplitter(
    chunk_size=1000,      # Characters per chunk
    chunk_overlap=200,    # Overlap for context
    separators=["\n\n", "\n", " ", ""]
)

chunks = []
for doc in documents:
    doc_chunks = splitter.split_text(doc["content"])
    for chunk in doc_chunks:
        chunks.append({
            "text": chunk,
            "source": doc["title"]
        })

print(f"Created {len(chunks)} chunks from {len(documents)} documents")
```

### Chunk Sizing Guidelines

| Size | Pros | Cons |
|------|------|------|
| 256 tokens | Fast | May miss context |
| 512 tokens | Balanced | Good for most |
| 1024 tokens | Rich context | Slower retrieval |
| 2048 tokens | Full context | Expensive, slow |

Start with 512 tokens (roughly 1000 characters).

## Step 2: Create Embeddings

### What Are Embeddings?

Embeddings convert text to numbers (vectors) that computers understand.

**Example**:
- "The cat sat on the mat" → [0.23, 0.91, -0.34, ..., 0.12] (384 numbers)
- "The dog sat on the floor" → [0.24, 0.89, -0.31, ..., 0.14] (similar numbers)

Similar meanings = similar vectors.

### Creating Embeddings

Using OpenAI embeddings:

```python
import openai

openai.api_key = "your-api-key"

def create_embeddings(texts):
    """Convert texts to embeddings using OpenAI"""
    response = openai.Embedding.create(
        input=texts,
        model="text-embedding-3-small"  # Cost-effective
    )

    embeddings = []
    for item in response["data"]:
        embeddings.append(item["embedding"])

    return embeddings

# Create embeddings for all chunks
chunk_texts = [chunk["text"] for chunk in chunks]
embeddings = create_embeddings(chunk_texts)

# Store chunks with embeddings
for chunk, embedding in zip(chunks, embeddings):
    chunk["embedding"] = embedding
```

### Embedding Models Comparison

| Model | Cost | Quality | Speed |
|-------|------|---------|-------|
| OpenAI small | $0.02/1M tokens | Good | Fast |
| OpenAI large | $0.13/1M tokens | Excellent | Slower |
| Cohere | $0.10/1M tokens | Excellent | Fast |
| Open-source | Free (self-hosted) | Good | Medium |

For starting out, use OpenAI's small model.

## Step 3: Set Up Vector Database

### Why Vector Database?

Vector databases store embeddings and find similar ones quickly.

**Without vector DB**: Search all 10,000 chunks sequentially (slow)
**With vector DB**: Find similar chunks in milliseconds (fast)

### Popular Vector Databases

| Database | Easiest | Most Powerful | Open-Source | Cloud |
|----------|---------|---------------|-------------|-------|
| Pinecone | Yes | No | No | Yes |
| Weaviate | Yes | Yes | Yes | Yes |
| Milvus | No | Yes | Yes | No |
| PostgreSQL pgvector | Yes | Medium | Yes | Yes |

### Using Pinecone (Easiest)

```bash
pip install pinecone-client
```

```python
from pinecone import Pinecone

# Initialize
pc = Pinecone(api_key="your-api-key")

# Create index (one-time)
pc.create_index(
    name="my-rag-index",
    dimension=1536,  # OpenAI embedding dimension
    metric="cosine"
)

index = pc.Index("my-rag-index")

# Upsert chunks with embeddings
vectors_to_upsert = []
for i, chunk in enumerate(chunks):
    vectors_to_upsert.append({
        "id": f"chunk-{i}",
        "values": chunk["embedding"],
        "metadata": {
            "text": chunk["text"],
            "source": chunk["source"]
        }
    })

# Upload in batches
batch_size = 100
for i in range(0, len(vectors_to_upsert), batch_size):
    batch = vectors_to_upsert[i:i+batch_size]
    index.upsert(vectors=batch)

print(f"Upserted {len(vectors_to_upsert)} vectors")
```

## Step 4: Create Retrieval System

### Search Function

```python
def retrieve_relevant_chunks(query, top_k=3):
    """Find chunks most relevant to query"""

    # Create embedding for query
    query_response = openai.Embedding.create(
        input=query,
        model="text-embedding-3-small"
    )
    query_embedding = query_response["data"][0]["embedding"]

    # Search vector DB
    results = index.query(
        vector=query_embedding,
        top_k=top_k,
        include_metadata=True
    )

    # Extract chunks
    retrieved_chunks = []
    for result in results["matches"]:
        retrieved_chunks.append({
            "text": result["metadata"]["text"],
            "source": result["metadata"]["source"],
            "score": result["score"]  # Relevance score 0-1
        })

    return retrieved_chunks

# Test retrieval
query = "What's your refund policy?"
results = retrieve_relevant_chunks(query)

for result in results:
    print(f"Source: {result['source']}")
    print(f"Relevance: {result['score']:.2f}")
    print(f"Text: {result['text'][:200]}...\n")
```

## Step 5: Build Prompt Assembly

### Crafting the Prompt

The prompt structure is critical:

```python
def build_prompt(query, retrieved_chunks):
    """Build prompt with retrieved context"""

    # System message
    system_message = """You are a helpful assistant. Answer questions based on the provided documents.
If you can't find the answer in the documents, say "I don't have information about that."
Always cite which document you're using."""

    # Context from retrieved chunks
    context = "RELEVANT DOCUMENTS:\n"
    for i, chunk in enumerate(retrieved_chunks):
        context += f"\n[{i+1}] From {chunk['source']}:\n{chunk['text']}\n"

    # Full prompt
    prompt = f"""{system_message}

{context}

QUESTION: {query}

ANSWER:"""

    return prompt, system_message

# Example
query = "What's your refund policy?"
chunks = retrieve_relevant_chunks(query)
prompt, system_msg = build_prompt(query, chunks)

print("Generated Prompt:")
print(prompt)
```

### Prompt Quality Matters

Good prompt:
- Clear instructions
- Relevant context
- Question at end
- Space for answer

Bad prompt:
- Irrelevant documents
- Confusing instructions
- Ambiguous question

## Step 6: Generate Answers

### Using OpenAI

```python
import openai

def answer_question(query):
    """Answer question using RAG"""

    # Step 1: Retrieve
    chunks = retrieve_relevant_chunks(query, top_k=3)

    # Step 2: Build prompt
    prompt, system_msg = build_prompt(query, chunks)

    # Step 3: Generate
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {
                "role": "system",
                "content": system_msg
            },
            {
                "role": "user",
                "content": prompt
            }
        ],
        temperature=0.5,  # Lower = more focused on documents
        max_tokens=500
    )

    answer = response["choices"][0]["message"]["content"]

    return {
        "question": query,
        "answer": answer,
        "sources": [chunk["source"] for chunk in chunks]
    }

# Test
result = answer_question("What's your refund policy?")
print(f"Q: {result['question']}")
print(f"A: {result['answer']}")
print(f"Sources: {', '.join(result['sources'])}")
```

### Using Open-Source Models

```python
from transformers import pipeline

# Load locally
qa_pipeline = pipeline(
    "text2text-generation",
    model="google/flan-t5-large"
)

def answer_question_local(query):
    """Answer using local model"""
    chunks = retrieve_relevant_chunks(query)
    prompt, _ = build_prompt(query, chunks)

    result = qa_pipeline(prompt, max_length=500)
    return result[0]["generated_text"]
```

## Step 7: Build Web Interface

### Simple Flask App

```python
from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/ask", methods=["POST"])
def ask():
    """API endpoint to ask questions"""
    data = request.json
    query = data.get("query")

    if not query:
        return jsonify({"error": "No query provided"}), 400

    result = answer_question(query)

    return jsonify(result)

@app.route("/health", methods=["GET"])
def health():
    return jsonify({"status": "ok"})

if __name__ == "__main__":
    app.run(debug=True, port=5000)
```

### HTML Frontend

```html
<!DOCTYPE html>
<html>
<head>
    <title>RAG Assistant</title>
    <style>
        body { font-family: Arial; max-width: 800px; margin: 50px auto; }
        input { width: 100%; padding: 10px; font-size: 16px; }
        button { padding: 10px 20px; font-size: 16px; cursor: pointer; }
        .response { margin-top: 20px; padding: 15px; background: #f0f0f0; }
        .sources { margin-top: 10px; color: #666; font-size: 14px; }
    </style>
</head>
<body>
    <h1>Ask Me Anything</h1>
    <input type="text" id="query" placeholder="Ask your question...">
    <button onclick="ask()">Ask</button>
    <div id="result"></div>

    <script>
        function ask() {
            const query = document.getElementById("query").value;

            fetch("/ask", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({query})
            })
            .then(r => r.json())
            .then(data => {
                document.getElementById("result").innerHTML = `
                    <div class="response">
                        <h3>Answer:</h3>
                        <p>${data.answer}</p>
                        <div class="sources">
                            Sources: ${data.sources.join(", ")}
                        </div>
                    </div>
                `;
            });
        }
    </script>
</body>
</html>
```

## Step 8: Evaluation and Iteration

### Testing RAG Quality

```python
test_questions = [
    ("What's the refund policy?", "refund_policy.md"),
    ("How do I reset my password?", "help_articles.md"),
    ("What's your pricing?", "pricing_page.pdf")
]

results = []
for question, expected_source in test_questions:
    result = answer_question(question)

    # Check if correct source used
    correct = expected_source in result["sources"]

    results.append({
        "question": question,
        "correct_source": correct,
        "answer": result["answer"]
    })

# Summary
correct = sum(1 for r in results if r["correct_source"])
accuracy = correct / len(results) * 100
print(f"Source accuracy: {accuracy:.0f}%")
```

### Common Issues and Fixes

| Issue | Cause | Solution |
|-------|-------|----------|
| Wrong sources retrieved | Bad chunk size | Adjust chunk size (try 512 tokens) |
| Hallucinating despite documents | Poor prompt | Improve system message |
| Slow retrieval | Too many chunks | Filter or pre-process |
| Expensive embeddings | Creating too many | Batch embedding creation |
| Low quality answers | Bad documents | Improve document quality |

### Iterative Improvement

1. **Monitor failures**: Which questions answered poorly?
2. **Analyze root cause**: Wrong documents? Bad prompt?
3. **Improve documents**: Add missing information
4. **Improve chunks**: Adjust size/overlap
5. **Improve prompts**: Better instructions
6. **Repeat**: Monthly evaluation

## Production Considerations

### Caching

Cache common queries to reduce costs:

```python
from functools import lru_cache

@lru_cache(maxsize=1000)
def answer_question_cached(query):
    return answer_question(query)
```

### Rate Limiting

Prevent abuse:

```python
from flask_limiter import Limiter

limiter = Limiter(app)

@app.route("/ask", methods=["POST"])
@limiter.limit("100 per hour")
def ask():
    # ...
```

### Monitoring

Track metrics:
- Questions per day
- Average latency
- Cost per query
- User satisfaction

## Cost Estimates

### Monthly Costs (1000 questions/day)

| Component | Cost |
|-----------|------|
| Embeddings (retrieval) | $30 |
| LLM inference (answers) | $15 |
| Vector DB hosting | $10-50 |
| **Total** | **$55-95** |

Scales linearly with volume.

## Conclusion

RAG is the most practical way to build AI applications using your data. The pattern is: retrieve → augment → generate. Your documents stay private, answers are grounded in reality, and users get sources. Start with 10-50 documents, test retrieval quality, and expand from there. The iterative loop of evaluating failures and improving documents is where you'll achieve production-grade systems. RAG isn't replacing LLMs—it's the pattern that makes LLMs actually useful for real-world applications.
