"use Client";

import Link from "next/link";
import { useState } from "react";
import styles from "../components/components.module.css";

export default function SearchCoins({ getSearchResults }) {
  const [query, setQuery] = useState("");

  const handleSubmit = async (e) => {
    //e = event object
    e.preventDefault();

    // const response = await fetch("/api/coins");

    const response = await fetch(`/api/coins/search?query=${query}`); // pass query into the search parameter; dynamic value of query, need to change string to template literal

    const coin = await response.json();

    getSearchResults(coin);
  };

  return (
    <div className={styles.parent}>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.child}
          type="text"
          placeholder="Search coin..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className={styles.searchBtn} type="submit">
          Search
        </button>
      </form>
    </div>
  );
}
