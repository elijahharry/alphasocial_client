import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  section: {
    position: "relative",
    zIndex: 5,
    overflow: "hidden",
  },
  container: {
    position: "relative",
    zIndex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
  },
  col_1: {
    paddingRight: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2),
    },
  },
  col_2: {
    paddingLeft: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2),
    },
  },
  casestudy: {
    height: 500,
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 20,
    // border: `1px solid ${theme.palette.primary.dark}`,
    boxShadow: theme.shadows[2],
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    [theme.breakpoints.down("xs")]: {
      height: 600,
    },
  },
  media: {
    position: "relative",
    flexBasis: "45%",
    padding: theme.spacing(4),
    color: "#fff",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    "& img": {
      zIndex: 0,
    },
    [theme.breakpoints.down("xs")]: {
      flexBasis: "40%",
    },
  },
  img_overlay: {
    backdropFilter:
      "contrast(80%) sepia(100%) hue-rotate(180deg) brightness(75%)",
    zIndex: 1,
  },

  text_overlay: {
    position: "relative",
    zIndex: 2,
  },
  //   title: {
  //     position: "relative",
  //     fontSize: "2rem",
  //   },
  title: {
    position: "relative",
    fontWeight: 700,
  },
  content: {
    listStyleType: "none",
    margin: 0,
    padding: theme.spacing(4),
    flexBasis: "55%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    [theme.breakpoints.down("xs")]: {
      flexBasis: "60%",
    },
  },
  content_item: {
    flexBasis: "25%",
  },
  item_start: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingLeft: theme.spacing(2),
    "& svg": {
      width: "1.4rem",
      height: "1.4rem",
      marginRight: theme.spacing(2),
    },
  },
  item_between: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column-reverse",
      alignItems: "flex-start",
      justifyContent: "center",
    },
  },
  border_bottom: {
    borderBottom: `1px solid #e9e9e9`,
  },
  calendar: {
    width: "1.4rem",
    height: "1.4rem",
    marginLeft: theme.spacing(1),
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
      marginRight: theme.spacing(1),
      marginBottom: theme.spacing(0.2),
    },
  },
  text_flex: {
    display: "inline-flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  list_title: {
    fontWeight: 700,
  },
  grey: {
    backgroundColor: "#fafafa",
  },
  item_last: {
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  text: {
    margin: `${theme.spacing(0.8)}px 0`,
  },
  desc: {
    width: "70%",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  case_studies: {
    marginTop: theme.spacing(2),
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
}));
