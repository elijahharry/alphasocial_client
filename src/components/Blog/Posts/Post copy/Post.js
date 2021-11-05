import Image from "next/image";
import Link from "next/link";

import { Typography, makeStyles } from "@material-ui/core";
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
            <Typography variant="body2">{excerpt}</Typography>
            <div className={classes.bar}>
              <span className={classes.author}>
                <div className={classes.avatar}>
                  <Image src={avatar.url} layout="fill" />
                </div>
                <Typography variant="body2">
                  {firstName} {lastName}
                </Typography>
              </span>
              <Typography variant="body2">{date}</Typography>
            </div>
          </figcaption>
          {index === 0 && (
            <span className={`${classes.new} ${gradients.both_flipped}`}>
              New!
            </span>
          )}
        </figure>
      </a>
    </Link>
  );
};

export default Post;

const useStyles = makeStyles((theme) => ({
  a: {
    flexBasis: "50%",
    minHeight: 400,
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    color: theme.palette.text.primary,
    "& figure": {
      boxShadow: theme.shadows[24],
      backgroundColor: "#fff",
      position: "relative",
      "& .post-img": {
        height: 320,
        width: "100%",
        position: "relative",
        // borderRadius: 20,
        overflow: "hidden",
        zIndex: 0,
      },
      "& figcaption": {
        padding: theme.spacing(1),
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
    paddingTop: theme.spacing(1),
    // borderTop: `1px solid ${theme.palette.text.primary}`,
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
    top: theme.spacing(-1.5),
    right: theme.spacing(-1.5),
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
}));
