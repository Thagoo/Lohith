import React from "react";
import Header from "./components/Header/Header";
import { Container, CssBaseline } from "@mui/material";
import Home from "./components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import useMediaQuery from "@mui/material/useMediaQuery";
import ContentLoader from "./pages/Content/ContentLoader";
import { aboutContent } from "./content/about/about";
import { contactContent } from "./content/contact/contact";
import { careerContent } from "./content/career/career";

function App() {
  const mobile = !useMediaQuery("(min-width:600px)");

  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <Container
          maxWidth="lg"
          disableGutters={mobile}
          style={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
          }}
        >
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route
              path="/about/:contentType"
              element={
                <ContentLoader section={"about"} contents={aboutContent} />
              }
            ></Route>

            <Route
              path="/contact/:contentType"
              element={
                <ContentLoader section={"contact"} contents={contactContent} />
              }
            />
            <Route
              path="/career/:contentType"
              element={
                <ContentLoader section={"career"} contents={careerContent} />
              }
            />
          </Routes>
          <Footer />
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
