function Pagination({ loadMore }) {
  return (
    <button onClick={() => loadMore(false)}>
      Load More
    </button>
  );
}

export default Pagination;