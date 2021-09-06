import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  section: {
    padding: `${theme.spacing(2)}px 0`,
    color: "#fff",
    position: "relative",
    overflow: "hidden",
    // borderTop: `2px solid #fff`,
    // borderBottom: `2px solid #fff`,
    // animation: "$border 3s linear infinite",

    "&:hover": {
      "& h6": {
        letterSpacing: ".07rem",
      },
    },
  },
  cta_content: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
    zIndex: 1,
  },
  text: {
    letterSpacing: ".05rem",
    fontWeight: 600,
    transition: "all 300ms",
  },
  "@keyframes slide": {
    "0%": {
      transform: "translateX(0)",
    },
    "50%": {
      transform: "translateX(-700vw)",
    },
    "100%": {
      transform: "translateX(0)",
    },
  },
  gradient: {
    width: "800vw",
    height: "100%",
    position: "absolute",
    zIndex: 0,
    top: 0,
    left: 0,
    animation: "$slide 30s linear infinite",
  },
  "@keyframes border": {
    "0%": {
      outline: `4px solid #fff`,
    },
    "25%": {
      outline: `4px solid ${theme.palette.secondary.main}`,
    },
    "50%": {
      outline: `4px solid ${theme.palette.primary.main}`,
    },
    "100%": {
      outline: `4px solid #fff`,
    },
  },
}));
