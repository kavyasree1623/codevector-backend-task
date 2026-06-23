# CodeVector Backend Engineering Task

## Overview

This project is a scalable product browsing API built for the CodeVector Backend Engineering Internship Task using Node.js, Express.js, PostgreSQL, and Neon Database.

The API efficiently handles a dataset of **200,000+ products** using **cursor-based pagination**, ensuring fast and scalable performance while supporting category-based filtering.

---

## Live Deployment

**Base URL**

https://codevector-backend-task-u2hy.onrender.com

**Example Request**

```http
GET https://codevector-backend-task-u2hy.onrender.com/products?limit=10
```

---

## Repository

GitHub Repository:

```text
https://github.com/kavyasree1623/codevector-backend-task
```

---

## Tech Stack

* Node.js
* Express.js
* PostgreSQL
* Neon Database
* Render (Deployment)

---

## Features

* 200,000+ seeded product records
* Cursor-based pagination
* Category filtering
* Newest products returned first
* Product count included in response
* Next cursor returned for pagination
* Indexed database queries for improved performance
* Cloud-hosted PostgreSQL database using Neon
* Public deployment on Render

---

## Architecture

```text
Client Request
       │
       ▼
Express.js API
       │
       ▼
PostgreSQL (Neon)
       │
       ▼
Render Deployment
```

---

## Database Schema

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

## Setup Instructions

### Clone Repository

```bash
git clone https://github.com/kavyasree1623/codevector-backend-task.git

cd codevector-backend-task
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file:

```env
DATABASE_URL=your_neon_database_url
PORT=3000
```

### Run Server

```bash
node server.js
```

Server will run at:

```text
http://localhost:3000
```

---

## Generate Sample Data

Run:

```bash
node seed.js
```

This script generates and inserts approximately **200,000 products** into PostgreSQL.

---

## API Documentation

### Get Products

```http
GET /products
```

### Query Parameters

| Parameter | Description                            |
| --------- | -------------------------------------- |
| limit     | Number of products per page            |
| cursor    | Last product ID from previous response |
| category  | Filter products by category            |

---

## Available Categories

* Beauty
* Sports
* Clothing
* Books
* Automotive
* Home

---

## Example Requests

### First Page

```http
GET /products?limit=10
```

### Next Page Using Cursor

```http
GET /products?limit=10&cursor=199992
```

### Filter By Category

```http
GET /products?category=Sports&limit=10
```

### Filter + Pagination

```http
GET /products?category=Beauty&limit=10&cursor=199992
```

---

## Example Response

```json
{
  "count": 10,
  "nextCursor": "199992",
  "data": [
    {
      "id": 200001,
      "name": "Sample Product",
      "category": "Sports",
      "price": 199.99
    }
  ]
}
```

---

## Response Fields

| Field      | Description                 |
| ---------- | --------------------------- |
| count      | Number of products returned |
| nextCursor | Cursor for the next page    |
| data       | Array of product objects    |

---

## Why Cursor-Based Pagination?

Cursor-based pagination was chosen because it is more efficient than OFFSET-based pagination for large datasets.

Benefits include:

* Faster query execution on large tables
* Better scalability with 200,000+ records
* Prevents skipped or duplicated records
* Consistent pagination when data changes
* Reduced database load

---

## Performance Optimizations

* Indexed primary key lookups
* Indexed category filtering
* Cursor-based pagination
* Optimized SQL queries
* Efficient bulk product seeding
* PostgreSQL hosted on Neon

---

## Future Improvements

* Composite cursor pagination (`updated_at`, `id`)
* Automated unit and integration testing
* Redis caching
* Rate limiting and request throttling
* Structured logging and monitoring
* Docker containerization

---

## AI Usage

AI tools were used to:

* Review implementation approaches
* Validate pagination strategy
* Assist with debugging and troubleshooting

All generated code was reviewed, tested, and modified where necessary before use.

---

## Author

**Kavya Sree**

GitHub:
https://github.com/kavyasree1623
