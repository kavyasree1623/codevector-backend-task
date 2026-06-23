require("dotenv").config();

const express = require("express");
const productsRoute = require("./routes/products");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "CodeVector Product API Running",
  });
});

app.use("/products", productsRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
