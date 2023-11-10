import { Box, Grid, Grow, Typography } from "@mui/material";
import React from "react";
import { Outlet, useParams } from "react-router-dom";
import ContentLoader from "../../pages/Content/ContentLoader";
import { aboutContent } from "../../content/about/about";

function About() {
  const { aboutType } = useParams();

  return (
    <>
      <ContentLoader
        section={"about"}
        contentType={aboutType}
        contents={aboutContent}
      />
    </>
  );
}

export default About;
