// import styles from "../page.module.css";
"use client";

import styles from "../about/about.module.css";
import Button from "react-bootstrap/Button";
import { useState } from "react";

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
            src="/images/pokemon-babies.png"
            layout="responsive"
            height={280}
            width={501}
            alt="pokemon babies"
          />
        </div>
      </div>

      <div className={styles.myDIV}>
        <p>Set the flex-grow property</p>
        <div className={styles.mymain}>
          <div
            style={{
              backgroundColor: "coral",
            }}
            className={styles.reddiv}
          >
            <Image
              // className={styles.projectsimg}
              // className={styles.img}
              src="/images/pokeball.png"
              // layout="responsive"
              height={200}
              width={200}
              alt="pokeball"
              className={styles.imgTest}
            />
          </div>
          <div
            style={{
              backgroundColor: "lightblue",
            }}
            className={styles.bluediv}
          >
            A parent's guide to the world of Pokemon. A parent's guide to theA
            parent's guide to the world of Pokemon. A parent's guide to the A
            parent's guide to the world of Pokemon. A parent's guide to the
          </div>
          <div
            style={{
              backgroundColor: "yellow",
            }}
            className={styles.yellowdiv}
          >
            yellow div
          </div>
          <div
            style={{
              backgroundColor: "pink",
            }}
            className={styles.pinkdiv}
          >
            pink div
          </div>
        </div>

        <div className={styles.mymain}>
          <div
            style={{
              backgroundColor: "coral",
            }}
            className={styles.reddiv2}
          >
            <Image
              // className={styles.projectsimg}
              // className={styles.img}
              src="/images/pokeball.png"
              // layout="responsive"
              height={200}
              width={200}
              alt="Trading Cards"
              className={styles.imgTest}
            />
          </div>
          <div
            style={{
              backgroundColor: "lightblue",
            }}
            className={styles.bluediv}
          >
            A parent's guide to the world of Pokemon.
          </div>
          <div
            style={{
              backgroundColor: "yellow",
            }}
            className={styles.yellowdiv}
          >
            yellow div
          </div>
          <div
            style={{
              backgroundColor: "pink",
            }}
            className={styles.pinkdiv}
          >
            pink div
          </div>
        </div>
      </div>

      <div className={styles.parentContainer}>
        <div className={styles.cardContainer}>
          {/* <div className={styles.cardImage}> */}
          <Image
            // className={styles.projectsimg}
            // className={styles.img}
            src="/images/pokeball.png"
            layout="responsive"
            height={150}
            width={150}
            alt="Trading Cards"
          />
          {/* </div> */}

          <div className={styles.cardText}>
            <h6>
              A parent's guide to the world of Pokemon. A parent's guide to the
              world of Pokemon.
            </h6>
          </div>
          <div className={styles.cardFooter}>
            <button>Learn More</button>
          </div>
        </div>

        <div className={styles.cardContainer}>
          {/* <div className={styles.cardImage}> */}
          <Image
            // className={styles.projectsimg}
            // className={styles.img}
            src="/images/trading-cards.png"
            layout="responsive"
            height={150}
            width={150}
            alt="Trading Cards"
          />
          {/* </div> */}
          <div className={styles.cardText}>
            A parent's guide to the world of Pokemon. A parent's guide to the
            world of Pokemon. A parent's guide to the world of Pokemon. A
            parent's guide to the world of Pokemon.
          </div>
          <div className={styles.cardFooter}>
            <button>Learn More</button>
          </div>
        </div>

        <div className={styles.cardContainer}>
          {/* <div className={styles.cardImage}> */}
          <Image
            // className={styles.projectsimg}
            // className={styles.img}
            src="/images/trading-cards.png"
            layout="responsive"
            height={150}
            width={150}
            alt="Trading Cards"
          />
          {/* </div> */}
          <div className={styles.cardText}>
            A parent's guide to the world of Pokemon.
          </div>
          <div className={styles.cardFooter}>
            <button>Learn More</button>
          </div>
        </div>

        <div className={styles.cardContainer}>
          {/* <div className={styles.cardImage}> */}
          <Image
            // className={styles.projectsimg}
            // className={styles.img}
            src="/images/trading-cards.png"
            layout="responsive"
            height={150}
            width={150}
            alt="Trading Cards"
          />
          {/* </div> */}

          <div className={styles.cardText}>
            A parent's guide to the world of Pokemon.
          </div>
          <div className={styles.cardFooter}>
            <button>Learn More</button>
          </div>
        </div>
      </div>

      <div className={styles.parent}>
        <div className={styles.itemTest}>
          Item
          <div className={styles.pic}>
            {" "}
            <Image
              // className={styles.projectsimg}
              // className={styles.img}
              src="/images/pokeball.png"
              // layout="responsive"
              height={200}
              width={200}
              alt="Trading Cards"
              className={styles.imgTest}
            />
          </div>
          <div className={styles.text}>
            text box: A parent's guide to the world of Pokemon.
          </div>
          <div className={styles.button}>Button</div>
        </div>
        <div className={styles.itemTest}>
          Item
          <div className={styles.pic}>image box</div>
          <div className={styles.text}>
            text box: A parent's guide to the world of Pokemon. A parent's guide
            to the world of Pokemon. A parent's guide to the world of Pokemon. A
            parent's guide to the world of Pokemon.
          </div>
          <div className={styles.button}>
            <button className={styles.b}>Learn More</button>
          </div>
        </div>
        <div className={styles.itemTest}>
          Item
          <div className={styles.pic}>image box</div>
          <div className={styles.text}>
            text box: A parent's guide to the world of Pokemon.A parent's guide
            to the world of Pokemon.
          </div>
          <div className={styles.button}>Button</div>
        </div>
      </div>

      {/* <div>Photo by Thimo Pedersen on Unsplash</div> */}
    </div>
  );
}

{
  /* <section className={styles.cards}>
        <article>
          <Image
            // className={styles.projectsimg}
            className={styles.img}
            src="/images/pokemon-101b.png"
            layout="responsive"
            height={200}
            width={200}
            alt="Pokemon Group"
          />
          <h6>
            Card 1 So you want to be a pokemon trainer? Follow along with Ash
            and Pikachu and start your journey.
          </h6>
          <Button className={styles.btn}>Learn more</Button>
        </article>

        <article>
          <Image
            // className={styles.projectsimg}
            className={styles.img}
            src="/images/pokemon-101b.png"
            layout="responsive"
            height={200}
            width={200}
            alt="Pokemon Group"
          />
          <h6>
            Card 2 So you want to be a pokemon trainer? Follow along with Ash
            and Pikachu and start your journey. So you want to be a pokemon
            trainer? Follow along with Ash and Pikachu and start your journey.
          </h6>
          <Button className={styles.button}>Learn more</Button>
        </article>
        <article>
          <Image
            // className={styles.projectsimg}
            className={styles.img}
            src="/images/pokemon-101b.png"
            layout="responsive"
            height={200}
            width={200}
            alt="Pokemon Group"
          />
          <h6>Card 3</h6>
          <Button className={styles.button}>Learn more</Button>
        </article>
      </section> */
}
