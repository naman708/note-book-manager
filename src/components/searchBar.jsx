function SearchBar({ onSearch }) {
  return (
    <div className="max-w-md mx-auto mt-6">
      <input
        type="text"
        placeholder="Search by title or description..."
        onChange={(e) => onSearch(e.target.value)}
        className="w-full px-3 py-2 border rounded"
      />
    </div>
  );
}

export default SearchBar;
