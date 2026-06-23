require("dotenv").config();

const { faker } = require("@faker-js/faker");
const pool = require("../db");



const categories = [
  "Electronics",
  "Books",
  "Clothing",
  "Home",
  "Sports",
  "Beauty",
  "Toys",
  "Automotive",
];

const TOTAL_PRODUCTS = 200000;
const BATCH_SIZE = 1000;

async function seedProducts() {
  try {
    console.log("Starting seed...");

    for (let offset = 0; offset < TOTAL_PRODUCTS; offset += BATCH_SIZE) {
      const values = [];
      const placeholders = [];

      for (let i = 0; i < BATCH_SIZE; i++) {
        const index = i * 5;

placeholders.push(
  `($${index + 1}, $${index + 2}, $${index + 3}, $${index + 4}, $${index + 5})`
);
values.push(
  faker.commerce.productName(),
  faker.helpers.arrayElement(categories),
  faker.number.float({ min: 10, max: 5000, fractionDigits: 2 }),
  new Date(),
  new Date()
);
      }

      await pool.query(
  `
  INSERT INTO products
(name, category, price, created_at, updated_at)
  VALUES
  ${placeholders.join(",")}
  `,
  values
      );
      console.log(
        `${Math.min(offset + BATCH_SIZE, TOTAL_PRODUCTS)} inserted`
      );
    }

    console.log("Finished inserting 200,000 products");
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

seedProducts();