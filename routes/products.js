const express = require("express");
const router = express.Router();
const pool = require("../db/index");

router.get("/", async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 20;
    const category = req.query.category;
    const cursor = req.query.cursor;

    let query = `
      SELECT *
      FROM products
      WHERE 1=1
    `;

    const values = [];
    let param = 1;

    if (category) {
      query += ` AND category = $${param}`;
      values.push(category);
      param++;
    }

    if (cursor) {
      query += ` AND id < $${param}`;
      values.push(cursor);
      param++;
    }

    query += `
      ORDER BY id DESC
      LIMIT $${param}
    `;

    values.push(limit);

    const result = await pool.query(query, values);

    const nextCursor =
      result.rows.length > 0
        ? result.rows[result.rows.length - 1].id
        : null;

    res.json({
      count: result.rows.length,
      nextCursor,
      data: result.rows,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Internal Server Error",
    });
  }
});

module.exports = router;