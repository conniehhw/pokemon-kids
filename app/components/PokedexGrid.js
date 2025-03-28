"use client";
import { useState, useEffect, useRef } from "react";

import { PokemonCard } from "../components/PokemonCard";

import styles from "../PokedexHome/pokedex.module.css";
import { typescript } from "@/next.config";

export function PokedexGrid({ allPokemons }) {
  const [searchText, setSearchText] = useState(""); // empty string

  const searchFilter = (allPokemons) => {
    return allPokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchText.toLowerCase())
    );
  };

  // save the filtered array of objects
  const filteredPokemonList = searchFilter(allPokemons);
  console.log(filteredPokemonList); // log filtered/searched pokemon name
  console.log(allPokemons); // logs all fetched 20 pokemons (all info)

  // testing how to merge new arrays into original
  const animals = ["pigs", "goats", "sheep"]; // animals array

  const hey = animals.push("cows", "dog"); // adds 2 elements to animals array

  console.log(animals); // logs all the items in the array called 'Animals'
  console.log(hey); // logs number of elements in 'hey' variable which contains new length of the array
  //(5) ["pigs", "goats", "sheep", "cows", "dog"]
  //5

  animals.push("kiwi"); // adds 1 more elements to animals array
  console.log(animals); // logs all the items in the array called 'Animals'
  console.log(hey); // 'hey' variable contains new length of the array
  //(6) ["pigs", "goats", "sheep", "cows", "dog", "kiwi"]
  //6

  const vegetables = ["parsnip", "potato"]; //array 1
  const moreVegs = ["celery", "beetroot", "carrot"]; //array 2

  // Merge the second array into the first one using spread syntax
  vegetables.push(...moreVegs);

  console.log(vegetables); // ['parsnip', 'potato', 'celery', 'beetroot', 'carrot']
  console.log(moreVegs); // this array remains unchanged

  return (
    <>
      <main className={styles.body}>
        {/* <h3>Search for your Pokemon!</h3> */}
        <form action="" className={styles.searchForm}>
          <div className={styles.inputControl}>
            {/* <h4>Pokemon Name</h4> */}

            <input
              type="text"
              value={searchText}
              id="pokemonName"
              //autoComplete= "off"
              placeholder="Search for a Pokemon... "
              onChange={(e) => setSearchText(e.target.value)}
              // className={styles.searchForm}
              // listen for onChange event from client, take the event of that change
              // (the text typed to be saved onto 'e' variable), whenever we type in, it will set Search Text into our actual text
              // we have an array of data we can filter, we can look at every element in the list and filter- if contains "P", keep it and js filter the name
            />
            <button className={styles.submitBtn} type="submit">
              Search
            </button>
          </div>
        </form>

        {/* <b>Test Response 1</b> */}
        {/* <li>
          <b>Types</b>
          {allPokemons.map((pokemon) => {
            console.log(pokemon.name);
            return pokemon.types.map((type) => {
              console.log(type.type.name);

              return (
                <>
                  <div>
                    <button className={styles.pill}>{pokemon.name}</button>
                    {pokemon.types.map((type) => {
                      return (
                        <>
                          <button>{type.type.name}</button>
                        </>
                      );
                    })}

                    <button>{type.type.name}</button>
                  </div>
                </>
              );
            });
          })}
        </li> */}

        {/* {allPokemons.map((pokemon) => {
          return (
            <>
              <button className={styles.pill}>{pokemon.name}</button>
            </>
          );
        })} */}

        {/* testing */}
        {/* {allPokemons.map((pokemon) => {
          return pokemon.moves.map((move) => {
            console.log(pokemon.name);
            console.log(move.move.name);

            return (
              <>
                <button></button>
              </>
            );
          });
        })} */}

        <div className={styles.all_pokemon}>
          {/* //loop through each item in the api data array and create a unique card with name of each pokemon */}
          {/* {pokemonList.map((pokemon) => { */}
          {filteredPokemonList.map((pokemon) => {
            // return pokemon.types.map((type) => {
            //   console.log(type.type.name); //log pokemon type
            //   })
            // )

            return (
              <PokemonCard
                name={pokemon.name}
                id={pokemon.id}
                sprites={
                  pokemon.sprites.other["official-artwork"].front_default
                }
                // types={type.type.name}
                // types={pokemon.types[0].type.name}
                height={pokemon.height}
                // type={type.type.name}
                // types={types}
                pokemon={pokemon}
                // allPokemons={allPokemons}
                // type={pokemon.type}

                //   pokemonStats={pokemonStats.name}
              />
            );
            // });
          })}

          {/* <IndPokemonCard name="Pikachu" />
        <IndPokemonCard />
        <IndPokemonCard /> */}
        </div>
      </main>
    </>
  );
}

// const typeName = type.type_name;
// let colour;
// if (typeName === "grass") {
//   colour = "#7AC74C";
// } else if (typeName === "fire") {
//   colour = "#EE8130";
// } else if (typeName === "poison") {
//   colour = "#A33EA1";
// } else {
//   colour = "green";
// }

// console.log(colour);

// response1.map((array) => {
//   array.types.map((type) => {
//     console.log(type.type_name);
//   });
// });

{
  /* {response1.map((array) => {
          return array.types.map((type) => {
            console.log(type.type_name);
            return (
              <>
                <button
                // style={
                //   {
                //     background: colour,
                //   }
                // }
                >
                  {type.type_name}{" "}
                </button>
              </>
            );
          });
        })} */
}

{
  /* {product.map((data) => (
          <tr key={data.id}>
            <td>{data.name}</td>
            <td>{data.description}</td>

            {data.color.map((datas) => {
              return (
                <tr key={datas.id_color}>
                  <td>{datas.color}</td>
                  <td>{datas.quantity}</td>
                </tr>
              );
            })}
          </tr>
        ))} */
}

{
  /* {response.map((array) => {
          return array.projects.map((project) => {
            console.log(project.project_year, project.project_name);
            return <>{project.project_name}</>;
          });
        })} */
}

// const pokeName = pokemon.name;
// console.log(pokeName);

// pokemon.types.map((pokemons) => {
//   const pokeType = pokemons.type;
//   console.log(pokeType);
// });

// return (
//   <>
//     <button className={styles.pill}>{pokeName}</button>
//   </>
// );

// map through the array
// let response = [
//   {
//     id: 1,
//     organization: "org1",
//     projects: [
//       { project_year: "2020", project_name: "prj11" },
//       { project_year: "2020", project_name: "prj12" },
//     ],
//   },
//   {
//     id: 2,
//     organization: "org2",
//     projects: [
//       { project_year: "2021", project_name: "prj21" },
//       { project_year: "2021", project_name: "prj21" },
//     ],
//   },
// ];

// response.map((array) => {
//   array.projects.map((project) => {
//     console.log(project.project_year, project.project_name);
//   });
// });

// let response1 = [
//   {
//     id: 1,
//     name: "weedle",
//     types: [{ type_name: "poison" }, { type_name: "test" }],
//   },
//   {
//     id: 2,
//     name: "kakuna",
//     types: [{ type_name: "bug" }, { type_name: "poison" }],
//   },
// ];

// response1.map((array) => {
//   return array.types.map((type) => {
//     console.log(type.type_name);
//   });
// });
