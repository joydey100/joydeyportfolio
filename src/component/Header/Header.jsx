import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Container } from "@mui/material";
import { Box } from "@mui/system";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { makeStyles } from "@mui/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Link, NavLink } from "react-router-dom";
import menu from "./HeaderData";
import logo from "../../images/logo.png";
import "./Header.css";

const drawerWidth = 240;

const useStyles = makeStyles({
  drawer: {
    width: drawerWidth,
    color: "#fff!important",
  },
});

const Header = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const matches = useMediaQuery("(max-width:900px)");

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const classes = useStyles();

  return (
    <>
      {/* Main AppBar */}
      <AppBar position="static" color="transparent" sx={{ py: 1 }}>
        <Toolbar>
          <Container sx={{ display: "flex", alignItems: "center" }}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/">
                <img src={logo} alt="logo" style={{ width: "70px" }} />
              </Link>
            </Typography>

            <Box component="div">
              {matches && (
                <IconButton
                  size="large"
                  edge="start"
                  color="secondary"
                  aria-label="menu"
                  onClick={handleDrawerToggle}
                >
                  <MenuIcon />
                </IconButton>
              )}

              {/* Main Menu */}
              <nav style={{ display: "flex" }}>
                {!matches &&
                  menu.map((menu) => (
                    <NavLink
                      style={({ isActive }) => {
                        return {
                          display: "block",
                          margin: "1rem 15px",
                          fontSize: "18px",
                          color: isActive ? "#00CF5D" : "#ddd",
                        };
                      }}
                      to={menu.path}
                      key={menu.id}
                    >
                      {menu.menuName}
                    </NavLink>
                  ))}
              </nav>
            </Box>
          </Container>
        </Toolbar>
      </AppBar>

      {/* Left Drawer */}

      <Drawer
        className={classes.drawer}
        classes={{ paper: classes.drawer }}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        anchor="left"
      >
        <List>
          {menu.map((data) => (
            <NavLink
              style={({ isActive }) => {
                return {
                  display: "block",
                  margin: "1rem 15px",
                  fontSize: "18px",
                  color: isActive ? "#00CF5D!important" : "#fff!important",
                };
              }}
              to={data.path}
              key={data.id}
            >
              <ListItem>
                <ListItemButton>
                  <ListItemIcon>{data.icon}</ListItemIcon>
                  <ListItemText primary={data.menuName} />
                </ListItemButton>
              </ListItem>
            </NavLink>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Header;
