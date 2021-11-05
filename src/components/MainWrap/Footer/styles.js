import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  footer: {
    // backgroundColor: "#1a1110",
    color: "#fff",
    // borderTop: `2px solid #fff`,
    // backgroundColor: "#ededed",
    // backgroundColor: theme.palette.secondary.offwhite,
    padding: `${theme.spacing(2)}px 0`,
    background: theme.palette.primary,
    background: `linear-gradient(250deg, ${theme.palette.secondary.main} 0%, ${theme.palette.primary.dark} 100%)`,
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    filter: "grayscale(100%) brightness(500%)",
    width: 160,
  },
}));
