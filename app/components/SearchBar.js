"use client";

import styles from "../components/components.module.css";
import { useState } from "react"; // use state hook to figure out what the user has input

export const SearchBar = ({ setResults }) => {
  //we take it (setResults) in as a prop (from the jsx page), by opening up the braces
  const [input, setInput] = useState(""); // input = variable to store the value inputted, setInput = use to change the variable's value is, initial state is empty string

  // const fetchData will take in some value which is the text to search for, make call to API
  const fetchData = (value) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      // we need to call this function whenever the tx changes in the search bar
      .then((response) => response.json()) //fetch() is asynchronous; returns a value later on in time, 
      //change .then, which awaits for the result and then performs actions on i, then convert response to json format for readable to javascript
      .then((json) => {
        // chain another .then get back the json value,
        console.log(json);
        const results = json.filter((user) => {
          // "&&" do checks, 1. if user exists in current index, 2. if user has a name, 3. to see if includes the value entered into our search field
          return (
            value && // nothing gets render if no value - if nothing in search field
            user &&
            user.name &&
            user.name.toLowerCase().includes(value)
          ); // we are filtering on front end side with filter() but usually, you would send the value back to your back end via the url or in the body of the request and you will only get back the relevant data (then no need to filter on front end side)
        });
        setResults(results); // no longer need the console.log below, we will pass in the results variable we have over here
        console.log(results); // next, we show the data back to the user via the UI side
      });
  };
  // we want to only render the data which matches the text inside our input element
  // want to filter the json data and store it into a variable called 'results', filter() is an array function, it go
  // through each element inside array and take in the "user/element" in the specific index, we want to return true if matches the text inside our input element and return false if does not match

  const handleChange = (value) => {
    // will take in a value and first thing it'll do is set the input variable to the given value, (same as onChange below), second it will pass in the value to the fetch data function
    setInput(value);
    fetchData(value); // make call to relevent fetch api
  };

  return (
    <div className={styles.inputwrapper}>
      <input
        className={styles.input}
        placeholder="Type to search"
        value={input} // what ever the value of the input variable is
        // onChange={(e) => setInput(e.target.value)} // onChange, when user changes value, taken the event and set the input variable to the value inside this input element by e.target.value; whatever is typed will be set inside the input variable
        onChange={(e) => handleChange(e.target.value)} // when ever the text changes, it will make a call to fetch api
      />
    </div>
  );
};

export default SearchBar;
