import Post from "./Post/Post";

import { Container, makeStyles } from "@material-ui/core";
import useGradients from "@styles/gradients";

const Posts = ({ posts }) => {
  const classes = useStyles();
  const gradients = useGradients();

  return (
    <section id="posts" className={`${classes.section}`}>
      <Container maxWidth="lg">
        <div className={classes.posts}>
          {posts.map((post, i) => (
            <Post post={post} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Posts;

const useStyles = makeStyles((theme) => ({
  section: {
    backgroundColor: theme.palette.secondary.offwhite,
    // padding: `${theme.spacing(2)}px 0`,
    paddingBottom: theme.spacing(6),
    // overflow: "hidden",
  },
  posts: {
    marginLeft: theme.spacing(2) * -1,
    width: `calc(100% + ${theme.spacing(4)}px)`,
    display: "flex",
    alignItems: "stretch",
    justifyContent: "flex-start",
    flexWrap: "wrap",
  },
}));
