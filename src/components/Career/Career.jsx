import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import Sidebar from "./Sidebar";
import { careerContent } from "../../content/career/career";

function Career() {
  const { careerType } = useParams();
  const selectedCareer = careerContent.find(
    (career) => career.key === careerType
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
              {selectedCareer.title}
            </Typography>

            {selectedCareer.content}
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Career;
