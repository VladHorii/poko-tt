import { APP_ROUTES } from "@/types/general";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Landing = () => {
  return (
    <Wrapper>
      <p>Made with love by Vladislav {":)"}</p>

      <Link to={APP_ROUTES.Pokemons}>
        Go to <b>Pokemons</b> page
      </Link>
    </Wrapper>
  );
};
