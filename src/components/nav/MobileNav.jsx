import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Notifications, Add, Help, Search } from "@mui/icons-material";
import { NavContext } from "../../context/nav-context";
import { useContext } from "react";

const MobileNav = () => {
  const { handleNavToggle } = useContext(NavContext);
  return (
    <Box className="lg:hidden" sx={{ flexGrow: 1 }}>
      <AppBar position="static" className="bg-white mb-4 text-black">
        <Toolbar>
          <IconButton
            onClick={handleNavToggle}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            edge="end"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            People
          </Typography>

          <IconButton size="large" color="inherit" aria-label="menu">
            <Search />
          </IconButton>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <Add />
          </IconButton>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <Notifications />
          </IconButton>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <Help />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default MobileNav;
