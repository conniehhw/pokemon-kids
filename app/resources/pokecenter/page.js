import styles from "../pokecenter/pokecenter.module.css";
import Image from "next/image";
import Button from "react-bootstrap/Button";
import Link from "next/link";
import { MdArrowBack } from "react-icons/md";

function pokecenter() {
  return (
    <div>
      <div className={styles.main}>
        <div>
          <ul className={styles.breadcrumb}>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/resources">Resources</a>
            </li>
            <li>Pokemon Centres</li>
          </ul>
        </div>

        <div className={styles.grid}>
          <div>
            <Image
              className={styles.img}
              src="/images/pokemoncenter-anime.png"
              layout="responsive"
              height={280}
              width={564}
              alt="pokemoncenter in anime"
            />
          </div>
        </div>

        <div className={styles.content}>
          <div>
            <div>
              <h2>Pokecenters</h2>
              <h4>An important destination for trainers, pokemons & fans</h4>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <div>Pokemon Centers Inside the Pokemon World</div>
        </div>
        <div className={styles.sectioncopy}>
          {/* <div className={styles.sectioncopy}> */}
          {/* <div>Pokemon Centers Inside Pokemon World</div> */}
          <p>
            In Pokemon world, the Pokemon Center is where characters and
            Pokemons can heal after battle. Every center has a Nurse Joy to help
            Pokemons recover their strength. Pokemon centers are alos gathering
            centers for trainers with access to tools to help their journeys as
            well as food and lodging. In the games series, Poke Marts are also
            featured inside Pokemon Centers, where supplies can be purchased to
            help with Pokemon training, including potions and healing items.
          </p>
        </div>

        <div className={styles.section}>
          <div>Pokemon Centers in Real Life</div>
        </div>

        <div className={styles.sectioncopy}>
          <p className={styles.clearfix}>
            <Image
              className={styles.img}
              src="/images/pokemoncenter-tokyoDX.png"
              // layout="responsive"
              height={392}
              width={392}
              alt="pokemoncenter Tokyo DX"
            />
            However, there are real life Pokemon Centers fans can visit! Pokemon
            Centers are official shops where you can find original and exclusive
            Pokemon merchandise such as your favourite plushie, stationery,
            cards, key chains and much more.
          </p>

          {/* <div> */}
          {/* <Image
              className={styles.img}
              src="/images/pokemoncenter-tokyoDX.png"
              // layout="responsive"
              height={392}
              width={392}
              alt="pokemoncenter Tokyo DX"
            /> */}
          {/* </div> */}

          <p className={styles.clearfix}>
            <Image
              className={styles.img}
              src="/images/pokemoncenter-shibuya.png"
              // layout="responsive"
              height={392}
              width={392}
              alt="pokemoncenter Shibuya"
            />
            Also you can find the latest information on all things Pokemon.
            There are 16 Pokemon Center locations in Japan, each one is based on
            a different concept with special events such as Pokemon Design Lab
            where you can design your own T-shirt, life size characters, trading
            card and game stations, touch screen Pokedex and much more.
          </p>

          <div className={styles.grid_small}>
            <div>
              <Image
                className={styles.img3}
                src="/images/pokemoncenter-skytree.png"
                layout="responsive"
                height={392}
                width={392}
                alt="pokemoncenter skytree"
              />
            </div>
            <div>
              <Image
                className={styles.img3}
                src="/images/pokemoncenter-megatokyo.png"
                layout="responsive"
                height={392}
                width={392}
                alt="pokemoncenter mega tokyo"
              />
            </div>
            <div>
              <Image
                className={styles.img3}
                src="/images/pokemoncenter-kyoto.png"
                layout="responsive"
                height={392}
                width={392}
                alt="pokemoncenter Kyoto"
              />
            </div>
          </div>

          <p className={styles.clearfix}>
            No plans to travel in the near future? Check out what is available
            at the{" "}
            <a href="https://www.pokemoncenter.com/en-ca" target="_blank">
              official online Pokemon Center.
            </a>
            <Image
              className={styles.img1}
              src="/images/pokemon-plush.png"
              // layout="responsive"
              height={392}
              width={392}
              alt="pokemoncenter plush"
            />
            {/* No plans to travel in the near future? Check out what is available
            at the{" "}
            <a href="https://www.pokemoncenter.com/en-ca" target="_blank">
              official online Pokemon Center.
            </a> */}
          </p>

          {/* <div className={styles.sectioncopy}>
            <p>
              No plans to travel in the near future? Check out what is available
              at the{" "}
              <a href="https://www.pokemoncenter.com/en-ca" target="_blank">
                official online Pokemon Center.
              </a>
            </p>
          </div> */}

          {/* <div className={styles.grid}>
            <div>
              <Image
                className={styles.img}
                src="/images/pokemon-plush.png"
                layout="responsive"
                height={150}
                width={350}
                alt="pokemon plush"
              />
            </div>
          </div> */}

          {/* <p className={styles.videowrapper}>
            <iframe
              width="350"
              height="315"
              src="https://www.youtube-nocookie.com/embed/sq2RftrcEKc?si=qg7fiSyA7QGMwlUM/autoplay=1&mute=1&rel=0&border=0&modestbranding=1"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            {/* Add a warning /alert or something it will reroute to exteranl site Youtube for trailer
          </p> */}
        </div>
      </div>
    </div>
  );
}

export default pokecenter;

{
  /* <div className={styles.navmenu}>
          <MdArrowBack />
        </div> */
}
{
  /* <div className={styles.welcome}>
          <a href=""> */
}
{
  /* <div className={styles.welcometext}> */
}

{
  /* <h1 class="font-weight-light">Welcome!</h1>
            <h6>
              So you want to be a pokemon trainer? Follow along with Ash and
              Pikachu and start your journey.
            </h6>
            <br></br> */
}

{
  /* <Button className={styles.button}>
              <Link href="/about">
                <span>Let's Go!</span>
              </Link>
            </Button> */
}
{
  /* <Link href="/about">
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
          </a> */
}

{
  /* <a href="">
            <div className={styles.projectimg}>
              <Image
                className={styles.img} */
}
{
  /* // className={styles.projectsimg}
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
          </a> */
}

{
  /* <a href="">
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
        </div> */
}

{
  /* <div>
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
      </div> */
}
