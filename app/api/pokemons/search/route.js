import { NextResponse } from "next/server";

async function fetchPokemons() {
  const response = await fetch("https://pokeapi.co/api/v2//pokemon?limit=30/", {
    method: "GET",
  });

  const pokemons = await response.json();
  return pokemons;
}

export async function GET(request) {
  const pokemons = await fetchPokemons();
  const { searchParams } = new URL(request.url);
  console.log(request.url);
  console.log(searchParams.get("query"));
  const query = searchParams.get("query");

  const filteredPokemons = pokemons.results.filter((pokemon) => {
    return pokemon.name.toLowerCase().includes(query.toLowerCase());

    return NextResponse.json(filteredPokemons);
  });
}
