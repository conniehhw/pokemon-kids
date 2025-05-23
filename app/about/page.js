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

      <div className={styles.welcome}>
        <div>
          <Image
            className={styles.img}
            src="/images/talkative-pikachu.png"
            // layout="responsive"
            height={580}
            width={580}
            alt="talkative Pikachu"
          />
        </div>
        <div>
          <h3>"Mom, mom! DID YOU KNOW that Pokemon Poke Po ..."</h3>
          <p>
            Imagine this ... now times infinity ... and 24/7 well okay not
            quite. My 6 year old would be talking about Pokemon as we walk to
            and from school, in the car, while at the shopping for food, etc.
          </p>
          <p>
            His new love was Pokemon and I wanted to be able to talk to him
            about his favourite subject. Not the usual, "Hmm, really? Okay,
            that's cool" but really be able to engage with him and ask
            meaningful questions. So I watched a few Youtube videos, read a few
            articles, browsed some books and the official website so I knew what
            on earth he was talking about.
          </p>
          <div>
            <p>
              Of course, this idea came about and "Wouldn't it be nice if there
              was one resource that gave me all the basics I needed to know AND
              it would only take 30 minutes to go through?" and this website was
              started. I hope you will find this website helpful :)
            </p>
            <p>
              A special shout out and thank you to my son for his help and kind
              words.
            </p>
          </div>
        </div>
      </div>

      {/* <div>Photo by Thimo Pedersen on Unsplash</div> */}
      {/* create a form to email and receive comments */}
    </div>
  );
}
