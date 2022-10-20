import { AppBar, Box, Toolbar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Search } from "./Search";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Search onSubmit={navigate} />
        </Toolbar>
      </AppBar>
    </Box>
  );
};
