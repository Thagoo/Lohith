import React from "react";
import { AppBar, Box, Typography, Toolbar, Button } from "@mui/material";
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

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <AppBar position="relative" component="nav">
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{
                fontSize: `3rem`,
                fontFamily: "Bebas Neue",
                display: { xs: "block", sm: "block" },
              }}
            >
              Lohith
            </Typography>
            <Box
              ml={10}
              sx={{
                flexGrow: "1",
              }}
            >
              <NavLink
                to={"/"}
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
            <Box>
              <NavLink
                to={"/more/projects"}
                className={classes.headerLinks}
                style={({ isActive }) => ({
                  textDecoration: isActive ? "underline" : "none",
                })}
              >
                More
              </NavLink>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default Header;
