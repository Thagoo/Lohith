import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { purple, grey } from "@mui/material/colors";
import "typeface-cormorant";
import "@fontsource/roboto";

const theme = createTheme({
  palette: {
    buttonColor: {
      main: "#61456a",
    },
  },
  typography: {
    allVariants: {
      fontFamily:
        "Cormorant,sans-serif,Arial,roboto,Fjalla One,Monospace,Bebas Neue ",
      textTransform: "none",
    },
  },

  components: {
    MuiLink: {
      defaultProps: {
        sx: {
          color: (theme) => theme.palette.secondary.main,
        },
        underline: `none`,
      },
    },
    MuiAppBar: {
      defaultProps: {
        sx: {
          backgroundColor: `#61456a`,
          boxShadow: "none",
          py: "10px",
          "@media (min-width: 600px)": {
            py: "40px",
          },
        },
      },
    },
    MuiButton: {
      defaultProps: {
        sx: {
          fontFamily: "Fjalla One",
          color: "#F8DFFF",
          background:
            "linear-gradient(to right bottom, #3d2d43, #47324f, #52375b, #5d3b67, #684073);",
          px: 10,
          py: 1,
        },
      },
    },
    MuiOutlinedInput: {
      defaultProps: {
        sx: {
          fontSize: "15px",
          color: "#222",
          opacity: "85%",
          fontFamily: "Fjalla One",
        },
      },
    },

    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: `linear-gradient(#61456a, #61456a 250px, #B6B3B7 250px)`,
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        },
      },
    },
  },
});
const AppThemeProvider = (props) => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

export default AppThemeProvider;
