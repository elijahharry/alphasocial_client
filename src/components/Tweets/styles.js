import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  background_img: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
    zIndex: -1,
    left: 0,
    backgroundImage: `url("/img/social-media.jpg")`,
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    backgroundPosition: "center",
    top: 0,
    position: "absolute",
  },
  absolute: {},
  fixed: {
    position: "fixed",
  },
  tweets_section: {
    padding: `${theme.spacing(5)}px 0`,
    position: "relative",
    overflow: "hidden",
    "& .MuiGrid-item": {
      position: "relative",
    },
  },
  tweets_desktop: {
    position: "relative",
    zIndex: 1,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  tweets_mobile: {
    position: "relative",
    zIndex: 1,
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  top_menu: {
    position: "relative",
    zIndex: 1,
    color: "#fff",
  },
  accounts: {
    display: "flex",
    margin: `${theme.spacing(3)}px 0`,
    width: "100%",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      flexWrap: "wrap",
    },
  },
  filter_row: {
    height: 32,
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  filter_chip: {
    marginTop: theme.spacing(1),
    position: "absolute",
    transition: "transform 300ms",
    transform: "scale(0)",
  },
  chip__filter_on: {
    transform: "scale(1)",
  },

  filter_text: {
    transition: "transform 300ms",
    position: "absolute",
    transform: "scale(1)",
  },
  text__filter_on: {
    transform: "scale(0)",
  },
}));
