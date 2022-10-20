import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { getPage, getPokemonsAsync, getSortBy } from "@/store/pokeSlice";
import { useEffect } from "react";

export const useGetPokemons = () => {
  const dispatch = useAppDispatch();
  const page = useAppSelector(getPage);
  const sortBy = useAppSelector(getSortBy);

  useEffect(() => {
    dispatch(getPokemonsAsync({ page, sortBy }));
  }, [dispatch, page, sortBy]);
};
