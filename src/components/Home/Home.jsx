import React, { useEffect, useRef, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { Box, Grid, Slide, Paper, Typography, Fade } from "@mui/material";
import Sidebar from "./Sidebar";
import hero from "../../assets/hero.jpg";

function Home() {
  const [firstAnimationFinished, setFirstAnimationFinished] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFirstAnimationFinished(true);
    }, 1000); // Adjust the time to match the expected duration of the first animation

    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <>
      <Grid
        container
        component={Paper}
        square
        elevation={10}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          item
          xs={12}
          md={8}
          sx={{
            bgcolor: `#e4e4e2`,
          }}
        >
          {" "}
          <Box p="10px">
            <Fade in direction="right">
              <Typography
                variant="h6"
                align="center"
                sx={{
                  color: "#333",
                  fontWeight: `600`,
                  textTransform: `uppercase`,
                  fontFamily: "Fjalla One",
                }}
              >
                Hello, World!
              </Typography>
            </Fade>
            <Fade
              in
              style={{ transformOrigin: "0 0 0" }}
              {...{ timeout: 1000 }}
              direction="left"
            >
              <Typography
                align="center"
                variant="h4"
                sx={{
                  color: "#222",
                  opacity: "85%",
                  fontFamily: "Fjalla One",
                }}
              >
                My name is <span style={{ color: `#61456c` }}>Lohith</span>
              </Typography>
            </Fade>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                width: `100%`,
                overflow: "hidden",
              }}
              ref={containerRef}
            >
              <Fade
                in
                style={{ transformOrigin: "0 0 0" }}
                {...{ timeout: 2000 }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    color: "#222",
                    opacity: "85%",
                    fontFamily: "Fjalla One",
                  }}
                >
                  I am a <span style={{ color: `#61456c` }}>Software</span>
                </Typography>
              </Fade>
              <Slide
                in
                direction="left"
                {...{ timeout: 2000 }}
                container={containerRef.current}
              >
                <Typography
                  variant="h5"
                  sx={{
                    ml: "4px",
                    color: "#61456c",
                    opacity: "85%",
                    fontFamily: "Fjalla One",
                  }}
                >
                  Developer
                </Typography>
              </Slide>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          p="10px"
          sx={{
            bgcolor: `#e4e4e2`,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box p="15px">
            <img src={hero} alt="test" style={{ height: `55vh` }} />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
