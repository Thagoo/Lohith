import {
  Box,
  Container,
  Grid,
  Grow,
  Paper,
  Typography,
  styled,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import Sidebar from "./Sidebar";
import SidebarMobile from "./Sidebar.mobile";
import { useTheme } from "@mui/styles";
import hero from "../../assets/hero.jpg";
import { useParams } from "react-router-dom";

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `100px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

function ContentLoader({ section, contents }) {
  const [open, setOpen] = React.useState(false);
  const { contentType } = useParams();
  const theme = useTheme();
  const [containerHeight, setContainerHeight] = useState();

  const selectedContent = contents.find(
    (content) => content.key === contentType
  );

  const containerRef = useRef(null);

  useEffect(() => {
    setContainerHeight(containerRef.current.clientHeight);
  });

  return (
    <>
      <Grid
        container
        component={Paper}
        square
        elevation={10}
        sx={{ flex: 1 }}
        ref={containerRef}
      >
        <Grid item md={1.5} xs={0}>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <Sidebar section={section} options={contents} />
          </Box>
        </Grid>
        <Grid item md={7} xs={12} sx={{ display: "flex" }}>
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <SidebarMobile
              section={section}
              options={contents}
              containerHeight={containerHeight}
              setOpen={setOpen}
              open={open}
            />
          </Box>
          <Main open={open} sx={{ p: 1 }}>
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
          </Main>
        </Grid>
        <Grid
          item
          md={3.5}
          p="20px"
          sx={{
            display: { xs: "none", md: "flex" },
            bgcolor: `#e4e4e2`,
            justifyContent: "center",
          }}
        >
          <img src={hero} alt="hero" style={{ height: `50vh` }} />
        </Grid>
      </Grid>
    </>
  );
}

export default ContentLoader;
