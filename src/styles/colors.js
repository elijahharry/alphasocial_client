import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  secondary_light: {
    color: theme.palette.secondary.light,
  },
  secondary: {
    color: theme.palette.secondary.main,
  },
  primary: {
    color: theme.palette.primary.main,
  },
  span_secondary: {
    "& span": {
      color: theme.palette.secondary.main,
    },
  },
  span_secondary_light: {
    "& span": {
      color: theme.palette.secondary.light,
    },
  },
  span_primary: {
    "& span": {
      color: theme.palette.primary.main,
    },
  },
  underline_primary: {
    "& span": {
      // color: theme.palette.secondary.main,
      textDecoration: "underline",
      textDecorationColor: theme.palette.primary.main,
      textDecorationStyle: "dotted",
    },
  },
  underline_secondary: {
    "& span": {
      textDecoration: "underline",
      textDecorationColor: theme.palette.secondary.main,
      textDecorationStyle: "dotted",
    },
  },
}));
