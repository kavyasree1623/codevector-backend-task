import { useEffect, useState } from "react";
import { getProducts } from "./services/api";
import ProductCard from "./components/ProductCard";
import FilterBar from "./components/FilterBar";
import Pagination from "./components/Pagination";

function App() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");
  const [cursor, setCursor] = useState("");

  async function loadProducts(reset = false) {
    try {
      const result = await getProducts(
        20,
        category,
        reset ? "" : cursor
      );

      if (reset) {
        setProducts(result.data);
      } else {
        setProducts((prev) => [...prev, ...result.data]);
      }

      setCursor(result.nextCursor);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    loadProducts(true);
  }, [category]);
console.log(products);

  return (
    <div style={{ padding: "20px" }}>
      <h1>CodeVector Product Browser</h1>

      <FilterBar
        category={category}
        setCategory={setCategory}
      />

      <br />
      <br />

      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}

      <Pagination loadMore={loadProducts} />
    </div>
  );
}

export default App;