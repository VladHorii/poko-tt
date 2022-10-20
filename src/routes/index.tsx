import { Landing } from "@/features/Landing/components/Landing";
import { Poke } from "@/features/Poke/components/Poke";
import { PokemonList } from "@/features/Poke/components/PokemonList";
import { PokemonLayout } from "@/features/Poke/layouts/PokemonLayout";
import { APP_ROUTES } from "@/types/general";
import { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

export const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Landing />} />

        <Route path={APP_ROUTES.Pokemons} element={<PokemonLayout />}>
          <Route index element={<PokemonList />} />
          <Route path={`:${APP_ROUTES.PokemonId}`} element={<Poke />} />
        </Route>
      </Route>

      <Route path="*" element={<Navigate to={APP_ROUTES.Pokemons} />} />
    </Routes>
  );
};
