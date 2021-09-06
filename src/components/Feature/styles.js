import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  section: {
    overflow: "hidden",
    position: "relative",
    paddingTop: theme.spacing(4),
  },
  section_full: {
    height: "calc(100vh - 163px)",
    paddingBottom: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
      height: "auto",
    },
  },
  container: {
    position: "relative",
    zIndex: 2,
  },
  con_full: {
    height: "100%",
  },
  grid_full: {
    height: "100%",
  },
  section_top: {
    padding: `${theme.spacing(7)}px 0`,
  },
  text_col: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  text_col_full: {
    height: "100%",
  },
  col_left: {
    textAlign: "left",
    alignItems: "flex-start",
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
      textAlign: "center !important",
    },
  },
  col_center: {
    alignItems: "center",
    textAlign: "center",
  },
  padding_right: {
    paddingRight: theme.spacing(10),
    [theme.breakpoints.down("sm")]: {
      paddingRight: 0,
    },
  },
  padding_left: {
    paddingLeft: theme.spacing(7),
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 0,
    },
  },
  normal: {
    flexDirection: "row",
  },
  flipped: {
    flexDirection: "row-reverse",
  },
  light: {
    color: theme.palette.text.primary,
  },
  dark: {
    color: "#fff",
  },
  img_col: {
    position: "relative",
    height: 550,
    [theme.breakpoints.down("sm")]: {
      height: 570,
    },
    [theme.breakpoints.down("xs")]: {
      height: "100vw",
      marginBottom: -5,
    },
  },
  contact_col: {
    position: "relative",
    height: 580,
  },
  service_col: {
    position: "relative",
    height: 550,
    [theme.breakpoints.down("sm")]: {
      height: 750,
    },
  },
  text: {
    margin: `${theme.spacing(0.8)}px 0`,
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  text_skinny: {
    width: "50%",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  shadow: {
    width: "100%",
    height: 0,
    bottom: 0,
    left: 0,
    position: "absolute",
    zIndex: 10,
    borderRadius: 20,
    boxShadow: theme.shadows[7],
  },
  buttons: {
    margin: `${theme.spacing(1.8)}px 0`,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  button_1: {
    marginRight: theme.spacing(2),
  },
  icon: {
    color: "#fff",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: ".6rem",
    position: "absolute",
    "& svg": {
      width: "100%",
      height: "100%",
    },
  },
  icon_1: {
    left: "0",
    top: "37%",
    width: "3.5rem",
    height: "3.5rem",
    boxShadow: theme.shadows[4],
    zIndex: 5,
    animation: "$orbit 10s linear infinite",
  },
  icon_2: {
    right: "4%",
    bottom: "30%",
    width: "2.8rem",
    height: "2.8rem",
    boxShadow: theme.shadows[2],
    zIndex: -1,
    animation: "$orbit 15s linear infinite reverse",
    [theme.breakpoints.down("sm")]: {
      zIndex: 5,
    },
  },
  icon_3: {
    right: "33%",
    bottom: "15%",
    width: "3rem",
    height: "3rem",
    zIndex: 5,
    boxShadow: theme.shadows[3],
    animation: "$orbit 20s linear infinite",
  },
  icon_4: {
    left: "31%",
    bottom: "30%",
    width: "2.4rem",
    height: "2.4rem",
    boxShadow: theme.shadows[2],
    zIndex: -1,
    animation: "$orbit 25s linear infinite reverse",
  },
  "@keyframes orbit": {
    "0%": {
      transform: "rotate(0deg) translateX(10px) rotate(0deg) scale(1)",
    },
    "50%": {
      transform: "rotate(180deg) translateX(10px) rotate(-180deg) scale(1.2)",
    },
    "100%": {
      transform: "rotate(360deg) translateX(10px) rotate(-360deg) scale(1)",
    },
  },
  border: {
    width: "100%",
    height: 2,
    bottom: 0,
    left: 0,
    position: "absolute",
    zIndex: 5,
    borderRadius: 20,
    boxShadow: theme.shadows[10],
  },
}));
