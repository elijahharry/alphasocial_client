import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  primary: {
    background: theme.palette.primary,
    background: `linear-gradient(220deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.dark} 100%)`,
  },
  primary_darker: {
    background: theme.palette.primary,
    background: `linear-gradient(220deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.darker} 100%)`,
  },
  both: {
    background: theme.palette.primary,
    background: `linear-gradient(250deg, ${theme.palette.primary.dark} 0%, ${theme.palette.secondary.main} 100%)`,
  },
  both_flipped: {
    background: theme.palette.primary,
    background: `linear-gradient(250deg, ${theme.palette.secondary.main} 0%, ${theme.palette.primary.main} 90%)`,
  },
  both_dark: {
    background: theme.palette.primary,
    background: `linear-gradient(250deg, ${theme.palette.secondary.main} 0%, ${theme.palette.primary.dark} 100%)`,
  },
  secondary: {
    background: theme.palette.secondary,
    background: `linear-gradient(220deg, ${theme.palette.secondary.light} 0%, ${theme.palette.secondary.dark} 100%)`,
  },
  secondary_flipped: {
    background: theme.palette.secondary,
    background: `linear-gradient(220deg, ${theme.palette.secondary.main} 0%, ${theme.palette.secondary.light} 100%)`,
  },
  secondary_grey: {
    background: theme.palette.secondary,
    background: `linear-gradient(220deg, #808080 0%, ${theme.palette.secondary.light} 70%)`,
  },
  shadows_vert: {
    background: "rgb(0,0,0)",
    background:
      "linear-gradient(0deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 15%, rgba(0,0,0,0) 85%, rgba(0,0,0,0.4) 100%)",
  },
  grey: {
    backgroundColor: "#fcfcfc",
  },
  rainbow: {
    background: theme.palette.primary,
    background: `linear-gradient(250deg, ${theme.palette.secondary.main} 0%, ${theme.palette.primary.light} 20%, ${theme.palette.secondary.dark} 40%, ${theme.palette.primary.dark} 60%, ${theme.palette.secondary.light} 80%, ${theme.palette.primary.main} 100%)`,
  },
  rainbow_dark: {
    background: theme.palette.primary,
    background: `linear-gradient(250deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.dark} 25%, ${theme.palette.primary.dark} 50%, ${theme.palette.secondary.dark} 75%, ${theme.palette.primary.main} 100%)`,
  },
}));
