import { useEffect, useState } from "react";
import { fetchPokemonByName } from "../api/fetchPokemonByName";
import { OnePokemon } from "../types";

export const useGetPokemon = (name: string | undefined, load = true) => {
  const [pokemon, setPokemon] = useState<OnePokemon | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetch = async (name: string) => {
      setIsLoading(true);
      const result = await fetchPokemonByName(name);
      setIsLoading(false);
      setPokemon(result);
    };

    if (name && load && !pokemon) {
      fetch(name);
    }
  }, [load, name, pokemon]);

  useEffect(() => {
    setPokemon(null);
  }, [name]);

  return { pokemon, isLoading };
};
