# 🚀 CodeVector Product Browser

A scalable product browsing system built for the **CodeVector Backend Engineering Internship Task**.

The project demonstrates efficient handling of **200,000+ products** using **cursor-based pagination**, category filtering, PostgreSQL indexing, and cloud deployment.

---

## 🌐 Live Demo

### Frontend

https://codevector-backend-task.vercel.app/

### Backend API

https://codevector-backend-task-u2hy.onrender.com

### GitHub Repository

https://github.com/kavyasree1623/codevector-backend-task

---

## 📌 Project Overview

This application provides a scalable product catalog system capable of handling large datasets while maintaining fast response times.

Key goals achieved:

* Efficient browsing of 200,000+ products
* Cursor-based pagination
* Category filtering
* PostgreSQL database optimization
* Cloud deployment
* React frontend integration

---

## 🏗️ System Architecture

```text
React Frontend (Vercel)
          │
          ▼
Express.js API (Render)
          │
          ▼
PostgreSQL Database (Neon)
```

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* JavaScript

### Backend

* Node.js
* Express.js

### Database

* PostgreSQL
* Neon Database

### Deployment

* Vercel (Frontend)
* Render (Backend)

---

## ✨ Features

### Product Browsing

* View products with pagination
* Load additional products dynamically
* Category-based filtering

### Scalability

* Handles 200,000+ product records
* Cursor-based pagination for efficient navigation
* Indexed queries for fast retrieval

### API Features

* Product listing endpoint
* Cursor pagination support
* Category filtering
* Structured JSON responses

---

## 🗄️ Database Schema

### Products Table

| Column     | Type               |
| ---------- | ------------------ |
| id         | SERIAL PRIMARY KEY |
| name       | VARCHAR            |
| category   | VARCHAR            |
| price      | NUMERIC            |
| created_at | TIMESTAMP          |
| updated_at | TIMESTAMP          |

---

## 📡 API Documentation

### Get Products

```http
GET /products
```

### Query Parameters

| Parameter | Description                        |
| --------- | ---------------------------------- |
| limit     | Number of records to fetch         |
| cursor    | Last product ID from previous page |
| category  | Filter products by category        |

---

### Example Requests

#### First Page

```http
GET /products?limit=20
```

#### Next Page

```http
GET /products?limit=20&cursor=199981
```

#### Filter by Category

```http
GET /products?category=Sports&limit=20
```

#### Filter + Pagination

```http
GET /products?category=Beauty&limit=20&cursor=199981
```

---

## 📦 Example Response

```json
{
  "count": 20,
  "nextCursor": 199981,
  "data": [
    {
      "id": 200000,
      "name": "Sample Product",
      "category": "Sports",
      "price": 199.99
    }
  ]
}
```

---

## 🎯 Available Categories

* Beauty
* Sports
* Books
* Clothing
* Home
* Automotive

---

## ⚡ Why Cursor-Based Pagination?

Traditional OFFSET pagination becomes slower as data volume grows.

Cursor-based pagination was chosen because it:

* Provides consistent performance at scale
* Avoids skipped or duplicated records
* Handles data updates more reliably
* Reduces database workload
* Scales efficiently with large datasets

---

## 📈 Performance Optimizations

* Indexed primary key lookups
* Indexed category filtering
* Cursor-based pagination
* Optimized PostgreSQL queries
* Bulk data seeding
* Cloud-hosted Neon database

---

## 🚀 Local Setup

### Clone Repository

```bash
git clone https://github.com/kavyasree1623/codevector-backend-task.git
cd codevector-task
```

### Install Backend Dependencies

```bash
npm install
```

### Install Frontend Dependencies

```bash
cd frontend
npm install
```

### Configure Environment Variables

Create a `.env` file:

```env
DATABASE_URL=your_neon_database_url
PORT=3000
```

### Run Backend

```bash
npm start
```

### Run Frontend

```bash
cd frontend
npm run dev
```

---

## 🌱 Seed Database

Generate and insert 200,000+ products:

```bash
node seed.js
```

---

## 🔮 Future Improvements

* Infinite scrolling
* Composite cursor pagination
* Redis caching
* Automated testing
* Docker support
* API rate limiting
* Monitoring and logging

---

## 🤖 AI Usage

AI tools were used for:

* Architecture validation
* Pagination strategy review
* Debugging assistance
* Documentation refinement

All implementation decisions were reviewed, tested, and validated manually.

---

## 👩‍💻 Author

Kavya Sree

GitHub: https://github.com/kavyasree1623
