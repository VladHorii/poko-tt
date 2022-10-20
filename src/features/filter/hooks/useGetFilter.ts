import { useAppDispatch } from "@/store/hooks";
import { getSpeciesAsync } from "@/store/pokeSlice";
import { useEffect } from "react";

export const useGetFilter = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getSpeciesAsync());
  }, [dispatch]);
};
