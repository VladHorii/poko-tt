import { axios } from "@/lib/axios";

type SpeciesAPI = { results: { name: string }[] };

export const fetchSpecies = async () => {
  return ((await axios.get("type")) as SpeciesAPI)["results"].map(
    (el) => el.name
  );
};
