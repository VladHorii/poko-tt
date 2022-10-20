import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
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
        <Typography>
          {pokemon ? <PokemonInfo pokemon={pokemon} /> : "loading..."}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};
