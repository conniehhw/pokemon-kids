import React from "react";
// import styles from "../pokemedia/pokemedia.module.css";
import styles from "../../pokemedia/pokemedia.module.css";
// import Badge from "react-bootstrap/Badge";
import Image from "next/image";
import Link from "next/link";

function pokecard() {
  return (
    <div>
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
          {/*<li>Italy</li> */}
        </ul>
      </div>
      <div className={styles.grid}>
        <div>
          {" "}
          <Image
            className={styles.img}
            src="/images/tradingcards-banner.png"
            layout="responsive"
            height={160}
            width={390}
            alt="trading cards banner"
          />
        </div>
      </div>
      <div className={styles.content}>
        <div>
          <div>
            <h2>Parts of a Pokemon Card</h2>
            <h4>
              Pokemon cards provide a lot of information about the Pokemon
              featured.
            </h4>
          </div>
        </div>
        {/* <div>Testing 1</div>
        <div>testing 1</div>
        <div>testing 2</div> */}
      </div>
      <div className={styles.section}>
        <div>Pokemon Type, HP, Card Name & Stage</div>
      </div>
      <div className={styles.sectioncopy}>
        <div>Pokemon Type</div>
        <p>
          Most Pokémon belong to a single type. However, however some may belong
          to two types. There are{" "}
          <Link href="" target="_blank">
            11 Energy types
          </Link>{" "}
          and each powers different attacks.
        </p>
      </div>
      <div className={styles.sectioncopy}>
        <div>Health Points (HP)</div>
        <p>
          This number represents the Pokemon's total health points at the
          beginning ofthe battle. When a Pokemon exceeds or reaches its HP, it
          is considered "Knocked Out".
        </p>
      </div>
      <div className={styles.sectioncopy}>
        <div>Card Name & Stage</div>
        <p>
          This is the Pokemon's name and what evolutionary stage it is in. Some
          Pokemon can evolve into different forms while others remain in basic
          form. The stages are: Basic, Stage 1, Stage 2 & Mega etc. It shows an
          image of which pokemon it evolves from.
        </p>
        <Image
          className={styles.img}
          src="/images/pokemon-card-parts.png"
          layout="responsive"
          height={1002}
          width={842}
          alt="pokemon card parts diagram 1"
        />
      </div>
      <div className={styles.section}>
        <div>Energy Needs, Attacks & Damage</div>
      </div>
      <div className={styles.sectioncopy}>
        <div>Energy Needs</div>
        <p>
          These symbols show which and how many energy cards the Pokemon needs
          to power up their attack.
        </p>
      </div>
      <div className={styles.sectioncopy}>
        <div>Attacks</div>
        <p>
          The names of your Pokemon's attacks. Some Pokemon cards have more then
          one attack.
        </p>
      </div>
      <div className={styles.sectioncopy}>
        <div>Damage</div>
        <p> The damage the Pokemon's attacks can inflict on another's HP.</p>
        <Image
          className={styles.img}
          src="/images/energy-attack-damage.png"
          layout="responsive"
          height={1002}
          width={842}
          alt="pokemon card parts diagram 2"
        />
      </div>
      <div className={styles.section}>
        <div>Weakness, Resistance & Retreat</div>
      </div>
      <div className={styles.sectioncopy}>
        <div>Weakness</div>
        <p>
          Damages from attacks that use this energy type do extra damage to the
          Pokemon.
        </p>
      </div>
      <div className={styles.sectioncopy}>
        <div>Resistance</div>
        <p>
          Attacks from this energy type do less damage to the Pokemon, as they
          have a resistance to it. For example: Escavalier has resistance to
          Grass types and any damage it takes will be minus 30 HP.
        </p>
      </div>
      <div className={styles.sectioncopy}>
        <div>Cost to Retreat</div>
        <p>
          {" "}
          The amount of energy needed to switch the Pokemon out of the
          battlefield. For example: To remove this active Pokemon back to the
          bench, you will need two energy cards of any type to retreat.
        </p>
        <Image
          className={styles.img}
          src="/images/weakness-resist-retreat.png"
          layout="responsive"
          height={1002}
          width={842}
          alt="pokemon card parts diagram 3"
        />
      </div>
    </div>
  );
}

export default pokecard;
