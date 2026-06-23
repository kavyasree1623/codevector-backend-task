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
    console.log("Reset:", reset);
    console.log("Current Cursor:", cursor);

    const result = await getProducts(
      20,
      category,
      reset ? "" : cursor
    );

    console.log("Received:", result.data.length);
    console.log("Next Cursor:", result.nextCursor);

    if (reset) {
      setProducts(result.data);
    } else {
      setProducts((prev) => {
        console.log("Previous Length:", prev.length);
        console.log("New Length:", prev.length + result.data.length);

        return [...prev, ...result.data];
      });
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