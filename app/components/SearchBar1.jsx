import React from "react";
import styles from "../components/components.module.css";
import { useState } from "react"; // use state hook to figure out what the user has input

export const SearchBar1 = ({ setResults }) => {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      // fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")

      .then((response) => response.json())
      .then((json) => {
        console.log(json);

        const results = json.filter((post) => {
          // const results = data.filter((pokemon) => { // keep getting error xor.filter is not a function
          return (
            value && post && post.id && post.body.toLowerCase().includes(value)
          );
        });

        setResults(results);
        console.log(results);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };
  return (
    <div className={styles.inputwrapper}>
      <input
        className={styles.input}
        placeholder="Type to search Pokemon"
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar1;
