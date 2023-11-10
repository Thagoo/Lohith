import React from "react";
import Header from "./components/Header/Header";
import { Container, CssBaseline } from "@mui/material";
import Banner from "./components/Banner/Banner";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Career from "./components/Career/Career";
import Footer from "./components/Footer/Footer";
import useMediaQuery from "@mui/material/useMediaQuery";

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
              path="/about/:aboutType"
              element={
                <Banner>
                  <About />
                </Banner>
              }
            ></Route>

            <Route
              path="/contact/:contactType"
              element={
                <Banner>
                  <Contact />
                </Banner>
              }
            />
            <Route
              path="/career/:careerType"
              element={
                <Banner>
                  <Career />
                </Banner>
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
