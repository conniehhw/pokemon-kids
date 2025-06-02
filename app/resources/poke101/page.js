import React from "react";
import styles from "../poke101/poke101.module.css";
import Image from "next/image";
import Accordion from "react-bootstrap/Accordion";
import AccordionHeader from "react-bootstrap/AccordionHeader";
import AccordionItem from "react-bootstrap/AccordionItem";
import AccordionBody from "react-bootstrap/AccordionBody";

// Page function: Pokemon 101 FAQ

function poke101() {
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
          <li>Pokemon 101</li>
        </ul>
      </div>

      <div className={styles.content}>
        <div>
          <div>
            <h2>Crash Course Pokemon 101</h2>
            <h4>Answers to Frequently Asked Questions</h4>
          </div>
        </div>
      </div>

      <Accordion defaultActiveKey="0" flush className={styles.accordion}>
        <AccordionItem className={styles.item} eventKey="0">
          <AccordionHeader>What is a Pokemon?</AccordionHeader>
          <AccordionBody className={styles.clearfix}>
            <Image
              className={styles.imgr}
              src="/images/pokemon-group.png"
              height={273}
              width={335}
              alt="Pokemon All Kinds"
            />
            <div className={styles.textbox}>
              A pokemon is a kind of creature. They can learn different moves.
              Some pokemons have strong power; like Legendaries, Megas,
              Mythicals and Ultra beasts.
            </div>
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
            <div className={styles.textbox}>
              A ball that catches pokemon, when you throw the ball. There are
              different kinds of poke balls; like the Quick ball, Ultra ball,
              Master ball and Apecorn ball.
            </div>
          </AccordionBody>
        </AccordionItem>

        <AccordionItem eventKey="2">
          <AccordionHeader>
            What are trainers? Who are Professors?
          </AccordionHeader>
          <AccordionBody>
            <div className={styles.shrink}>
              <Image
                className={styles.imgnbr}
                src="/images/pokemon-professors.png"
                height={271}
                width={632}
                alt="Pokemon professors"
              />
            </div>
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
              className={styles.imgr}
              src="/images/pokemon-battle.png"
              height={168}
              width={300}
              alt="Pokemon Battle"
            />
            <div className={styles.textbox}>
              Pokemons and their trainers compete in battles. These take place
              in different arenas. The trainer calls on a pokemon to battle
              against another trainer and pokemon pair. <br></br>
              <br></br>What you want to do, is pick a pokemon from your team
              that has abilities and attacks which can win over the opposing
              pokemon. When you start, you might say "Snorlex Go!"
            </div>
          </AccordionBody>
        </AccordionItem>

        <AccordionItem eventKey="4">
          <AccordionHeader>
            {" "}
            What are pokemon types and abilities?
          </AccordionHeader>
          <AccordionBody className={styles.clearfix}>
            <Image
              className={styles.imgr}
              src="/images/pokemon-type.png"
              height={225}
              width={400}
              alt="Pokemon Type"
            />
            <div className={styles.textbox}>
              There are 18 types: Grass, Fire, Water, Electric, Steel, Psychic,
              Fighting, Fairy, Dark, Dragon, Ice, Poison, Bug, Rock, Flying,
              Ground, Ghost and Normal. Each type has their unique strengths and
              weaknesses.
            </div>
          </AccordionBody>
        </AccordionItem>

        <AccordionItem eventKey="5">
          <AccordionHeader>
            {" "}
            What are Evolutions? Why do some pokemons have 2 other names?
          </AccordionHeader>
          <AccordionBody className={styles.clearfix}>
            {/* <div className={styles.shrink1}> */}
            <Image
              className={styles.imgr1}
              // className={styles.imgnbr}
              src="/images/pokemon-evol.png"
              height={297}
              width={500}
              alt="Pokemon Evolutions"
            />
            {/* </div> */}
            <div className={styles.textbox1}>
              Some pokemons can evolve 2 times. As it evolves from basic to
              stage 1 and 2, it becomes more powerful. However, some pokemons do
              not evolve. <br></br>
              <br></br>The pokemon in the first row is Charmander in its basic
              form, it evolves to Charmeleon in its stage 1 form and then
              Charizard - stage 2 form and then can evolve to a temporary
              transformation, the Mega Charizard X.
            </div>
          </AccordionBody>
        </AccordionItem>

        <AccordionItem eventKey="6">
          <AccordionHeader> Where do Pokemons come from?</AccordionHeader>
          <AccordionBody className={styles.clearfix}>
            <div className={styles.shrink}>
              <figure className={styles.figure}>
                <Image
                  className={styles.imgnbr}
                  src="/images/pokemon-regions.png"
                  height={271}
                  width={632}
                  alt="Pokemon Regions"
                />
                <figcaption className={styles.figCap}>
                  A map of Kanto, Johto, Hoenn, and Sinnoh regions along with
                  the Sevii Islands and the Orange Islands, from the animated
                  series's 10th anniversary.
                </figcaption>
              </figure>
            </div>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem eventKey="7">
          <AccordionHeader> What do Pokemons eat?</AccordionHeader>
          <AccordionBody className={styles.clearfix}>
            <Image
              className={styles.imgr}
              src="/images/pokemon-berries.png"
              height={240}
              width={180}
              alt="Pokemon Berries"
            />

            <div className={styles.textbox}>
              In the wild, Pokemon have been known to eat plants and berries.
              With each new generation of Pokemon in games and series, Pokemon
              consume a variety of items such as: bait, healing drinks,
              Pokeblock, Poffin, Honey, Poke Puffs, Poke beans, curry and
              sandwiches. <br></br>
            </div>
          </AccordionBody>
        </AccordionItem>

        <AccordionItem eventKey="8">
          <AccordionHeader>
            {" "}
            Do Pokemon talk? How do they communicate?
          </AccordionHeader>
          <AccordionBody className={styles.clearfix}>
            <div className={styles.videowrapper}>
              <iframe
                className={styles.responsiveiframe}
                src="https://www.youtube.com/embed/4IeZZ9p4zY4?si=x8wWWaqiAXiT0uRU&amp;autoplay=0&mute=1&start=3&rel=0&border=0&modestbranding=1"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>

            <div className={styles.textbox1}>
              <p>
                It appears all Pokemon can understand human speech however
                Pokemon communicate with humans using their species unique
                cries, body language and sounds like chirps and buzzes.
              </p>
              <p>
                Often, you will hear Pokemon speak their own names or a
                variation of it as a form of communication. Pikachu would say
                "Pika-CHU!" or "pika-pika-chu" in different tones and intensity
                to convey its emotion.
              </p>
            </div>
          </AccordionBody>
        </AccordionItem>
      </Accordion>

      <div>
        <figure className={styles.figure}>
          <figcaption className={styles.figcaption}>
            Source of images: 'Who are Professors, Where do Pokemons come from'
            from{" "}
            <a href="https://bulbapedia.bulbagarden.net/wiki/Pokémon_Professor#Other_fields_of_Pok.C3.A9mon_study">
              bulbapedia.bulbagarden.net
            </a>
            , 'What are Evolutions' from{" "}
            <a href="https://vk.com/pokegorussiacommunity">
              vk.com.pokegorussiacommunity,
            </a>{" "}
            'What do Pokemons eat' from{" "}
            <a href="https://Pokémon.fandom.com/wiki/Berry">
              pokemon.fandom.com
            </a>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}

export default poke101;
