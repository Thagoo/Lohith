import React from "react";
import { Box, Grid, Paper } from "@mui/material";
import Sidebar from "../Home/Sidebar";
import hero from "../../assets/hero.jpg";
import Footer from "../Footer/Footer";

function Banner({ children }) {
  return (
    <>
      <Grid container component={Paper} square elevation={10}>
        <Grid item xs={12} md={9}>
          {children}
        </Grid>
        <Grid
          item
          xs={12}
          md={3}
          p="20px"
          sx={{
            bgcolor: `#e4e4e2`,

            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box>
            <img src={hero} alt="test" style={{ height: `50vh` }} />
          </Box>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

export default Banner;
