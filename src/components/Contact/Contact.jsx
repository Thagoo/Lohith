import { Box, Grid, Grow, Typography } from "@mui/material";
import React from "react";
import { Outlet, useParams } from "react-router-dom";
import ContentLoader from "../../pages/Content/ContentLoader";
import { contactContent } from "../../content/contact/contact";

function contact() {
  const { contactType } = useParams();

  return (
    <>
      <ContentLoader
        section={"contact"}
        contentType={contactType}
        contents={contactContent}
      />
    </>
  );
}

export default contact;
