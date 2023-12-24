//============REDUX======REDUX ====REDUX=========REDUX==========REDUX====================
import React, { useEffect, useState } from "react";
import PokeCard from "./PokeCard";
import Loader from "./Loader";
import SearchBar from "./SearchBar";
import pokemonTypesColors from "../colors";
import Filter from "./Filter";
import { useDispatch, useSelector } from "react-redux";
import {  setPokemonList,
  setFetchMore,
  setLoading,
  setSearchTerm,
  setSelectedType,
  setFilteredPokemonList, } from '../redux/pokemonSlice'

export default function Home2() {
  const dispatch = useDispatch();

  const pokemonList = useSelector((state) => state.pokemon.pokemonList);
  const fetchMore = useSelector((state) => state.pokemon.fetchMore);
  const loading = useSelector((state) => state.pokemon.loading);
  const searchTerm = useSelector((state) => state.pokemon.searchTerm);
  const selectedType = useSelector((state) => state.pokemon.selectedType);
  const filteredPokemonList = useSelector((state) => state.pokemon.filteredPokemonList);

  useEffect(() => {
    const fetchMorePokemon = async () => {
      dispatch(setLoading(true));
      const count = 6;
      const nextId = pokemonList.length + 1;
      const promises = [];
      for (let i = 0; i < count; i++) {
        promises.push(
          fetch(`https://pokeapi.co/api/v2/pokemon/${nextId + i}`).then(
            (response) => response.json()
          )
        );
      }

      try {
        const newPokemon = await Promise.all(promises);
        dispatch(setPokemonList([...pokemonList, ...newPokemon]));
      } catch (err) {
        console.log("Error fetching pokemon", err);
      } finally {
        dispatch(setFetchMore(false));
        dispatch(setLoading(false));
      }
    };

    fetchMorePokemon();

    const handleScroll = () => {
      if (shouldFetchMore()) {
        dispatch(setLoading(true));
        setTimeout(() => {
          fetchMorePokemon();
          dispatch(setFetchMore(true));
        }, 1000);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [fetchMore]);

  // INFINITE SCROLL
  const shouldFetchMore = () => {
    const scrollPosition = window.scrollY + window.innerHeight;
    const contentHeight = document.body.offsetHeight;
    const isNearBottom = scrollPosition >= contentHeight;
    return isNearBottom && pokemonList.length < 100;
  };

  //FETCH BY ID or NAME
  useEffect(() => {
    filterPokemonById();
  }, [searchTerm]);

  const filterPokemonById = () => {
    const filteredPokemon =
      searchTerm &&
      pokemonList.filter(
        (pokemon) =>
          pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          String(pokemon.id).includes(searchTerm)
      );
      dispatch(setFilteredPokemonList(filteredPokemon));
  };

  // SEARCH MORE BUTTON
  const handleClick = () => {
    dispatch(setLoading(true));
    if (searchTerm) {
      filterPokemonById();
    } else {
      filterPokemonByType();
    }
  };

  //FETCH BY TYPE
  useEffect(() => {
    //console.log(selectedType);
    filterPokemonByType();
  }, [selectedType]);
  const filterPokemonByType = () => {
    const filteredByType = selectedType
      ? pokemonList.filter((pokemon) =>
          pokemon.types.some((type) => type.type.name === selectedType)
        )
      : [];
    dispatch(setFilteredPokemonList(filteredByType));

  };

  
  return (
    <div>
      {/* Search Bar & Filter*/}
      <div className="flex flex-row flex-wrap items-center justify-center">
        <SearchBar searchTerm={searchTerm} onSearchChange={dispatch(setSearchTerm)} />
        <Filter selectedType={selectedType} onTypeChange={dispatch(setSelectedType)} />
      </div>

      {/**IF USER IS NOT SEARCHING AND NOT FILTERING */}
      {!searchTerm && !selectedType ? (
        <div className="flex justify-evenly max-w-screen-2xl flex-wrap py-10 md:py-20 ease-in">
          {/* Pokemon Cards */}
          {pokemonList.length > 0 &&
            pokemonList.map((pokemon) => (
              <PokeCard
                key={pokemon.id}
                name={pokemon.name}
                types={pokemon.types}
                id={pokemon.id}
                color={pokemonTypesColors[pokemon.types[0].type.name]}
                stats={pokemon.stats}
              />
            ))}
          {loading && <Loader />}
        </div>
      ) : (
        <div className="mb-10">
          {/**ELSE */}
          <div className="flex justify-evenly max-w-screen-2xl flex-wrap py-8 md:py-20 ease-in">
            {/* Pokemon Cards */}
            {filteredPokemonList.length > 0 &&
              filteredPokemonList.map((pokemon) => (
                <PokeCard
                  key={pokemon.id}
                  name={pokemon.name}
                  types={pokemon.types}
                  id={pokemon.id}
                  color={pokemonTypesColors[pokemon.types[0].type.name]}
                  stats={pokemon.stats}
                />
              ))}
            {loading && <Loader />}
          </div>
          <div className="flex space-x-2 justify-center items-center mb-10">
            <p className="mb-10">Can't find your pokemon?</p>
            <button
              onClick={handleClick}
              className="rounded-full outline outline-gray-300 w-40 h-10 mb-10"
            >
              Search More
            </button>
          </div>
        </div>
      )}
    </div>
  );
}