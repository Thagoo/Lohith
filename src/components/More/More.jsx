import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import Sidebar from "./Sidebar";
import { moreContent } from "../../content/more/more";

function More() {
  const { moreType } = useParams();
  const selectedmore = moreContent.find((more) => more.key === moreType);

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
              {selectedmore.title}
            </Typography>

            {selectedmore.content}
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default More;
