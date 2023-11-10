import { Box, Grid, Grow, Typography } from "@mui/material";
import React from "react";
import Sidebar from "./Sidebar";
import { Outlet, useParams } from "react-router-dom";

function ContentLoader({ section, contentType, contents }) {
  const selectedContent = contents.find(
    (content) => content.key === contentType
  );

  return (
    <>
      <Grid container component={Box} direction="row">
        <Grid item md={2} xs={3}>
          <Sidebar section={section} options={contents} />
        </Grid>
        <Grid item md={10} xs={9} p={"10px"} component={Box}>
          <Typography
            variant="h6"
            sx={{
              color: "#333",
              fontWeight: `600`,
              textTransform: `uppercase`,
              fontFamily: "Fjalla One",
            }}
          >
            {selectedContent?.title}
          </Typography>
          <Box
            sx={{
              overflow: "auto",
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontSize: "18px",
                color: "#222",
                opacity: "85%",
                fontFamily: "Fjalla One",
              }}
            >
              {selectedContent?.content}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default ContentLoader;
