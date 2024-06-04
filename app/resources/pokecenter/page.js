import styles from "../pokecenter/pokecenter.module.css";
import Image from "next/image";
import Button from "react-bootstrap/Button";
import Link from "next/link";

function pokecenter() {
  return (
    <div>
      <main className={styles.main}>
        <div className={styles.welcome}>
          <a href="">
            <div className={styles.welcometext}>
              <h1 class="font-weight-light">Welcome!</h1>
              <h4>
                So you want to be a pokemon trainer? Follow along with Ash and
                Pikachu and start your journey.
              </h4>
              <br></br>
              <Button variant="primary" style={{ color: "blue" }}>
                <Link href="/about">
                  <span style={{ color: "white" }}>Let's Go!</span>
                </Link>
              </Button>
            </div>
          </a>

          <a href="">
            <Image
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
                src="/images/pikachu-ash-example.png"
                layout="responsive"
                height={180}
                width={200}
                alt="Pikachu + Ash"
              />
            </div>
            <div className={styles.projecttext}>
              <h5>text</h5>
            </div>
          </a>

          <a href="">
            <div className={styles.projectimg}>
              <Image
                // className={styles.projectsimg}
                src="/images/pokeball.png"
                layout="responsive"
                height={200}
                width={200}
                alt="Pokeball"
              />
            </div>
            <div className={styles.projecttext}>
              <h5>text</h5>
            </div>
          </a>

          <a href="">
            <div className={styles.projectimg}>
              <Image
                // className={styles.projectsimg}
                src="/images/poke-cafe1.png"
                layout="responsive"
                height={180}
                width={200}
                alt="Poke cafe"
              />
            </div>
            <div className={styles.projecttext}>
              <h5>text</h5>
            </div>
          </a>
        </div>
      </main>
    </div>
  );
}

export default pokecenter;
