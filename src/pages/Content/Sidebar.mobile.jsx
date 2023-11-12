import * as React from "react";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Link } from "@mui/material";
import { NavLink } from "react-router-dom";
import { Container } from "@mui/material";

const drawerWidth = 240;

export default function SidebarMobile({
  section,
  options,
  containerHeight,
  setOpen,
  open,
}) {
  const [height, setHeight] = React.useState();
  const preventDefault = (event) => event.preventDefault();

  const useStyles = makeStyles({
    drawer: {
      position: "relative",
      width: 0,
      "& .MuiBackdrop-root": {
        display: "none",
      },
      "& .MuiDrawer-paper": {
        overflow: "hidden",
        width: 100,
        position: "absolute",
        height: height,
        transition: "none !important",
      },
    },
  });

  const classes = useStyles();
  React.useEffect(() => {
    if (open) {
      setHeight(containerHeight);
    } else {
      setHeight(0);
    }
  }, [open]);

  React.useEffect(() => {
    setOpen(!open);
  }, [1]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        sx={{ mr: 0, ...(open && { display: "none" }) }}
      >
        <ChevronRightIcon />
      </IconButton>

      <Drawer
        open={open}
        className={classes.drawer}
        variant="persistent"
        anchor="left"
      >
        <Box sx={{ display: "flex", justifyContent: "end" }}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </Box>
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            flexWrap: "wrap",
            fontFamily: "Cormorant",
          }}
          onClick={preventDefault}
        >
          {options.map((option) => (
            <NavLink
              to={`/${section}/${option.key}`}
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
              })}
            >
              <Link
                component={Typography}
                style={{
                  color: "#61456a",
                  fontFamily: "Arial",
                }}
                underline="hover"
              >
                {option.key}
              </Link>
            </NavLink>
          ))}
        </Container>
      </Drawer>
    </Box>
  );
}
