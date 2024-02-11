import React from "react";
import SearchBar from "../Components/SearchBar";
import RecentSearches from "../Components/RecentSearches";
import styles from "../Styles/Container/Sidebar.module.css";

const Sidebar = ({ onSearch, recentSearches }) => {
  return (
    <div className={styles.sidebar}>
      <SearchBar onSearch={onSearch} />
      <RecentSearches recentSearches={recentSearches} />
    </div>
  );
};

export default Sidebar;
