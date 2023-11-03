import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { purple, grey } from "@mui/material/colors";
import "typeface-cormorant";
import "@fontsource/roboto";

const theme = createTheme({
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
