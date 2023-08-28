import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./SearchBar.css";

function Search() {
  const location = useLocation();
  const [mealName, setMealName] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const queryParams = new URLSearchParams(location.search);
  const sortKey = queryParams.get("sortKey") || "name"; // Default sorting by name
  const sortDir = queryParams.get("sortDir") || "asc"; // Default sorting direction

  const handleSearch = () => {
    // Perform your search logic using query parameters
    const searchParams = new URLSearchParams();
    searchParams.set("title", mealName);
    searchParams.set("price", priceRange);
    searchParams.set("sortKey", sortKey);
    searchParams.set("sortDir", sortDir);
    
    const searchUrl = `/api/meals?${searchParams.toString()}`;
    console.log("Searching with URL:", searchUrl);
  };

  return (
    <div className="search-container">
      <div className="search">
        <input
          type="text"
          placeholder="Search"
          value={mealName}
          onChange={(e) => setMealName(e.target.value)}
        />
        <select
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
        >
          <option value="">Sort by:</option>
          <option value="price">Price</option>
          <option value="MealName">MealName</option>
        </select>
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
}

export default Search;
