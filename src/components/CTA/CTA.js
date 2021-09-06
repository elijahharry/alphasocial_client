import { Button, Container, Typography } from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import useGradients from "@styles/gradients";
import useStyles from "./styles";

const CTA = () => {
  const classes = useStyles();
  const gradients = useGradients();
  return (
    <section className={`${classes.section}`}>
      <Container maxWidth="lg" className={classes.cta_content}>
        <div>
          {/* <Typography variant="overline">Best in the industry</Typography> */}
          <Typography variant="h6" className={classes.text}>
            No other agency with more experience creating humorous and
            informative finance content.
          </Typography>
        </div>
        <Button variant="filled" color="inherit" className={classes.button}>
          <ArrowForwardIosIcon fontSize="small" />
        </Button>
      </Container>
      <div className={`${gradients.rainbow_dark} ${classes.gradient}`} />
    </section>
  );
};

export default CTA;
