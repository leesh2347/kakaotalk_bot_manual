function SearchBar({ searchQuery, setSearchQuery, placeholder = "검색어를 입력하세요..." }) {
  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder={placeholder}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {searchQuery && (
        <button className="search-clear" onClick={() => setSearchQuery('')}>
          ✕
        </button>
      )}
    </div>
  )
}

export default SearchBar
