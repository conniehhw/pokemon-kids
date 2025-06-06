import React from "react";
import styles from "../pokemedia/pokemedia.module.css";
import Image from "next/image";

// Page function: Overview of other types of Pokemon Media (video games, tv, books)
// using <u></u> has hack fix as in production, the links text decoration underline is not working

function pokemedia() {
  return (
    <div className={styles.main}>
      <div>
        <div>
          <ul className={styles.breadcrumb}>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/resources">Resources</a>
            </li>
            <li>Pokémon Media</li>
          </ul>
        </div>

        <div className={styles.content}>
          <div>
            <div>
              <h2>Continue Your Journey</h2>
              <h4>
                Besides collecting the cards, there are many other ways to enjoy
                Pokémon.
              </h4>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <div>TV Shows & Films</div>
        </div>

        <div className={styles.sectioncopy}>
          <div className={styles.container}>
            <div className={styles.videowrapper}>
              <iframe
                className={styles.responsiveiframe}
                // width="350"
                // height="300"
                src="https://www.youtube-nocookie.com/embed/sHV8QP5OK2s?&autoplay=0&mute=1&rel=0&border=0&modestbranding=1"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>

            <div className={styles.sectionText}>
              <p>
                The first television animation launched in 1997. Since then, the
                series has expanded to 25 seasons. Adding to the series, is the
                latest released in 2025, titled &#34;Pokémon Horizons: Season 2
                - The Search for Laqua&#34;.
              </p>
              <p>
                As of 2020, there are 23 Pokémon films along with one
                live-action film, &#34;Pokémon Detective Pikachu&#34;. With the
                popularity of the franchise, a stop-motion animation,{" "}
                <a
                  href="https://www.netflix.com/ca/title/81186864"
                  target="_blank"
                >
                  <u>&#34;Pokémon Concierge&#34;</u>
                </a>{" "}
                premiered on Netflix in 2023. Visit the{" "}
                <a href="https://www.pokemon.com/us/animation" target="_blank">
                  <u>animation</u>
                </a>{" "}
                page on the official website to learn more, including where to
                watch.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <div>Video & Mobile Games</div>
        </div>
        <div className={styles.sectioncopy}>
          <div className={styles.container}>
            <div className={styles.videowrapper}>
              <iframe
                className={styles.responsiveiframe}
                src="https://www.youtube.com/embed/dAQBo9BGRdA?si=OE2gFFz91pmcztxZ/autoplay=1&mute=1&rel=0&border=0&modestbranding=1"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>

            <div className={styles.sectionText}>
              <h6>Console Games</h6>
              <p>
                Pokémon has several types of video games, some of which are
                played on Nintendo Game Devices or Consoles or on a tablet and
                mobile phone.
              </p>
              <p>
                For instance, in{" "}
                <a
                  href="https://www.pokemon.com/us/pokemon-video-games/pokemon-scarlet-and-pokemon-violet"
                  target="_blank"
                >
                  <u>Pokémon Scarlet & Violet</u>
                </a>
                , in this role playing game, the player catches and trades
                Pokémon and battle other Pokémon Trainers while exploring
                different regions.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.sectioncopy}>
          <div className={styles.container}>
            <div className={styles.imgShrink}>
              <figure className={styles.figure}>
                <Image
                  style={{ borderRadius: "20px" }}
                  src="/images/pokemon-snap.png"
                  // layout="responsive"
                  height={281}
                  width={382}
                  alt="pokemon snap"
                />
                <figcaption className={styles.figcaption}>
                  From Pokémon Snap, player taking a photo of Psyduck
                </figcaption>
              </figure>
            </div>
            <div className={styles.sectionText}>
              <p>
                For the younger Pokémon fans,{" "}
                <a
                  href="https://www.pokemon.com/us/pokemon-video-games/new-pokemon-snap"
                  target="_blank"
                >
                  <u>Pokémon Snap</u>
                </a>{" "}
                may be a better fit. It is a console game where you - as the
                player - explore the Lental region, research and encounter wild
                Pokémon as you snap photos for your album.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.sectioncopy}>
          <div className={styles.container}>
            <div className={styles.imgShrink}>
              <figure className={styles.figure}>
                <Image
                  style={{ borderRadius: "20px" }}
                  src="/images/pokemon-go.png"
                  // layout="responsive"
                  height={281}
                  width={382}
                  alt="pokemon go"
                />
                <figcaption className={styles.figcaption}>
                  Image by{" "}
                  <a href="https://pixabay.com/users/tumisu-148124">
                    <u>Tumisu</u>
                  </a>{" "}
                  on pixabay{" "}
                </figcaption>
              </figure>
            </div>
            <div className={styles.sectionText}>
              <h6>Mobile Games</h6>
              <p>
                {" "}
                Then there is the popular{" "}
                <a
                  href="https://www.pokemon.com/us/pokemon-video-games/pokemon-go"
                  target="_blank"
                >
                  <u>Pokémon Go</u>{" "}
                  {/* Add a note to be careful of surroiunding when playing supervised*/}
                </a>
                mobile game which uses the phone&#39;s GPS together with
                augmented reality technology - allowing as though Pokémon appear
                around you, as you move your avatar within your real world
                surroundings. The main goal of the game to find and catch
                Pokémon. Be aware of your surroundings when playing.
              </p>
              <p>
                You can find a full list of{" "}
                <a
                  href="https://www.pokemon.com/us/pokemon-video-games/all-pokemon-games"
                  target="_blank"
                >
                  <u>Pokémon games</u>
                </a>{" "}
                on the official website.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <div>Books</div>
        </div>
        <div className={styles.sectioncopy}>
          <div className={styles.containerBooks}>
            <div className={styles.imgShrink}>
              <figure className={styles.figure}>
                <Image
                  src="/images/pokemon-visual-companion.png"
                  // layout="responsive"
                  height={300}
                  width={300}
                  alt="pokemon visual companion book"
                />
                <figcaption></figcaption>
              </figure>
            </div>
            <div className={styles.sectionText}>
              <p>
                Books are a great way for you and your kiddo to immerse in the
                Pokémon Universe.
              </p>
              <br></br>
              <h6>Recommended Reading</h6>
              <p>
                The <i>Pokémon Visual Companion</i> is a fact-packed illustrated
                guide to the animated series to learn more about characters like
                Ash, Professor Sycamore, essential gears and more.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className={styles.sectioncopy}>
          <div className={styles.containerBooks}>
            <div className={styles.imgShrink}>
              <figure className={styles.figure}>
                <Image
                  className={styles.imgShrink}
                  src="/images/essential-handbook.jpg"
                  // layout="responsive"

                  height={660}
                  width={360}
                  alt="pokemon essential handbook 2024"
                />
                <figcaption></figcaption>
              </figure>
            </div>
            <div className={styles.sectionText}>
              <p>
                <i>The Pokémon Essential Handbook</i> series contain the latest
                list of all the Pokémon and their stats because you &#34;Gotta
                catch&#39;em all&#34;.
              </p>

              <p>
                For stories, there are also many chapter books and collections.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default pokemedia;
