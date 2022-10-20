import { axios } from "@/lib/axios";
import { OnePokemon } from "../types";

export function fetchPokemonByName(name: string) {
  try {
    return axios.get(`pokemon/${name}`) as Promise<OnePokemon>;
  } catch (error) {
    return null;
  }
}
