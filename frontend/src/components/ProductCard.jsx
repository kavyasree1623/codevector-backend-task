function ProductCard({ product }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "15px",
        marginBottom: "10px",
        borderRadius: "8px",
      }}
    >
      <h3>{product.name}</h3>
      <p>Category: {product.category}</p>
      <p>Price: ₹{product.price}</p>
    </div>
  );
}

export default ProductCard;