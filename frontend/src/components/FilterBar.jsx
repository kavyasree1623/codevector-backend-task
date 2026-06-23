function FilterBar({ category, setCategory }) {
  const categories = [
    "",
    "Beauty",
    "Sports",
    "Books",
    "Clothing",
    "Home",
    "Automotive",
  ];

  return (
    <select
      value={category}
      onChange={(e) => setCategory(e.target.value)}
    >
      {categories.map((item) => (
        <option key={item} value={item}>
          {item || "All Categories"}
        </option>
      ))}
    </select>
  );
}

export default FilterBar;