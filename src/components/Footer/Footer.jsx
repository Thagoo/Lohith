import {
  Box,
  Container,
  Fade,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import { FaGithub } from "react-icons/fa6";

function Footer() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          bgcolor: `#3d2d43`,
          height: `100%`,
        }}
      >
        <Typography
          variant="h6"
          component="div"
          sx={{
            fontSize: "2rem",
            color: "#fff",
            opacity: "70%",
            fontFamily: "Bebas Neue",
          }}
        >
          Lohith
        </Typography>
        <Tooltip
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 600 }}
          title="Source Code"
          followCursor
          placement="top"
        >
          <IconButton href="https://github.com/Thagoo/thagoo.github.io">
            <FaGithub color="white" />
          </IconButton>
        </Tooltip>
        <Typography
          sx={{
            fontSize: "14px",
            color: "#fff",
            opacity: "70%",
            fontFamily: "roboto",
          }}
        >
          ©2023 Lohith. All rights reserved.{" "}
        </Typography>
      </Box>
    </>
  );
}

export default Footer;
