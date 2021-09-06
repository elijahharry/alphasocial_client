import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  stacked: {
    position: "relative",
    zIndex: 2,
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    transform: "scale(.9) translateY(11.5%)",
    [theme.breakpoints.down("xs")]: {
      transform: "scale(.9) translateY(9%)",
    },
  },
  img: {
    display: "flex",
    justifyContent: "center",
    position: "absolute",
    zIndex: 1,
    alignItems: "flex-end",
    "& div": {
      borderRadius: 20,
      transition: "box-shadow 500ms",
    },
  },
  main: {
    zIndex: 2,
    "& div": {
      boxShadow: theme.shadows[4],
    },
  },
  behind: {
    zIndex: 1,
    "& div": {
      boxShadow: theme.shadows[2],
    },
  },
  removing: {
    zIndex: 3,
    "& div": {
      boxShadow: theme.shadows[6],
    },
  },
  offpage: {
    zIndex: 0,
    "& div": {
      boxShadow: theme.shadows[6],
    },
  },
}));
