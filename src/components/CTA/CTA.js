import Link from "next/link";
import { useScreenSize } from "@context/ScreenSize";

import { Button, Container, Typography } from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import useGradients from "@styles/gradients";
import useStyles from "./styles";

const CTA = ({ text, link, remove_at }) => {
  const classes = useStyles();
  const gradients = useGradients();
  const screen = useScreenSize();
  return (
    <>
      {screen.width > (remove_at ? remove_at : 900) && (
        <Link href={link} passHref>
          <a>
            <div className={`${classes.section}`}>
              <Container maxWidth="lg" className={classes.cta_content}>
                <div>
                  {/* <Typography variant="overline">Best in the industry</Typography> */}
                  <Typography variant="h6" className={classes.text}>
                    {text}
                  </Typography>
                </div>
                <Button
                  variant="filled"
                  color="inherit"
                  className={classes.button}
                >
                  <ArrowForwardIosIcon fontSize="small" />
                </Button>
              </Container>
              <div
                className={`${gradients.rainbow_dark} ${classes.gradient}`}
              />
            </div>
          </a>
        </Link>
      )}
    </>
  );
};

export default CTA;
