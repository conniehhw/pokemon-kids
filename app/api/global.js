"use client";

// route for API

import React, {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useState,
} from "react"; //Hooks

const GlobalContext = createContext();

//actions
const LOADING = "LOADING";
const GET_POKEMON = "GET_POKEMON";
const GET_ALL_POKEMON = "GET_ALL_POKEMON";
const GET_ALL_POKEMON_DATA = "GET_ALL_POKEMON_DATA";
const GET_SEARCH = "GET_SEARCH";
const GET_POKEMON_DATABASE = "GET_POKEMON_DATABASE";
const NEXT = "NEXT";

//reducer
const reducer = (state, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true };

    case GET_ALL_POKEMON:
      return { ...state, allPokemon: action.payload, loading: false };

    case GET_POKEMON:
      return { ...state, pokemon: action.payload, loading: false };
  }

  return state;
};

export const GlobalProvider = ({ children }) => {
  //base url
  const baseUrl = "https://pokeapi.co/api/v2/";

  const initialState = {
    allPokemon: [], //property for initial 20 items//
    pokemon: {}, //properties of ind. pokemon data//
    pokemonDataBase: [], //store all of the items in the database, in an array//
    searchResults: [], //empty array to start//
    next: "",
    loading: false, // for initial //
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const [allPokemonData, setAllPokemonData] = useState([]);

  //test
  const allPokemon = async () => {
    dispatch({ type: "LOADING" });
    const res = await fetch(`${baseUrl}pokemon?limit=20`);
    // const res = await fetch(`${baseUrl}pokemon?/${name}`);
    const data = await res.json();
    dispatch({ type: "GET_ALL_POKEMON", payload: data.results });
    console.log(data);

    // fetch character data using for loop
    const allPokemonData = [];

    for (const pokemon of data.results) {
      console.log(pokemon);

      const pokemonRes = await fetch(pokemon.url);
      //   console.log(pokemonRes);
      const pokemonData = await pokemonRes.json();
      // console.log(pokemonData);
      allPokemonData.push(pokemonData);
    }

    setAllPokemonData(allPokemonData);
  };

  //get pokemon
  const getPokemon = async (name) => {
    dispatch({ type: "LOADING" });
    const res = await fetch(`${baseUrl}pokemon?/${name}`);
    const data = await res.json();

    dispatch({ type: "GET_POKEMON", payload: data.results }); //testing, adding data.results
  };
  // console.log(data);

  useEffect(() => {
    allPokemon();
  }, []);

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        allPokemonData, // spread the values
        getPokemon,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

// functions allows for to access whatever values in the Global Provider
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
