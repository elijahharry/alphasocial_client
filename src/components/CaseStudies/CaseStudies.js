import Image from "next/image";

import { Container, Grid, Typography } from "@material-ui/core";
import EventNoteIcon from "@material-ui/icons/EventNote";
import VisibilityIcon from "@material-ui/icons/Visibility";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import useStyles from "./styles";
import useGradients from "@styles/gradients";
import useColors from "@styles/colors";

const CaseStudies = () => {
  const classes = useStyles();
  const gradients = useGradients();
  const colors = useColors();
  return (
    <section className={`padding ${classes.section}`}>
      <Container maxWidth="lg" className={classes.container}>
        <Typography
          variant="overline"
          align="center"
          color="primary"
          className={`${classes.text}`}
        >
          Proven track record
        </Typography>
        <Typography
          variant="h3"
          align="center"
          className={`${colors.underline_primary} ${classes.text}`}
        >
          Client <span>Success</span>
        </Typography>
        <Typography
          variant="body1"
          align="center"
          className={`${classes.text} ${classes.desc} ${colors.span_primary}`}
        >
          We find the <strong>right voice and style</strong> for our clients,
          then work to build them a
          <strong>
            <span> loyal, engaged fanbase</span>
          </strong>
          . All of our clients normally see considerable results within the
          first month.
        </Typography>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          className={classes.case_studies}
        >
          <Grid item xs={12} md={6} className={classes.col_1}>
            <div className={classes.casestudy}>
              <div className={classes.media}>
                <Image src="/img/trade.jpg" layout="fill" objectFit="cover" />
                <div className={classes.text_overlay}>
                  <Typography variant="overline" className={classes.title}>
                    Case study A
                  </Typography>
                  <Typography variant="h4" className={classes.title}>
                    Trading Software
                  </Typography>
                </div>
                <div className={`backdrop ${classes.img_overlay}`}>
                  <div
                    className={`backdrop ${gradients.both_flipped}`}
                    style={{ opacity: 0.7 }}
                  />
                </div>
              </div>
              <ul className={classes.content}>
                <li
                  className={`${classes.content_item} ${classes.item_between} ${classes.border_bottom}`}
                >
                  <Typography variant="body1" className={classes.list_title}>
                    Achieved within 1 month:
                  </Typography>
                  <EventNoteIcon className={classes.calendar} color="primary" />
                </li>
                <li
                  className={`${classes.content_item} ${classes.item_start} ${classes.border_bottom} ${classes.grey}`}
                >
                  <GroupAddIcon color="secondary" />
                  <Typography variant="body2">
                    Added over 8,000 Twitter followers
                  </Typography>
                </li>
                <li
                  className={`${classes.content_item} ${classes.item_start} ${classes.border_bottom}`}
                >
                  <VisibilityIcon color="secondary" />
                  <Typography variant="body2">
                    Over 5 million Tweet impressions
                  </Typography>
                </li>
                <li
                  className={`${classes.content_item} ${classes.item_start} ${classes.grey} ${classes.item_last} ${classes.border_bottom}`}
                >
                  <MonetizationOnIcon color="secondary" />
                  <Typography variant="body2">
                    102 new paying customers @ $50/mo
                  </Typography>
                </li>
              </ul>
            </div>
          </Grid>
          <Grid item xs={12} md={6} className={classes.col_2}>
            <div className={classes.casestudy}>
              <div className={classes.media}>
                <Image src="/img/finance.jpg" layout="fill" objectFit="cover" />
                <div className={classes.text_overlay}>
                  <Typography variant="overline" className={classes.title}>
                    Case study B
                  </Typography>
                  <Typography variant="h4" className={`${classes.title}`}>
                    <span>Finance Newsletter</span>
                  </Typography>
                </div>
                <div className={`backdrop ${classes.img_overlay}`}>
                  <div
                    className={`backdrop ${gradients.both_flipped}`}
                    style={{ opacity: 0.7 }}
                  />
                </div>
              </div>
              <ul className={classes.content}>
                <li
                  className={`${classes.content_item} ${classes.item_between} ${classes.border_bottom}`}
                >
                  <Typography variant="body1" className={classes.list_title}>
                    Achieved within 5 months:
                  </Typography>
                  <div className={classes.calendars}>
                    <EventNoteIcon
                      className={classes.calendar}
                      color="primary"
                    />
                    <EventNoteIcon className={classes.calendar} />
                    <EventNoteIcon
                      className={classes.calendar}
                      color="primary"
                    />
                    <EventNoteIcon className={classes.calendar} />
                    <EventNoteIcon
                      className={classes.calendar}
                      color="primary"
                    />
                  </div>
                </li>
                <li
                  className={`${classes.content_item} ${classes.item_start} ${classes.border_bottom} ${classes.grey}`}
                >
                  <GroupAddIcon color="secondary" />
                  <Typography variant="body2">
                    19,000 new subscribers on free email list
                  </Typography>
                </li>
                <li
                  className={`${classes.content_item} ${classes.item_start} ${classes.border_bottom}`}
                >
                  <VisibilityIcon color="secondary" />
                  <Typography variant="body2">
                    Added over 194,000 website pageviews
                  </Typography>
                </li>
                <li
                  className={`${classes.content_item} ${classes.item_start} ${classes.grey} ${classes.border_bottom} ${classes.item_last}`}
                >
                  <MonetizationOnIcon color="secondary" />
                  <Typography variant="body2">
                    497 new paying subscribers @ $10/mo
                  </Typography>
                </li>
              </ul>
            </div>
          </Grid>
        </Grid>
      </Container>
      <div className={`backdrop`} style={{ zIndex: 0, opacity: 0.9 }} />
    </section>
  );
};

export default CaseStudies;
