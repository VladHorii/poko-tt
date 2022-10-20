import { Pagination } from "@/elements";
import { Filter } from "@/features/filter";
import { useAppSelector } from "@/store/hooks";
import { getPokemons } from "@/store/pokeSlice";
import { Box } from "@mui/material";
import { useState } from "react";
import { useGetPokemons } from "../hooks/useGetPokemons";
import { PokemonDescription } from "./PokemonDescription";

export const PokemonList = () => {
  const [expanded, setExpanded] = useState<null | string>(null);
  const pokemons = useAppSelector(getPokemons);

  useGetPokemons();

  return (
    <div>
      <Filter />

      <Box
        sx={{
          width: "100%",
          maxWidth: 660,
          bgcolor: "background.paper",
          margin: "0 auto",
        }}
      >
        {pokemons.map((poke) => (
          <PokemonDescription
            key={poke.url}
            name={poke.name}
            isExpanded={expanded === poke.name}
            onExpanded={setExpanded}
          />
        ))}

        <Pagination />
      </Box>
    </div>
  );
};
