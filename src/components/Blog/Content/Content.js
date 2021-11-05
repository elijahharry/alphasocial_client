import { Container, makeStyles } from "@material-ui/core";

const Content = ({ content, handle }) => {
  const classes = useStyles();
  return (
    <article key={`${handle}-articles`} id="read" className={classes.article}>
      <Container maxWidth="lg" className={classes.container}>
        <div
          className={classes.content}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </Container>
    </article>
  );
};

export default Content;

const useStyles = makeStyles((theme) => ({
  article: {
    position: "relative",
    backgroundColor: theme.palette.primary.offwhite,
  },
  content: {
    backgroundColor: "#fff",
    padding: `${theme.spacing(3)}px ${theme.spacing(4)}px`,
    width: `calc(100% + ${theme.spacing(4)}px)`,
    position: "relative",
    left: theme.spacing(4) * -1,
    top: theme.spacing(14) * -1,
    borderRadius: 20,
    boxShadow: theme.shadows[4],
  },
  container: {
    "& p": {
      ...theme.typography.body1,
      margin: `${theme.spacing(0.8)}px 0`,
    },
    "& h1": {
      ...theme.typography.h4,
      margin: `${theme.spacing(1.4)}px 0`,
      fontWeight: 900,
    },
    "& h2": {
      ...theme.typography.h4,
      margin: `${theme.spacing(1.3)}px 0`,
      fontWeight: 900,
    },
    "& h3": {
      ...theme.typography.h4,
      margin: `${theme.spacing(1.2)}px 0`,
      fontWeight: 900,
    },
    "& h4": {
      ...theme.typography.h4,
      margin: `${theme.spacing(1.1)}px 0`,
    },
    "& h5": {
      ...theme.typography.h5,
      margin: `${theme.spacing(1)}px 0`,
    },
    "& h6": {
      ...theme.typography.h6,
      margin: `${theme.spacing(0.9)}px 0`,
    },
    "& figure": {
      marginBlock: 0,
      marginInline: 0,
      padding: `${theme.spacing(3)}px 0`,
      pointerEvents: "none",
    },
    "& img": {
      borderRadius: 5,
      pointerEvents: "none",
      width: "100%",
      objectFit: "contain",
      height: "auto",
      maxHeight: 500,
    },
  },
}));
