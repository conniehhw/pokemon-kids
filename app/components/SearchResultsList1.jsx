import React from "react";
import styles from "../components/components.module.css";
import { SearchResult1 } from "../components/SearchResult1";

export const SearchResultsList1 = ({ results }) => {
  return (
    <div>
      <div className={styles.resultsList}>
        {results.map((results, id) => {
          return (
            <div>
              <SearchResult1 key={id} results={results} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
