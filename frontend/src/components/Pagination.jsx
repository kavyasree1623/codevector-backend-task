function Pagination({ loadMore }) {
  return (
    <button onClick={loadMore}>
      Load More
    </button>
  );
}

export default Pagination;