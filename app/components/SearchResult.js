import React from "react";
import styles from "../components/components.module.css";

export const SearchResult = ({ result }) => {
  return (
    <div
      className={styles.searchResult}
      //   onClick={(e) => alert(`You clicked on ${result}`)}
      onClick={(e) => alert(`You clicked on ${result.name}`)}
    >
      {/* to detect whenever an element inside our list is clicked, use onClick function, get (e) click event, pass in the {result} clicked on, note if just {result vs. result.name}, alert will be [object Object]  */}
      {result.name}
    </div>
  );
  // name of the current user at this specific index
};
