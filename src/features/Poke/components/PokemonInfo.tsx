import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { OnePokemon } from "../types";

interface Props {
  pokemon: OnePokemon;
}

export const PokemonInfo = ({ pokemon }: Props) => {
  return (
    <div>
      <div style={{ padding: "10px" }}>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        <img src={pokemon.sprites.front_shiny} alt={pokemon.name} />
      </div>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Moves:</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {pokemon.moves.map((el) => el.move.name).join(", ")}
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Stats:</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {pokemon.stats.map((el) => el.stat.name).join(", ")}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
