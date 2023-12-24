import { createSlice } from "@reduxjs/toolkit";

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    pokemonList: [],
    fetchMore: false,
    loading: false,
    searchTerm: "",
    selectedType: "",
    filteredPokemonList: [],
  },
  reducers: {
    setPokemonList: (state, action) => {
      state.pokemonList = action.payload;
    },
    setFetchMore: (state, action) => {
      state.fetchMore = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setSelectedType: (state, action) => {
      state.selectedType = action.payload;
    },
    setFilteredPokemonList: (state, action) => {
      state.filteredPokemonList = action.payload;
    },
  },
});

export const {
  setPokemonList,
  setFetchMore,
  setLoading,
  setSearchTerm,
  setSelectedType,
  setFilteredPokemonList,
} = pokemonSlice.actions;

export default pokemonSlice.reducer;
