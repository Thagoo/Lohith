import { Box, Grid, Grow, Typography } from "@mui/material";
import React from "react";
import { Outlet, useParams } from "react-router-dom";
import ContentLoader from "../../pages/Content/ContentLoader";
import { careerContent } from "../../content/career/career";

function career() {
  const { careerType } = useParams();

  return (
    <>
      <ContentLoader
        section={"career"}
        contentType={careerType}
        contents={careerContent}
      />
    </>
  );
}

export default career;
