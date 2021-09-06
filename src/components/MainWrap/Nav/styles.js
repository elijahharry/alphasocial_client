import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  nav: {
    position: "relative",
    zIndex: 30,
    backgroundColor: "#fff",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: 100,
  },
  logo: {
    height: 70,
    [theme.breakpoints.down("sm")]: {
      height: 60,
    },
  },
  brand: {
    // padding: `${theme.spacing(2)}px 0`,
  },
  links: {
    marginRight: theme.spacing(4) * -1,
  },
  link: {
    fontSize: "1.1rem",
    height: 100,
    borderRadius: 0,
    padding: `0px ${theme.spacing(2)}px`,
  },
  link_primary: {
    color: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: theme.palette.primary.offwhite,
    },
  },
  link_secondary: {
    color: theme.palette.secondary.main,
    "&:hover": {
      backgroundColor: theme.palette.secondary.offwhite,
    },
  },
  mobile: {
    position: "fixed",
    zIndex: 31,
    top: 0,
    height: "100%",
    width: "100%",
    backdropFilter: "blur(20px)",
  },
  mobile_container: {
    backgroundColor: "#fff",
    padding: theme.spacing(5),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  mobile_links: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    marginTop: theme.spacing(2),
  },
  mobile_link: {
    fontSize: "1rem",
    height: 50,
    borderRadius: 0,
    padding: `0px ${theme.spacing(0.5)}px`,
    margin: theme.spacing(0.5),
  },
}));
