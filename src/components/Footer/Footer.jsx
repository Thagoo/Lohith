import { Container, Typography } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <>
      <Container sx={{ bgcolor: `#3d2d43`, height: `25vh`, p: 2 }}>
        <center>
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
        </center>
      </Container>
    </>
  );
}

export default Footer;
