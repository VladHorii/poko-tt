import { fetchPokemons } from "@/features/Poke/api/fetchPokemons";
import { Pokemon } from "@/features/Poke/types";
import { fetchSpecies } from "@/features/filter/api/fetchSpecies";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

export const getPokemonsAsync = createAsyncThunk(
  "poke/fetchPokemons",
  async ({ page, sortBy }: { page: number; sortBy: string | null }) => {
    return await fetchPokemons(page, sortBy);
  }
);

export const getSpeciesAsync = createAsyncThunk(
  "poke/fetchSpecies",
  async () => {
    return await fetchSpecies();
  }
);

export interface PokeState {
  pokes: Pokemon[];
  page: number;
  totalItems: number;
  selectedPokemon: Record<string, Pokemon>;
  sortBy: string | null;
  species: string[];
}

const initialPokeState: PokeState = {
  pokes: [],
  page: 1,
  totalItems: 0,
  selectedPokemon: {},
  sortBy: null,
  species: [],
};

export const pokeSlice = createSlice({
  name: "poke",
  initialState: initialPokeState,
  reducers: {
    setPoke: (state, action: PayloadAction<PokeState["pokes"]>) => {
      state.pokes.splice(0, 0, ...action.payload);
    },
    setSpecies: (state, action: PayloadAction<PokeState["species"]>) => {
      state.species = action.payload;
    },
    setPage: (state, action: PayloadAction<PokeState["page"]>) => {
      state.page = action.payload;
    },
    setTotalItems: (state, action: PayloadAction<PokeState["totalItems"]>) => {
      state.totalItems = action.payload;
    },
    setSelectedPokemon: (state, action: PayloadAction<Pokemon>) => {
      state.selectedPokemon[action.payload.name] = action.payload;
    },
    setSortBy: (state, action: PayloadAction<PokeState["sortBy"]>) => {
      state.sortBy = action.payload;
    },
    incrementPage: (state) => {
      console.log("increment");
      state.page += 1;
    },
    decrementPage: (state) => {
      if (state.page <= 1) {
        return;
      }
      state.page -= 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPokemonsAsync.fulfilled, (state, action) => {
        state.pokes = action.payload.results;
        state.totalItems = action.payload.count;
      })
      .addCase(getSpeciesAsync.fulfilled, (state, action) => {
        state.species = action.payload;
      });
  },
});

export const {
  setPoke,
  incrementPage,
  decrementPage,
  setPage,
  setSelectedPokemon,
  setSortBy,
} = pokeSlice.actions;
export const pokeReducer = pokeSlice.reducer;

export const getPokemons = (state: RootState) => state.poke.pokes;
export const getPage = (state: RootState) => state.poke.page;
export const getTotalItems = (state: RootState) => state.poke.totalItems;
export const getSortBy = (state: RootState) => state.poke.sortBy;
export const getSpecies = (state: RootState) => state.poke.species;
