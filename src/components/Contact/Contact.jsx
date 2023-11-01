import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import Sidebar from "./Sidebar";
import { contactContent } from "../../content/contact/contact";

function Contact() {
  const { contactType } = useParams();
  const selectedcontact = contactContent.find(
    (contact) => contact.key === contactType
  );

  return (
    <>
      <Grid container direction="row">
        <Grid item md={2}>
          <Sidebar />
        </Grid>
        <Grid item md={10}>
          <Box p="10px">
            <Typography
              variant="h6"
              sx={{
                color: "#333",
                fontWeight: `600`,
                textTransform: `uppercase`,
                fontFamily: "Fjalla One",
              }}
            >
              {selectedcontact.title}
            </Typography>
            <Typography
              variant="p"
              sx={{
                fontSize: "15px",
                color: "#222",
                opacity: "85%",
                fontFamily: "Fjalla One",
              }}
            >
              {selectedcontact.content}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Contact;
