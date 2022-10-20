import { Header } from "@/elements";
import { Outlet } from "react-router-dom";

export const PokemonLayout = () => {
  return (
    <>
      <Header />
      <div style={{ padding: "40px" }}>
        <Outlet />
      </div>
    </>
  );
};
