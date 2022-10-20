import { APP_ROUTES } from "@/types/general";
import { ArrowBack } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useGetPokemon } from "../hooks/useGetPokemon";
import { PokemonInfo } from "./PokemonInfo";

export const Poke = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { pokemon } = useGetPokemon(params[APP_ROUTES.PokemonId]);

  const handleGoBackBlick = () => {
    navigate(APP_ROUTES.Pokemons);
  };

  return (
    <div>
      <div>
        <Button onClick={handleGoBackBlick} variant="contained">
          <ArrowBack />
          Go back
        </Button>
      </div>

      <Box padding={"30px 0px"}>
        {pokemon ? (
          <div>
            Information about <b>{pokemon.name}</b>
            <PokemonInfo pokemon={pokemon} />
          </div>
        ) : (
          "Pokemon with given name not found"
        )}
      </Box>
    </div>
  );
};
