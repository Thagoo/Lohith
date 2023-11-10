import React from "react";
import { Box, Grid, Paper, Slide } from "@mui/material";
import hero from "../../assets/hero.jpg";

function Banner({ children }) {
  return (
    <>
      <Grid container component={Paper} square elevation={10} sx={{ flex: 1 }}>
        <Grid item xs={12} md={9}>
          {children}
        </Grid>
        <Grid
          item
          md={3}
          p="20px"
          sx={{
            display: { xs: "none", md: "flex" },
            bgcolor: `#e4e4e2`,
            justifyContent: "center",
          }}
        >
          <img src={hero} alt="test" style={{ height: `50vh` }} />
        </Grid>
      </Grid>
    </>
  );
}

export default Banner;
