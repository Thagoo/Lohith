import { Box, Grid, Grow, Typography } from "@mui/material";
import React from "react";
import Sidebar from "./Sidebar";
import { Outlet, useParams } from "react-router-dom";
import { aboutContent } from "../../content/about/about";

function About() {
  const { aboutType } = useParams();
  const selectedAbout = aboutContent.find((about) => about.key === aboutType);

  return (
    <>
      <Grid container component={Box} direction="row">
        <Grid item md={2}>
          <Sidebar />
        </Grid>
        <Grid item md={10} p={"10px"} component={Box}>
          <Typography
            variant="h6"
            sx={{
              color: "#333",
              fontWeight: `600`,
              textTransform: `uppercase`,
              fontFamily: "Fjalla One",
            }}
          >
            {selectedAbout?.title}
          </Typography>
          <Box sx={{ height: "70vh", overflow: "auto", pb: 6, pr: 2 }}>
            <Typography
              variant="p"
              sx={{
                fontSize: "18px",
                color: "#222",
                opacity: "85%",
                fontFamily: "Fjalla One",
              }}
            >
              {selectedAbout?.content}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default About;
