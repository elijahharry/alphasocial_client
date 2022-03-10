import Image from "next/image";

import Crumbs from "./Crumbs/Crumbs";

import { Container, Typography, makeStyles } from "@material-ui/core";
import useGradients from "@styles/gradients";

const Titles = ({ crumbs, title, img }) => {
  const classes = useStyles();
  const gradients = useGradients();
  return (
    <section
      className={`${classes.section} ${
        img ? classes.padding_img : classes.padding_def
      }`}
    >
      {img && (
        <div className="backdrop" style={{ zIndex: 0 }}>
          <div className={classes.img}>
            <Image
              src={img}
              layout="fill"
              objectPosition="center"
              objectFit="cover"
            />
          </div>
          <span
            className={gradients.primary_darker + " backdrop"}
            style={{ zIndex: 1, opacity: 0.9 }}
          />
        </div>
      )}
      <Container
        maxWidth="lg"
        className={`${classes.container} ${img ? classes.dark : classes.light}`}
      >
        {crumbs && <Crumbs dark={img ? true : false} crumbs={crumbs} />}
        <Typography variant="h2" className={classes.title}>
          {title}
        </Typography>
      </Container>
    </section>
  );
};

export default Titles;

const useStyles = makeStyles((theme) => ({
  section: {
    // backgroundColor: theme.palette.secondary.offwhite,
    // backgroundColor: "rgba(0,0,0,.03)",
    overflow: "hidden",
    position: "relative",
  },
  padding_img: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(20),
  },
  padding_def: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(2),
  },
  container: {
    position: "relative",
    zIndex: 1,
  },
  dark: {
    color: "#fff",
  },
  light: {
    color: theme.palette.text.primary,
  },
  img: {
    position: "relative",
    width: "100%",
    height: "100%",
  },
  title: {
    maxWidth: 800,
  },
}));
