import { useState } from "react";
import "./SearchBar.css";

function SearchBar({ city, setCity }) {
  const [input, setInput] = useState(city);

  function handleSearch() {
    if (input.trim()) {
      setCity(input);
    }
  }

  function handleKeyPress(e) {
    if (e.key === "Enter") {
      handleSearch();
    }
  }

  return (
    <div className="search-bar">
      <div className="search-container">
        <input
          className="search-input"
          type="text"
          placeholder="Enter city name"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button
          className="search-button"
          onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
