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
                src="/images/pokemon-101.png"
                layout="responsive"
                height={180}
                width={200}
                alt="All Pokemon Visual"
              />
            </div>
            <div className={styles.projecttext}>
              <h5>Pokemon 101</h5>
              <h6>
                A parent's guide to Pokemon. What are pokemon? Answers to your
                Frequently Asked Questions.
              </h6>
              <br></br>

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
                src="/images/trading-cards.png"
                layout="responsive"
                height={200}
                width={200}
                alt="Pokemon cards"
              />
            </div>
            <div className={styles.projecttext}>
              <h5>Pokemon Trading Card Game</h5>
              <h6>
                TCG From collecting cards, types of cards and building decks - a
                guide for how to play the Pokemon Trading Card Game.
              </h6>
              <br></br>
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
                src="/images/pokemon-group.png"
                layout="responsive"
                height={180}
                width={200}
                alt="Pokemon Group"
              />
            </div>
            <div className={styles.projecttext}>
              <h5>Pokedex</h5>
              <h6>
                Discover your favourite pokemon's type, abilities, attacks and
                much more!
              </h6>
              <br></br>
              <Link href="/pokedex">
                <Button>Learn More</Button>
              </Link>
            </div>
          </a>
        </div>
      </main>
    </div>
  );
}

export default pokecenter;
