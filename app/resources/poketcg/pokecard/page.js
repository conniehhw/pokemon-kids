import React from "react";

// import styles from "../../pokemedia/pokemedia.module.css";
import styles from "../../poketcg/poketcg.module.css";
// import Badge from "react-bootstrap/Badge";
import Image from "next/image";
import Link from "next/link";

function pokecard() {
  return (
    <div className={styles.main}>
      <div>
        <ul className={styles.breadcrumb}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/resources">Resources</a>
          </li>
          <li>
            <a href="/resources/poketcg">TCG</a>
          </li>
          <li>Pokecard</li>
        </ul>
      </div>

      <div className={styles.grid}>
        {/* <div>
          {" "}
          <Image
            className={styles.img}
            src="/images/pokemon-card.png"
            // layout="responsive"
            height={160}
            width={390}
            alt="pokemon card evolutions"
          />
        </div> */}
      </div>

      <div className={styles.content}>
        <div>
          <div>
            <h2>Parts of a Pokémon Card</h2>
            <h4>
              Pokémon cards provide a lot of information about the Pokémon
              featured.
            </h4>
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <div>Pokémon Name, Evolution Stage, HP and Type</div>
      </div>
      <br></br>

      <div className={styles.sectioncopy}>
        <div className={styles.container}>
          <Image
            className={styles.img}
            src="/images/parts-of-card.png"
            // layout="responsive"
            height={914}
            width={846}
            alt="pokemon card parts diagram"
          />

          <div className={styles.sectionText}>
            <h6>Name and Evolution Stage</h6>
            <p>
              This is where you find the Pokémon's name and the evolutionary
              stage it is in.{" "}
            </p>
            <p>
              Some Pokémon can evolve into different forms while others remain
              in its basic form. The stages are: Basic, Stage 1, Stage 2 and
              Mega etc. It is labelled here and the circle on the upper left of
              the card shows an image of which pokémon form it evolved from, if
              not in its basic form.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.sectioncopy}>
        <div className={styles.container}>
          <div className={styles.sectionText}>
            <h6>Hit Points (HP)</h6>
            <p>
              This number represents the Pokémon's total hit points at the
              beginning of the battle. When a Pokémon is attacked, it depletes
              its hit points (aka health points). When that reaches 0, the
              Pokémon is considered "Knocked Out".
            </p>
          </div>
        </div>
      </div>

      <div className={styles.sectioncopy}>
        <div className={styles.container}>
          <div className={styles.sectionText}>
            <h6>Pokémon Type</h6>
            <p>
              A Pokémon may belong to a single type or two types. There are
              currently
              <Link href="/resources/poketcg/energytypes" target="_blank">
                19 types
              </Link>{" "}
              and each type has unique attributes that power different attack
              moves.
            </p>
          </div>
        </div>
      </div>

      <figure className={styles.figure}>
        <Image
          className={styles.imgFig}
          src="/images/meowscarada-card.png"
          // layout="responsive"
          height={400}
          width={300}
          alt="meowscarada pokemon card"
        />
        <figcaption className={styles.figCap}>
          <p>An example: </p>
          <p>
            Meowscarada is a stage 2, grass type Pokémon. Its attack "Flower
            Blast" can inflict 130 damage to the opponent Pokémon HP. The attack
            cost is one grass type energy card plus any other type energy card.
          </p>
          {/* <p>   However, its weakness are fire types - so if Charizard uses its
              attack "Flamethrower", which can inflict 160 damage to
              Meowscarada's HP, it will in fact cause 160 x 2 damage.</p> */}
        </figcaption>
      </figure>

      <div className={styles.section}>
        <div>Attack Cost, Description and Damage</div>
      </div>

      <div className={styles.sectioncopy}>
        <div className={styles.container}>
          <div className={styles.sectionText}>
            <h6>Attack Cost</h6>
            <p>
              These symbols show the quantity and type of energy cards needed
              for the Pokémon to power up their attack.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.sectioncopy}>
        <div className={styles.container}>
          <div className={styles.sectionText}>
            <h6>Attack Description</h6>
            <p>
              This is the name of your Pokémon's attacks and a brief description
              of how the move works. Pokémon can have one or multiple attacks
              that they can deploy.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.sectioncopy}>
        <div className={styles.container}>
          <div className={styles.sectionText}>
            <h6>Attack Damage</h6>
            <p>
              {" "}
              This is a number that indicates the amount of damage the Pokémon's
              attacks can inflict on another's HP.
            </p>
          </div>
          {/* <Image
            className={styles.imgnbr}
            src="/images/energy-attack-damage.png"
            layout="responsive"
            height={1002}
            width={842}
            alt="pokemon card parts diagram 2"
          /> */}
        </div>
      </div>

      <div className={styles.section}>
        <div>Weakness, Resistance and Retreat Cost</div>
      </div>

      <div className={styles.sectioncopy}>
        <div className={styles.container}>
          <div className={styles.sectionText}>
            <h6>Weakness and Resistance</h6>
            <p>
              This shows the Pokémon's Weakness to specific types of Pokémon and
              their corresponding attacks. When a Pokémon is weak to a type, all
              attacks from that type will hit for double damage.
            </p>
            <p>
              This section of the card also shows the Pokémon's resistance to
              certain types if applicable.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.sectioncopy}>
        <div className={styles.container}>
          <div className={styles.sectionText}>
            <h6>Retreat Cost</h6>
            <p>
              As your Pokémon's HP decline, you may want to switch them out of
              the battlefield. This section of the card shows the number of
              energy cards needed to retreat them back to the bench.
            </p>
          </div>
        </div>
      </div>

      {/* <div className={styles.sectioncopy}>
        <div className={styles.container}>
          <div className={styles.sectionText}>
            <h6>Cost to Retreat</h6>
            <p>
              The amount of energy needed to switch the Pokemon out of the
              battlefield. For example: To remove this active Pokemon back to
              the bench, you will need two energy cards of any type to retreat.
            </p>
          </div>
          <Image
            className={styles.imgnbr}
            src="/images/weakness-resist-retreat.png"
            layout="responsive"
            height={1002}
            width={842}
            alt="pokemon card parts diagram 3"
          />
        </div>
      </div> */}
    </div>
  );
}

export default pokecard;
