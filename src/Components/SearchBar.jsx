import React, { useState } from "react";
import styles from "../Styles/Components/SearchBar.module.css";
import { CiSearch } from "react-icons/ci";

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    onSearch(city);
    setCity("");
  };

  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
        className={styles.input}
      />
      <button onClick={handleSearch} className={styles.button}>
        <CiSearch />
      </button>
    </div>
  );
};

export default SearchBar;
