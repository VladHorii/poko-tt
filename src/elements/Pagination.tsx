import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { getPage, getTotalItems, setPage } from "@/store/pokeSlice";
import MuiPagination from "@mui/material/Pagination";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Pagination = () => {
  const dispatch = useAppDispatch();
  const page = useAppSelector(getPage);
  const totalPage = useAppSelector(getTotalItems);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    dispatch(setPage(value));
  };

  return (
    <Container>
      <MuiPagination
        sx={{ padding: "20px 0" }}
        count={Math.floor(totalPage / 20)}
        page={page}
        onChange={handleChange}
      />
    </Container>
  );
};
