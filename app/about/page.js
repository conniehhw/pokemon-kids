// import styles from "../page.module.css";

import styles from "../about/about.module.css";
import Button from "react-bootstrap/Button";

import Image from "next/image";

export default function About() {
  // const [results, setResults] = useState([]);

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
          <li>About</li>
        </ul>
      </div>

      <div className={styles.grid}>
        <div>
          <Image
            className={styles.img}
            src="/images/pokemonbabies1.png"
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
