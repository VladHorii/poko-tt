import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { getSortBy, getSpecies, setSortBy } from "@/store/pokeSlice";
import { Autocomplete, TextField } from "@mui/material";
import styled from "styled-components";
import { useGetFilter } from "../hooks/useGetFilter";

const Container = styled.div`
  padding: 20px 0;
  margin-bottom: 40px;
`;

export const Filter = () => {
  const soryBy = useAppSelector(getSortBy);
  const species = useAppSelector(getSpecies);
  const dispatch = useAppDispatch();

  useGetFilter();

  const handleChange = (event: any, value: string | null) => {
    dispatch(setSortBy(value));
  };

  if (!species.length) return <></>;

  return (
    <Container>
      <Autocomplete
        value={soryBy}
        options={species}
        getOptionLabel={(option) => option}
        onChange={handleChange}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="Sort by species"
            placeholder="Species"
          />
        )}
      />
    </Container>
  );
};
