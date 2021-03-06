import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  service: {
    position: "absolute",
    width: 250,
    height: 140,
    // backgroundColor: "#c3c3c3",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      position: "relative",
      marginBottom: theme.spacing(2),
    },
  },
  service_1: {
    transform: "translateY(-120%)",
    left: 10,
    [theme.breakpoints.down("sm")]: {
      transform: "translateY(0)",
      left: "-12%",
    },
  },
  service_2: {
    transform: "translateY(40%)",
    left: 30,
    [theme.breakpoints.down("sm")]: {
      transform: "translateY(0)",
      left: "10%",
    },
  },
  service_3: {
    transform: "translateY(-60%)",
    right: 30,
    [theme.breakpoints.down("sm")]: {
      transform: "translateY(0)",
      right: "10%",
    },
  },
  service_4: {
    transform: "translateY(100%)",
    right: 10,
    [theme.breakpoints.down("sm")]: {
      transform: "translateY(0)",
      right: "-14%",
    },
  },
  img: {
    height: 140,
    width: 140,
    minWidth: 140,
    borderRadius: "50%",
    overflow: "hidden",
    marginRight: theme.spacing(2),
    position: "relative",
    zIndex: 1,
    boxShadow: theme.shadows[5],
    border: `4px solid ${theme.palette.secondary.main}`,
  },
  blob: {
    height: 140,
    width: 140,
    position: "absolute",
    transform: "translateY(3px)",
    left: 5,
    borderRadius: "50%",
    overflow: "hidden",
    zIndex: 0,
    animation: "$blob-animate 8s infinite",
  },
  text: {
    fontWeight: 700,
  },
}));
