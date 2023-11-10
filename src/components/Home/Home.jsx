import React, { useEffect, useRef, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import {
  Box,
  Grid,
  Slide,
  Paper,
  Typography,
  Fade,
  Container,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import Sidebar from "./Sidebar";
import hero from "../../assets/hero.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

function Home() {
  const mobile = !useMediaQuery("(min-width:600px)");

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
        elevation={10}
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ flex: 1 }}
      >
        <Grid
          item
          xs={12}
          md={8}
          sx={{
            height: { xs: "40vh", md: "auto" },
            bgcolor: `#e4e4e2`,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
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
            <Box
              sx={{
                bgcolor: `#e4e4e2`,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Fade
                in
                style={{ transformOrigin: "0 0 0" }}
                {...{ timeout: 2000 }}
              >
                <div>
                  <IconButton href="https://github.com/thagoo">
                    <FaGithub color="#222" />
                  </IconButton>
                </div>
              </Fade>
              <Fade
                in
                style={{ transformOrigin: "0 0 0" }}
                {...{ timeout: 2000 }}
              >
                <div>
                  <IconButton href="https://www.linkedin.com/in/lohith-295814233/">
                    <FaLinkedin color="#222" />
                  </IconButton>
                </div>
              </Fade>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          component={Container}
          md={4}
          py="10px"
          sx={{
            bgcolor: `#e4e4e2`,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src={hero}
            alt="test"
            style={{
              height: mobile ? "55vh" : "20rem",
              borderRadius: mobile ? "24px" : "1px",
            }}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
