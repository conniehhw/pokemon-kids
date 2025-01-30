import React from "react";
import styles from "../components/components.module.css";

export const SearchResult1 = ({ results }) => {
  return (
    <div
      className={styles.searchResult}
      // onClick={(e) => alert(`YOU clicked on ${result.id}`)}
      onClick={(e) => alert(`YOU clicked on ${results.id}`)}
    >
      {results.id}
    </div>
  );
};
