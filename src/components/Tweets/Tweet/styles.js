import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  tweet_holder: {
    // flexBasis: "50%",
    padding: theme.spacing(1.25),
  },
  tweet: {
    backgroundColor: "#fff",
    padding: theme.spacing(1.5),
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    flexBasis: "100%",
    borderRadius: 10,
    transition: "all 200ms",
    "&:hover": {
      transform: "scale(1.008)",
      boxShadow: theme.shadows[15],
    },
    boxShadow: theme.shadows[10],
  },
  border_primary: {
    borderBottom: `6px solid ${theme.palette.primary.main}`,
  },
  border_secondary: {
    borderBottom: `6px solid ${theme.palette.secondary.main}`,
  },
  tweet_column__1: {
    padding: theme.spacing(1),
  },
  tweet_column__2: {
    padding: theme.spacing(1),
    flexBasis: "100%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "column",
  },
  tweet_avatar: {
    position: "relative",
    height: 40,
    width: 40,
    borderRadius: "50%",
    overflow: "hidden",
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(0.5),
      height: 30,
      width: 30,
    },
  },
  pic_ctn: {
    margin: `${theme.spacing(0.5)}px 0`,
    width: "100%",
    height: 300,
    position: "relative",
    borderRadius: 10,
    overflow: "hidden",
    border: `1px solid #D3D3D3`,
    cursor: "zoom-in",
    [theme.breakpoints.down("xs")]: {
      height: 180,
    },
  },
  pic_src: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "top center",
    zIndex: 1,
    // opacity: 0,
  },
  pic_blur: {
    display: "block",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 0,
    filter: "blur(50px) saturate(250%)",
    transform: "scale(1.1)",
  },
  profile_link: {
    color: theme.palette.text.primary,
  },
  profile_link_primary: {
    "&:focus": {
      color: theme.palette.primary.main,
    },
  },
  profile_link_secondary: {
    "&:focus": {
      color: theme.palette.secondary.main,
    },
  },
  tweet_pic__img: {
    width: "100%",
    height: "",
    objectFit: "cover",
    objectPosition: "center",
  },
  tweet_stats: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginTop: theme.spacing(0.5),
  },
  tweet_desc: {
    margin: `${theme.spacing(0.5)}px 0`,
  },
  tweet_stats__item: {
    marginTop: theme.spacing(0.5),
    marginRight: theme.spacing(2),
    display: "flex",
    "& .ico": {
      marginRight: theme.spacing(0.75),
      // width: "1.6rem",
      // height: "1.6rem",
      fontSize: "1.1rem",
      marginTop: 2,
    },
    "& p": {
      marginTop: theme.spacing(0.2),
      fontSize: ".9rem",
    },
  },
  url_title: {
    width: "100%",
    position: "absolute",
    zIndex: 1,
    left: 0,
    bottom: 0,
    color: "#fff",
    paddingTop: theme.spacing(0.5),
    paddingLeft: theme.spacing(0.8),
    backgroundColor: "#00000080",
    "& svg": {
      width: "1.1rem",
      height: "1.1rem",
      marginRight: ".2rem",
    },
    "& p": {
      display: "inline-flex",
      alignItems: "center",
      whiteSpace: "nowrap",
    },
  },
  media: {
    zIndex: 0,
  },
  handle: {
    fontSize: ".9rem",
    lineHeight: ".9rem",
    marginBottom: theme.spacing(1),
  },
  retweet_icon: {},
  twit_link: {
    paddingTop: 2,
    paddingBottom: 2,
    letterSpacing: 1,
    fontWeight: 700,
    "& svg": {
      marginLeft: theme.spacing(0.7),
    },
  },
  likes_retweets: {
    display: "flex",
  },
  default_img: {
    objectFit: "cover",
    width: "100%",
    maxWidth: "100%",
    position: "relative",
    zIndex: 1,
  },
  img_blur: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    zIndex: 0,
    left: 0,
    backdropFilter: "blur(40px)",
  },
}));
