import styles from "../about/about.module.css";
import WebForm from "../components/WebForm";
import Image from "next/image";

export default function About() {
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

      {/* main content */}
      <div className={styles.welcome}>
        <div className={styles.alignimg}>
          <figure>
            <Image
              className={styles.img}
              src="/images/talkative-pikachu.png"
              // layout="responsive"
              height={580}
              width={580}
              alt="talkative Pikachu"
            />
            <figcaption className={styles.figcaption}>
              Modified, original image by&nbsp;
              <a href="https://pixabay.com/users/saiarvind1995-16329347/">
                saiarvind1995&nbsp;
              </a>{" "}
              on&nbsp;
              <a href="https://pixabay.com">pixabay.</a>
            </figcaption>
          </figure>
        </div>
        <div>
          <h3>"Mom, mom! DID YOU KNOW that Pokémon Poke Po ..."</h3>
          <p>
            Imagine this ... now times infinity ... and 24/7 well okay not
            quite. My 6 year old would be talking about Pokémon as we walk to
            and from school, in the car, while at the shopping for food, etc.
          </p>
          <p>
            His new love was Pokémon and I wanted to be able to talk to him
            about his favourite subject. Not the usual, "Hmm, really? Okay,
            that's cool" but really be able to engage with him and ask
            meaningful questions. So I watched a few Youtube videos, read a few
            articles, browsed some books and the official website so I knew what
            on earth he was talking about.
          </p>
          <div>
            <p>
              "Wouldn't it be nice if there was one resource that gave me all
              the basics I needed to know AND it would only take 30 minutes to
              go through?" and this was how this website was started.
            </p>
            <p>
              A special shout out and thank you to my son for his help,
              inspiration and kind words.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.lgbg}>
        <div className={styles.contact}>
          <WebForm />
        </div>
      </div>
    </div>
  );
}
