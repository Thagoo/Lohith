import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { purple, grey } from "@mui/material/colors";
import "typeface-cormorant";

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Cormorant,sans-serif,Arial,,Roboto,Fjalla One,Monospace",
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
