import React from "react";
import {
  AppBar,
  Box,
  Typography,
  Toolbar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, NavLink } from "react-router-dom";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  headerLinks: {
    color: "white",
    fontSize: "1.2rem",
    fontFamily: "Fjalla One",
    padding: 10,
  },
}));

function Header() {
  const classes = useStyles();

  const [state, setState] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(open);
  };

  const headerMenu = [
    { label: "About", link: "/about/me" },
    { label: "Contact", link: "/contact/email" },
    { label: "Career", link: "/career/projects" },
  ];

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Typography
        variant="h6"
        component="div"
        align="center"
        sx={{
          fontSize: `3rem`,
          fontFamily: "Bebas Neue",
        }}
      >
        Lohith
      </Typography>
      <Divider />
      <List>
        {headerMenu.map((nav, index) => (
          <ListItem key={nav.label} disablePadding>
            <ListItemButton component={Link} to={nav.link}>
              <ListItemIcon></ListItemIcon>
              <ListItemText primary={nav.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="static" component="nav">
        <Toolbar>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={toggleDrawer(true)}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor={"left"}
              open={state}
              onClose={toggleDrawer(false)}
              PaperProps={{
                sx: {
                  backgroundColor: "#61456a",
                  color: "white",
                },
              }}
            >
              {list("left")}
            </Drawer>
          </Box>
          <Link
            to="/"
            style={{
              textDecoration: "none",
            }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{
                color: "white",
                fontSize: `3rem`,
                fontFamily: "Bebas Neue",
              }}
            >
              Lohith
            </Typography>
          </Link>
          <Box
            ml={10}
            sx={{
              flexGrow: "1",
              display: { xs: "none", md: "flex" },
            }}
          >
            <NavLink
              to={"."}
              className={classes.headerLinks}
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
              })}
            >
              Home
            </NavLink>
            <NavLink
              to={"/about/me"}
              className={classes.headerLinks}
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
              })}
            >
              About
            </NavLink>
            <NavLink
              to={"/contact/email"}
              className={classes.headerLinks}
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
              })}
            >
              Contact
            </NavLink>
          </Box>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
            }}
          >
            <NavLink
              to={"/career/projects"}
              className={classes.headerLinks}
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
              })}
            >
              Career
            </NavLink>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
