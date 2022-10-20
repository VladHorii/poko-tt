import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import React from "react";
import { useGetPokemon } from "../hooks/useGetPokemon";
import { PokemonInfo } from "./PokemonInfo";

interface Props {
  name: string;
  isExpanded: boolean;
  onExpanded: (name: string | null) => void;
}

export const PokemonDescription = ({ name, isExpanded, onExpanded }: Props) => {
  const { pokemon } = useGetPokemon(name, isExpanded);

  const handleChange = (event: React.SyntheticEvent, expanded: boolean) => {
    onExpanded(expanded ? name : null);
  };

  return (
    <Accordion expanded={isExpanded} onChange={handleChange}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>{name}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {pokemon ? <PokemonInfo pokemon={pokemon} /> : "loading..."}
      </AccordionDetails>
    </Accordion>
  );
};
