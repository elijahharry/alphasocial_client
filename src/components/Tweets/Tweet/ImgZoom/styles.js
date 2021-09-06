import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  section: {
    position: "fixed",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    zIndex: 50,
    backdropFilter: "blur(10px) brightness(85%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    position: "relative",
    height: "70%",
    width: "70%",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
      height: "90%",
    },
  },
}));