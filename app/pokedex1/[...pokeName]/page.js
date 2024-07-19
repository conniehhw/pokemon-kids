// const PokePage = ({ params: { pokeName } }) => {
//   console.log(pokeName);
//   return (
//     <p className={styles.slug}>
//       Showing the store page for the name <strong>{pokeName}</strong>
//     </p>
//   );
// };

// export default PokePage;

"use client";

// [slug] page returning api response for individual pokemon (when clicked on pokedex or search)

import styles from "../../pokedex1/pokedex1.module.css";

import { useGlobalContext } from "../../api/global";
import Router from "next/navigation";
import React, { useEffect } from "react";

function Pokemon() {
  const router = useRouter();
  const { pokemon } = router.query;
  const { getPokemon, loading, pokemon: pokemonItem } = useGlobalContext();

  // console.log(pokemonItem);

  // initial render //
  useEffect(() => {
    if (pokemon) {
      getPokemon(pokemon);
    }
    getPokemon("ditto");
    getPokemon("pikachu");
    console.log(pokemonItem);
  }, []);

  let myLink = "";

  if (pokemonItem?.sprites?.other) {
    const { "official-artwork": link } = pokemonItem?.sprites.other;
    console.log(link.front_default);
    myLink = link.front_default;
  }

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <div>
      {pokemonItem && (
        <>
          <div>
            <img
              src={
                pokemonItem?.sprites?.other?.home.front_default
                  ? pokemonItem?.sprites?.other?.home.front_default
                  : myLink
              }
              alt=""
            />
          </div>
          <div>
            <h2>{pokemonItem?.name}</h2>
            <div>
              <h5>Name: </h5>
              <p>{pokemonItem?.name}, </p>
            </div>

            <div>
              <h5>Name: </h5>
              <p></p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Pokemon;
