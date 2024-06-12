import styles from "../pokecenter/pokecenter.module.css";
import Image from "next/image";
import Button from "react-bootstrap/Button";
import Link from "next/link";
import { MdArrowBack } from "react-icons/md";

function pokecenter() {
  return (
    <div>
      <main className={styles.main}>
        {/* <div className={styles.navmenu}>
          <MdArrowBack />
        </div> */}
        <div className={styles.welcome}>
          <a href="">
            {/* <div className={styles.welcometext}> */}

            <h1 class="font-weight-light">Welcome!</h1>
            <h6>
              So you want to be a pokemon trainer? Follow along with Ash and
              Pikachu and start your journey.
            </h6>
            <br></br>

            {/* <Button className={styles.button}>
              <Link href="/about">
                <span>Let's Go!</span>
              </Link>
            </Button> */}
            <Link href="/about">
              <Button>Let's Go!</Button>
            </Link>
          </a>

          <a href="">
            <Image
              className={styles.img}
              src="/images/pikachu-ash.png"
              layout="responsive"
              height={790}
              width={591}
              alt="pikachu ash full"
            />
          </a>
        </div>

        <div className={styles.projects}>
          <a href="">
            <div className={styles.projectimg}>
              <Image
                className={styles.img}
                src="/images/pokemon-101a.png"
                layout="responsive"
                height={200}
                width={200}
                alt="All Pokemon Visual"
              />
            </div>
            <div className={styles.projecttext}>
              <h5>Pokemon 101</h5>
              <h6>A parent's guide. What are pokemon?</h6>

              <Link href="/resources/poke101">
                <Button>Learn More</Button>
              </Link>
            </div>
          </a>

          <a href="">
            <div className={styles.projectimg}>
              <Image
                className={styles.img}
                // className={styles.projectsimg}
                src="/images/trading-cards1.png"
                layout="responsive"
                height={200}
                width={200}
                alt="Pokemon cards"
              />
            </div>
            <div className={styles.projecttext}>
              <h5>Trading Card Game</h5>
              <h6>Collections, types of cards and building decks.</h6>

              <Link href="/resources/poketcg">
                <Button>Learn More</Button>
              </Link>
            </div>
          </a>

          <a href="">
            <div className={styles.projectimg}>
              <Image
                // className={styles.projectsimg}
                className={styles.img}
                src="/images/pokedex.png"
                layout="responsive"
                height={200}
                width={200}
                alt="Pokemon Group"
              />
            </div>
            <div className={styles.projecttext}>
              <h5>Pokedex</h5>
              <h6>Get the stats on your favourite Pokemon & more</h6>

              <Link href="/pokedex">
                <Button>Learn More</Button>
              </Link>
            </div>
          </a>
        </div>

        {/* <div>
        <div className={styles.Title}>Title</div>
        <div>
          <div className={styles.scrollingwrapper} class="scrolling-wrapper">
            <div className={styles.card}>
              <Image
                className={styles.img}
                src="/images/pokemon-101a.png"
                layout="responsive"
                height={200}
                width={200}
                alt="All Pokemon Visual"
              />
              <div className={styles.cardtext}>
                <h5>Pokemon 101</h5>
                <h6>Frequently Asked Questions</h6>
              </div>
            </div>
            <div className={styles.card}>
              <Image
                className={styles.img}
                src="/images/pokemon-101a.png"
                layout="responsive"
                height={200}
                width={200}
                alt="All Pokemon Visual"
              />
              <div className={styles.cardtext}>
                <h5>Pokemon 101</h5>
                <h6>Frequently Asked Questions</h6>
              </div>
            </div>
            <div className={styles.card}>
              <Image
                className={styles.img}
                src="/images/pokemon-101a.png"
                layout="responsive"
                height={200}
                width={200}
                alt="All Pokemon Visual"
              />{" "}
              <div className={styles.cardtext}>
                <h5>Pokemon 101</h5>
                <h6>Frequently Asked Questions</h6>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      </main>
    </div>
  );
}

export default pokecenter;
