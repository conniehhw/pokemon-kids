import { NextResponse } from "next/server";

async function fetchPokemons() {
  const response = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=30",

    {
      method: "GET",
    }
  );

  const pokemons = await response.json(); // pokemons = data
  return pokemons;
}

export async function GET(request) {
  const pokemons = await fetchPokemons();
  console.log(pokemons);

  return NextResponse.json(pokemons);
}
