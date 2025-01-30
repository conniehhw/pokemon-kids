import React from "react";
import styles from "../components/components.module.css";
import { SearchResult } from "../components/SearchResult";

{
  /* remove <div< placeholders, and instead taking the results as the props that are being passed down to it */
}
export const SearchResultsList = ({ results }) => {
  return (
    <div>
      <div className={styles.resultsList}>
        {/* go through each result and map the value in each result to a new div */}
        {/* use curly braces to add code in between the markup */}

        {results.map((result, id) => {
          // index = id, why
          //   return <div key={id}>{result.name}</div>;
          // we also give it a key, bc when creating a For Loop like this, every element you create should have a key,
          // now when add in some text in search bar (input element), it renders out whichever users match our input, instead of having each results as a div, we'll create a new component to represent each result
          return <SearchResult key={id} result={result} />;
        })}
      </div>
      {/* <div className={styles.resultsList}>
        {results.map((result, id) => {
          return <div key={id}>{result.name}</div>
        })}
      </div> */}
    </div>
  );
};
