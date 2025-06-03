// API call to Pokemon API, endpoint + searched name
// Utils to pokemonName slug page

const POKEMON_API = "https://pokeapi.co/api/v2/";

export async function getPokemon(name) {
  // pokemon/ditto
  const response = await fetch(POKEMON_API + "pokemon/" + name);

  const data = await response.json();
  return data;
}

// export async function getPokemonChar(id) {
//   const response = await fetch(POKEMON_API + "characteristic/" + id);

//   const data = await response.json();
//   return data;
// }
