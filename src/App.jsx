import React from "react";
import Header from "./components/Header/Header";
import { Container, CssBaseline } from "@mui/material";
import Banner from "./components/Banner/Banner";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <BrowserRouter>
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
          </Routes>
        </BrowserRouter>
      </Container>
    </>
  );
}

export default App;
