import Image from "next/image";
import Link from "next/link";
import parse from "html-react-parser";
import StackedImgs from "./StackedImgs/StackedImgs";
import Form from "@component/Form/Form";

import Retweet from "@component/Svgs/Retweet";
import FavoriteIcon from "@material-ui/icons/Favorite";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";

import {
  Button,
  Container,
  Grid,
  Typography,
  SvgIcon,
} from "@material-ui/core";
import useStyles from "./styles";
import useGradients from "@styles/gradients";
import useColors from "@styles/colors";
import Services from "./Services/Services";

const Feature = ({
  overline,
  title,
  desc,
  media,
  top,
  dark,
  normal,
  flipped,
  overlay,
  color,
  centered,
  shadow,
  icons,
  border,
  services,
  id,
  full,
  contact,
  button1,
  button2,
}) => {
  const classes = useStyles();
  const gradients = useGradients();
  const colors = useColors();

  let textClass = colors.secondary;
  let underlineClass = colors.underline_secondary;
  let muiColor = "secondary";
  let spanColor = colors.span_secondary;
  switch (color) {
    case "secondary-light":
      textClass = colors.secondary_light;
      spanColor = colors.span_secondary;
      underlineClass = colors.underline_secondary;
      break;
    case "primary":
      textClass = colors.primary;
      underlineClass = colors.underline_primary;
      muiColor = "primary";
      spanColor = colors.span_primary;
      break;
  }

  return (
    <section
      id={id ? id : ""}
      key={id ? "feature-" + id : "feature"}
      className={`${classes.section} ${top && classes.section_top} ${
        full && classes.section_full
      }`}
    >
      <Container
        maxWidth="lg"
        className={`${classes.container} ${full && classes.con_full}`}
      >
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          className={`${flipped ? classes.flipped : classes.normal} ${
            full && classes.grid_full
          }`}
        >
          <Grid
            item
            xs={12}
            md={centered ? 12 : 6}
            className={`${classes.text_col} ${
              centered ? classes.col_center : classes.col_left
            } ${dark ? classes.dark : classes.light} ${
              flipped ? classes.padding_left : classes.padding_right
            } ${full && classes.text_col_full}`}
          >
            <Typography
              variant="overline"
              gutterBottom
              className={`${classes.text} ${textClass}`}
            >
              {overline}
            </Typography>
            <Typography
              variant={top ? "h2" : "h3"}
              className={`${classes.text} ${underlineClass}`}
            >
              {parse(title)}
            </Typography>
            <Typography
              variant="body1"
              className={`${classes.text} ${
                centered ? classes.text_skinny : classes.text_full
              } ${classes.desc} ${spanColor}`}
            >
              {parse(desc)}
            </Typography>
            <div className={classes.buttons}>
              {button1 && (
                <Link href={button1.link} passHref>
                  <Button
                    variant="contained"
                    color={muiColor}
                    size="large"
                    className={classes.button_1}
                  >
                    {button1?.text}
                  </Button>
                </Link>
              )}
              {button2 && (
                <Link href={button2.link} passHref>
                  <Button variant="outlined" color="inherit" size="large">
                    {button2.text}{" "}
                  </Button>
                </Link>
              )}
            </div>
          </Grid>
          <Grid
            item
            xs={centered ? false : 12}
            md={centered ? false : 6}
            className={`${
              services
                ? classes.service_col
                : contact
                ? classes.contact_col
                : classes.img_col
            }`}
          >
            {media?.stacked && <StackedImgs imgs={media.stacked} />}
            {media?.float && (
              <Image
                src={"/img/" + media.float}
                layout="fill"
                objectFit="contain"
                objectPosition="bottom center"
              />
            )}
            {services && <Services />}
            {icons && (
              <>
                <div
                  className={`${classes.icon} ${classes.icon_1} ${gradients.both_flipped}`}
                >
                  <TwitterIcon />
                </div>
                <div
                  className={`${classes.icon} ${classes.icon_2} ${gradients.both_flipped}`}
                >
                  <InstagramIcon />
                </div>

                <div
                  className={`${classes.icon} ${classes.icon_3} ${gradients.both_flipped}`}
                >
                  <FavoriteIcon />
                </div>
                <div
                  className={`${classes.icon} ${classes.icon_4} ${gradients.both_flipped}`}
                >
                  <SvgIcon fontSize="large">
                    <Retweet />
                  </SvgIcon>
                </div>
              </>
            )}
            {contact && <Form />}
          </Grid>
        </Grid>
        {border && (
          <div className={`${classes.border}`}>
            <div className={`backdrop ${gradients[border]}`} />
          </div>
        )}
      </Container>
      {overlay && (
        <div
          className={`backdrop ${gradients[overlay.color]}`}
          style={{
            zIndex: 1,
            opacity: overlay?.opacity ? overlay.opacity : 0.8,
          }}
        />
      )}
      {media?.background && (
        <div className="backdrop" style={{ zIndex: 0 }}>
          <Image
            src={"/img/" + media.background.src}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            placeholder={media.background?.blur ? "blur" : "empty"}
            blurDataURL={media.background?.blur ? media.background.blur : ""}
          />
        </div>
      )}
      {shadow && <div className={`${classes.shadow} ${gradients.grey}`} />}
    </section>
  );
};

export default Feature;
