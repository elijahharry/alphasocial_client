import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  nav: {},
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    height: 75,
  },
  brand: {
    // padding: `${theme.spacing(2)}px 0`,
  },
  links: {
    marginRight: theme.spacing(4) * -1,
  },
  link: {
    fontSize: "1.25rem",
    height: 100,
    borderRadius: 0,
    padding: `0px ${theme.spacing(4)}px`,
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
}));
