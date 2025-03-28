// import styles from "../page.module.css";
"use client";

import styles from "../about/about.module.css";
// import { SearchBar1 } from "../components/SearchBar1";
// import { SearchBar } from "../components/SearchBar";
// import { SearchResultsList1 } from "../components/SearchResultsList1";
// import { SearchResultsList } from "../components/SearchResultsList";
import { useState } from "react";

import Image from "next/image";

export default function About() {
  const [results, setResults] = useState([]);

  // we want to create another stateful variable
  // which will contain the results we've gotten back from the API, b/c we want to be able to modify
  // this array using the search bar and we want to send it into our search results component so it can render it ou

  return (
    <div className={styles.main}>
      <div>
        <ul className={styles.breadcrumb}>
          <li>
            <a href="/">Home</a>
          </li>
          {/* <li>
            <a href="/resources">Resources</a>
          </li> */}
          <li>About</li>
        </ul>
      </div>

      {/* <SearchBar1 setResults={setResults} />
      <SearchBar setResults={setResults} /> */}

      {/* we want SearchBar to be responsible for modifying this array, so we'll pass it in as a prop, 
      so we say setResults is equal to the setResults function we have */}

      {/* <SearchResultsList1 results={results} />
      <SearchResultsList results={results} /> */}
      {/* cancel out the <div>Search results</div>, to render results, use new component pass the results variable as a prop into this */}

      <div className={styles.grid}>
        <div>
          <Image
            className={styles.img}
            src="/images/pokemon-babies.png"
            layout="responsive"
            height={280}
            width={501}
            alt="pokemon babies"
          />
        </div>
      </div>

      {/* <div>Photo by Thimo Pedersen on Unsplash</div> */}
    </div>
  );
}
