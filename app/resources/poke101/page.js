import React from "react";
import styles from "../poke101/poke101.module.css";
import Image from "next/image";
import Accordion from "react-bootstrap/Accordion";
import AccordionHeader from "react-bootstrap/AccordionHeader";
import AccordionItem from "react-bootstrap/AccordionItem";
import AccordionBody from "react-bootstrap/AccordionBody";

function poke101() {
  return (
    <main className={styles.main}>
      <ul className={styles.breadcrumb}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/resources">Resources</a>
        </li>
        {/* <li>
          <a href="#">Summer 15</a>
        </li>
        <li>Italy</li> */}
      </ul>

      <div className={styles.title}>
        Pokemon 101: Frequently Asked Questions
      </div>
      <Accordion defaultActiveKey="0" flush>
        <AccordionItem className={styles.item} eventKey="0">
          <AccordionHeader>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-question-circle"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
            </svg>
            &nbsp;&nbsp;What is a Pokemon?
          </AccordionHeader>
          <AccordionBody className={styles.clearfix}>
            <Image
              className={styles.img}
              src="/images/pokemon-group.png"
              height={154}
              width={250}
              alt="Pokemon All Kinds"
            />
            A pokemon is a kind of creature. They can learn different moves.
            Some pokemons have strong power; like Legendaries, Megas, Mythicals
            and Ultra beasts.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem eventKey="1">
          <AccordionHeader>What is a Poke Ball?</AccordionHeader>
          <AccordionBody className={styles.clearfix}>
            <Image
              className={styles.img}
              src="/images/pokeball.png"
              height={250}
              width={300}
              alt="Pokeball Chart"
            />
            A ball that catches pokemon, when you throw the ball. There are
            different kinds of poke balls; like the Quick ball, Ultra ball,
            Master ball and Apecorn ball.
          </AccordionBody>
        </AccordionItem>

        <AccordionItem eventKey="2">
          <AccordionHeader>
            What are trainers? Who are Professors?
          </AccordionHeader>
          <AccordionBody>
            Pokemon trainers are people that catch Pokemon, battle with Pokemon
            and research pokemon. You have to be at least 10 years old to become
            a trainer. You will work with a professor, who will assign to you a
            partner; a pokemon. For example, you might have Charmander,
            Bulbasaur or Squirtle as your pokemon partner. Ash's partner is
            Pikachu.
          </AccordionBody>
        </AccordionItem>

        <AccordionItem eventKey="3">
          <AccordionHeader>What are pokemon battles?</AccordionHeader>
          <AccordionBody className={styles.clearfix}>
            <Image
              className={styles.img}
              src="/images/pokemon-battle.png"
              height={168}
              width={300}
              alt="Pokemon Battle"
            />
            Pokemons and their trainers compete in battles. These take place in
            different arenas. The trainer calls on a pokemon to battle against
            another trainer and pokemon pair. What you want to do, is pick a
            pokemon from your team that has abilities and attacks which can win
            over the opposing pokemon. When you start, you might say "Snorlex
            Go!"
          </AccordionBody>
        </AccordionItem>

        <AccordionItem eventKey="4">
          <AccordionHeader>
            {" "}
            What are pokemon types and abilities?
          </AccordionHeader>
          <AccordionBody className={styles.clearfix}>
            <Image
              className={styles.img}
              src="/images/pokemon-type.png"
              height={225}
              width={400}
              alt="Pokemon Type"
            />
            There are 18 types: Grass, Fire, Water, Electric, Steel, Psychic,
            Fighting, Fairy, Dark, Dragon, Ice, Poison, Bug, Rock, Flying,
            Ground, Ghost and Normal. Each type has their unique strengths and
            weaknesses.
          </AccordionBody>
        </AccordionItem>

        <AccordionItem eventKey="5">
          <AccordionHeader>
            {" "}
            What are Evolutions? Why does Pikachu have 2 other names?
          </AccordionHeader>
          <AccordionBody className={styles.clearfix}>
            <Image
              className={styles.img}
              src="/images/pokemon-evol.png"
              height={297}
              width={500}
              alt="Pokemon Evolutions"
            />
            Some pokemons can evolve 2 times. For instance, Pichu is basic,
            Pikachu is stage 1 and Raichu is stage 2. As it evolves from basic
            to stage 1 and 2, it becomes more powerful. However, some pokemons
            do not evolve.
          </AccordionBody>
        </AccordionItem>

        {/* <AccordionItem eventKey="6">
          <AccordionHeader>Accordion Item #7</AccordionHeader>
          <AccordionBody>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </AccordionBody>
        </AccordionItem> */}
      </Accordion>
    </main>
  );
}

export default poke101;
