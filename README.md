# CodeVector Backend Engineering Task

## Overview

This project is a backend API built using Node.js, Express.js, PostgreSQL, and Neon Database. It supports browsing a large dataset of 200,000 products with efficient cursor-based pagination and category filtering.

## Tech Stack

* Node.js
* Express.js
* PostgreSQL
* Neon Database
* Render (Deployment)

## Features

* 200,000 seeded product records
* Cursor-based pagination
* Category filtering
* Newest products first
* Product count in response
* Next cursor returned for pagination
* Indexed database queries for better performance

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

## Setup Instructions

### Clone Repository

```bash
git clone <repository-url>
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

Server will run on:

```text
http://localhost:3000
```

## Generate Sample Data

Run:

```bash
node seed.js
```

This generates and inserts approximately 200,000 products into PostgreSQL.

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
| category  | Filter by category                     |

### Example Requests

```http
GET /products?limit=10
```

```http
GET /products?limit=10&cursor=199992
```

```http
GET /products?category=Sports&limit=10
```

### Example Response

```json
{
  "count": 10,
  "nextCursor": "199992",
  "data": [...]
}
```

## Why Cursor-Based Pagination?

Cursor pagination was chosen because:

* Faster than OFFSET pagination on large datasets
* Scales efficiently with 200,000+ records
* Prevents duplicate and skipped records when data changes
* Better database performance

## Performance Optimizations

* Indexed product IDs
* Indexed category column
* Cursor-based queries using primary key lookups
* Efficient bulk seeding approach

## Future Improvements

* Composite cursor using `updated_at` + `id`
* Automated testing
* Rate limiting
* API caching
* Monitoring and logging

## AI Usage

AI tools were used to:

* Review implementation ideas
* Validate pagination strategy
* Assist with debugging

All generated code was reviewed, tested, and modified where necessary.
