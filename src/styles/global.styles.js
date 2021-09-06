import Storkies from "./theme";
import { createStyles, makeStyles } from "@material-ui/core";

const theme = Storkies;

const useStyles = makeStyles(() =>
  createStyles({
    "@global": {
      html: {
        scrollBehavior: "smooth",
      },
      a: {
        textDecoration: "none",
      },
      ".grey": {
        backgroundColor: "#fcfcfc",
      },
      ".img-skeleton": {
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
      },
      ".padding": {
        padding: `${theme.spacing(8)}px 0`,
      },
      ".backdrop": {
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
      },
      ".elevate-1": {
        boxShadow:
          "rgb(0 0 0 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px",
      },
      ".elevate-2": {
        boxShadow:
          "rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px",
      },
      ".elevate-3": {
        boxShadow:
          "rgb(0 0 0 / 20%) 0px 3px 3px -2px, rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px",
      },
      ".elevate-4": {
        boxShadow:
          "rgb(0 0 0 / 20%) 0px 2px 4px -1px, rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px",
      },
      ".elevate-5": {
        boxShadow:
          "rgb(0 0 0 / 20%) 0px 3px 5px -1px, rgb(0 0 0 / 14%) 0px 5px 8px 0px, rgb(0 0 0 / 12%) 0px 1px 14px 0px",
      },
      ".elevate-6": {
        boxShadow:
          "rgb(0 0 0 / 20%) 0px 3px 5px -1px, rgb(0 0 0 / 14%) 0px 6px 10px 0px, rgb(0 0 0 / 12%) 0px 1px 18px 0px",
      },
      ".elevate-7": {
        boxShadow:
          "rgb(0 0 0 / 20%) 0px 4px 5px -2px, rgb(0 0 0 / 14%) 0px 7px 10px 1px, rgb(0 0 0 / 12%) 0px 2px 16px 1px",
      },
      ".elevate-8": {
        boxShadow:
          "rgb(0 0 0 / 20%) 0px 5px 5px -3px, rgb(0 0 0 / 14%) 0px 8px 10px 1px, rgb(0 0 0 / 12%) 0px 3px 14px 2px",
      },
      ".elevate-9": {
        boxShadow:
          "rgb(0 0 0 / 20%) 0px 5px 6px -3px, rgb(0 0 0 / 14%) 0px 9px 12px 1px, rgb(0 0 0 / 12%) 0px 3px 16px 2px",
      },
      ".elevate-10": {
        boxShadow:
          "rgb(0 0 0 / 20%) 0px 6px 6px -3px, rgb(0 0 0 / 14%) 0px 10px 14px 1px, rgb(0 0 0 / 12%) 0px 4px 18px 3px",
      },
      ".MuiButton-root": {
        borderRadius: 20,
      },
      ".MuiButton-sizeLarge": {
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 22,
        paddingRight: 22,
      },
      ".MuiButton-outlinedPrimary": {
        border: `2px solid ${theme.palette.primary.light}`,
        "&:hover": {
          border: `2px solid ${theme.palette.primary.main}`,
        },
      },
      ".MuiButton-outlinedSecondary": {
        border: `2px solid ${theme.palette.secondary.light}`,
        "&:hover": {
          border: `2px solid ${theme.palette.secondary.main}`,
        },
      },
      ".MuiButton-containedSecondary": {
        background: theme.palette.secondary,
        background: `linear-gradient(20deg, ${theme.palette.secondary.main} 20%, ${theme.palette.primary.light} 100%)`,
        color: "#fff !important",
      },
      ".MuiButton-containedPrimary": {
        background: theme.palette.primary,
        // background: `linear-gradient(20deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 100%)`,
        color: "#fff !important",
        background: `linear-gradient(20deg, ${theme.palette.primary.main} 20%, ${theme.palette.secondary.light} 100%)`,
      },
      ".MuiChip-colorSecondary": {
        color: "#fff !important",
      },
    },
  })
);

const GlobalStyles = () => {
  useStyles();
  return null;
};

export default GlobalStyles;
