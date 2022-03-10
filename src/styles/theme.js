import { createTheme } from "@material-ui/core/styles";
import { responsiveFontSizes } from "@material-ui/core";
import { red } from "@material-ui/core/colors";

let AlphaTheme = createTheme({
  props: {
    MuiButton: {
      disableElevation: true,
    },
    MuiCard: {
      disableElevation: true,
    },
  },
  palette: {
    border: {
      light: "#fafafa",
      medium: "#f0f0f0",
    },
    primary: {
      offwhite: "#e8f3fd",
      lighter: "#c4e0f8",
      light: "#49a0e8",
      main: "#1083e1",
      dark: "#0d64ac",
      darker: "#0b528c",
    },
    secondary: {
      light: "#55dde7",
      main: "#20d2df",
      dark: "#18a0aa",
      offwhite: "#f0feff",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
  },
  typography: {
    fontFamily: "'Mulish', sans-serif",
    body1: {
      fontSize: "1.2rem",
      lineHeight: 1.6,
    },
    body2: {
      fontSize: "1rem",
      lineHeight: 1.3,
    },
    h2: {
      fontWeight: 900,
    },
    h3: {
      fontWeight: 800,
    },
    overline: {
      fontSize: "1.1rem",
      fontWeight: 700,
      lineHeight: 1,
      letterSpacing: ".2rem",
    },
    button: {
      fontSize: ".95rem",
      fontWeight: 700,
      lineHeight: 1,
      letterSpacing: ".15rem",
    },
  },
  button: {
    borderRadius: 50,
  },
});

AlphaTheme.shadows[1] = "0px 1px 3px rgba(3, 0, 71, 0.09)";
AlphaTheme.shadows[2] = "0px 4px 16px rgba(43, 52, 69, 0.1)";
AlphaTheme.shadows[3] = "0px 8px 45px rgba(3, 0, 71, 0.09)";

export default responsiveFontSizes(AlphaTheme);
