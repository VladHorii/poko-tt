import { axios } from "@/lib/axios";
import { Pokemon } from "../types";

interface PokeAPI {
  results: Pokemon[];
  count: number;
}

interface PokeWithSortAPI {
  pokemon: {
    pokemon: {
      name: "enamorus-therian";
      url: "https://pokeapi.co/api/v2/pokemon/10249/";
    };
    slot: 2;
  }[];
  count: number;
}

const limit = 20;

export const fetchPokemons = async (
  page: number,
  sortBy: string | null
): Promise<PokeAPI> => {
  if (sortBy) {
    const response = (await axios.get(`type/${sortBy}`, {
      params: {
        limit,
        offset: page * limit,
      },
    })) as PokeWithSortAPI;

    return {
      count: 0,
      results: response.pokemon.map((pokemon) => pokemon.pokemon),
    };
  }

  return axios.get("pokemon", {
    params: {
      limit,
      offset: page * limit,
    },
  }) as Promise<PokeAPI>;
};
