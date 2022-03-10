import Image from "next/image";
import Link from "next/link";

import Open from "@component/Svgs/Open";
import ShareIcon from "@material-ui/icons/Share";
import DateRangeIcon from "@material-ui/icons/DateRange";

import { Typography, makeStyles, SvgIcon, Button } from "@material-ui/core";
import useGradients from "@styles/gradients";

const Post = ({ post, index }) => {
  const classes = useStyles();
  const gradients = useGradients();
  console.log(post);

  const { author, date, slug, title, excerpt, featuredImage } = post;
  const { avatar, firstName, lastName } = author.node;
  const image = featuredImage?.node?.sourceUrl
    ? featuredImage.node.sourceUrl
    : false;

  return (
    <Link href={`/blog/${slug}`} passHref>
      <a className={classes.a}>
        <figure>
          {image && (
            <div className="post-img">
              <Image
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                src={image}
              />
            </div>
          )}
          <figcaption>
            <Typography variant="h6" gutterBottom>
              {title}
            </Typography>
            <Typography variant="body2">
              <span dangerouslySetInnerHTML={{ __html: excerpt }} />{" "}
              <Button
                color="primary"
                size="small"
                className={classes.read_more}
              >
                Read more
              </Button>
            </Typography>
            <div className={classes.bar}>
              <span className={classes.author}>
                <div className={classes.avatar}>
                  <Image src={avatar.url} layout="fill" />
                </div>
                <Typography variant="body2">
                  {firstName} {lastName}
                </Typography>
              </span>
              <div className={classes.date}>
                <DateRangeIcon /> {date}
              </div>
            </div>
          </figcaption>
        </figure>
        {index === 0 && (
          <span
            className={`${classes.new} ${gradients.both_flipped} new-badge`}
          >
            New!
          </span>
        )}
      </a>
    </Link>
  );
};

export default Post;

const useStyles = makeStyles((theme) => ({
  a: {
    flexBasis: "33.33%",
    minHeight: 400,
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    position: "relative",
    color: theme.palette.text.primary,
    [theme.breakpoints.down("lg")]: {
      flexBasis: "50%",
    },
    [theme.breakpoints.down("sm")]: {
      flexBasis: "100%",
    },
    "& figure": {
      boxShadow: theme.shadows[2],
      backgroundColor: "#fff",
      position: "relative",
      overflow: "hidden",
      borderRadius: 30,
      marginBlock: 0,
      marginInline: 0,
      transition: "all 80ms",
      //   border: `1px solid #d3d3d3`,
      "&:hover": {
        // boxShadow: theme.shadows[24],
        boxShadow: theme.shadows[3],
        transform: "scale(1.01)",
        "& .new-badge": {
          transform: "scale(.2) !important",
        },
      },
      "& .post-img": {
        height: 230,
        width: "100%",
        position: "relative",
        // borderRadius: 20,
        overflow: "hidden",
        zIndex: 0,
      },
      "& figcaption": {
        padding: theme.spacing(2.5),
        paddingTop: theme.spacing(2),
        "& h6": {
          fontWeight: 700,
        },
      },
    },
  },
  avatar: {
    borderRadius: "50%",
    position: "relative",
    width: 40,
    height: 40,
    overflow: "hidden",
  },
  bar: {
    marginTop: theme.spacing(2),
    borderTop: `1px solid #d3d3d3`,
    paddingTop: theme.spacing(2),
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  author: {
    display: "flex",
    alignItems: "center",
    "& p": {
      marginLeft: theme.spacing(0.8),
    },
  },
  new: {
    ...theme.typography.overline,
    position: "absolute",
    top: theme.spacing(1),
    right: theme.spacing(1),
    zIndex: 3,
    color: "#fff",
    padding: `${theme.spacing(0.5)}px ${theme.spacing(1)}px`,
    boxShadow: theme.shadows[8],
    width: 76,
    height: 76,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    // opacity: 0.95,
    animation: "$bubble 20s linear infinite",
  },
  "@keyframes bubble": {
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
  date: {
    display: "flex",
    alignItems: "center",
    fontSize: ".9rem",
    opacity: 0.75,
    "& svg": {
      opacity: 0.8,
      width: 20,
      height: 20,
      marginRight: theme.spacing(0.8),
    },
  },
  read_more: {
    padding: `0 5px`,
    marginBottom: 3,
    "& span": {
      letterSpacing: 0.5,
      fontWeight: 400,
    },
  },
}));
