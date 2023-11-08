import { Box, Button, Container, Grid, Grow, Typography } from "@mui/material";
import React, { useRef } from "react";

const RButton = ({ children }) => {
  return (
    <>
      <Button
        sx={{
          fontFamily: "Fjalla One",
          color: "#F8DFFF",
          background:
            " linear-gradient(to right bottom, #3d2d43, #47324f, #52375b, #5d3b67, #684073);",
          px: 10,
          py: 1,
        }}
      >
        {children}
      </Button>
    </>
  );
};
function Resume() {
  return (
    <>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: `50vh`,
        }}
      >
        <Typography
          variant="h6"
          mb={4}
          sx={{
            fontWeight: `600`,
            color: "#3d2d43",
            textTransform: `uppercase`,
            fontFamily: "Fjalla One",
          }}
        >
          Download Resume
        </Typography>
        <Button
          href="https://drive.google.com/file/d/12KYxHOvj9OE0XEyHZgPGZaBUxlwzc46X/view?usp=sharing"
          target="_blank"
        >
          Download
        </Button>
      </Container>
    </>
  );
}

export default Resume;
