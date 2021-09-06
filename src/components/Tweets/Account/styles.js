import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  account: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: 100,
    cursor: "pointer",
    transition: "opacity 300ms, transform 300ms",
    margin: `${theme.spacing(1)}px 0`,
    [theme.breakpoints.down("sm")]: {
      flexBasis: "33% !important",
    },
    [theme.breakpoints.down("xs")]: {
      flexBasis: "50% !important",
    },
  },
  account_img: {
    position: "relative",
    width: 55,
    height: 55,
    overflow: "hidden",
    borderRadius: "50%",
    "& img": {
      transition: "filter 300ms",
    },
    boxShadow: theme.shadows[3],
    marginBottom: theme.spacing(0.4),
  },
  account_unselected: {
    "& img": {
      filter: "grayscale(300%) blur(2px)",
    },
    opacity: 0.7,
    transform: "scale(.9)",
    "&:hover": {
      transform: "scale(.95)",
      "& img": {
        filter: "grayscale(70%) blur(1px)",
      },
    },
    [theme.breakpoints.down("sm")]: {
      opacity: 0.5,
      transform: "scale(1)",
      "&:hover": {
        transform: "scale(1)",
      },
    },
  },
  account_selected: {
    "& img": {
      filter: "",
    },
    opacity: 1,
    transform: "scale(1.02)",
    "&:hover": {
      transform: "scale(1.1)",
    },
    [theme.breakpoints.down("sm")]: {
      transform: "scale(1)",
      "&:hover": {
        transform: "scale(1)",
      },
    },
  },
  followers: {
    fontSize: ".9rem",
    marginTop: -5,
  },
}));
