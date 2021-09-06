import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Typography, Chip, SvgIcon, Button } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import FavoriteIcon from "@material-ui/icons/Favorite";
import InfoIcon from "@material-ui/icons/Info";
import useStyles from "./styles";
import ImgZoom from "./ImgZoom/ImgZoom";
import Retweet from "@component/Svgs/Retweet";

const Tweet = ({ tweet, even }) => {
  const classes = useStyles();
  const [loaded, setLoaded] = useState({ avatar: false, media: false });
  const [imgZoom, setImgZoom] = useState(false);

  const [content, setContent] = useState({ text: "", shortened: false });

  useEffect(() => {
    let text = "";
    let shortened = false;
    tweet.content.map((t) => {
      const isShortened = t.includes("…");
      const urlRemoved = t.split("http");
      if (urlRemoved[0] !== "") {
        text = text.concat(urlRemoved[0] + " ");
      }
      isShortened && (shortened = true);
    });
    setContent({ text: text, shortened: shortened });
  }, [tweet]);

  return (
    <>
      <div
        className={classes.tweet_holder}
        // key={tweet?.id + "-tweet"}
        key={tweet.content[0] + "-tweet"}
      >
        <div
          className={`${classes.tweet} ${
            even ? classes.border_primary : classes.border_secondary
          }`}
        >
          <div className={classes.tweet_column__1}>
            <a
              href={`https://twitter.com/${tweet.user.handle}`}
              target="_blank"
            >
              <div className={classes.tweet_avatar}>
                <Image
                  src={tweet.user.pic}
                  layout="fill"
                  onLoad={() => setLoaded({ ...loaded, ["avatar"]: true })}
                />
                {!loaded.avatar && (
                  <div className="skeleton" style={{ zIndex: 2 }} />
                )}
              </div>
            </a>
          </div>
          <div className={classes.tweet_column__2}>
            <a
              href={`https://twitter.com/${tweet.user.handle}`}
              target="_blank"
              className={`${classes.profile_link} ${
                even
                  ? classes.profile_link_primary
                  : classes.profile_link_secondary
              }`}
            >
              <Typography variant="body2">
                <strong>{tweet.user.name}</strong>
              </Typography>
              <Typography variant="body2" className={classes.handle}>
                @{tweet.user.handle}
              </Typography>
            </a>
            <Typography variant="body2" className={classes.tweet_desc}>
              {content.text}
              {content.shortened && (
                <Button size="small" className={classes.full_link}>
                  View full
                </Button>
              )}
            </Typography>
            {(tweet.media || tweet.url) && (
              <div
                className={classes.tweet_pic}
                onClick={() => setImgZoom(true)}
              >
                <Image
                  src={
                    tweet.media
                      ? tweet.media
                      : `${process.env.BACKEND}${tweet.url.media}`
                  }
                  layout="fill"
                  objectFit="cover"
                  objectPosition="top"
                  onLoad={() => setLoaded({ ...loaded, ["media"]: true })}
                />
                {!loaded.media && (
                  <div className="skeleton" style={{ zIndex: 2 }} />
                )}
              </div>
            )}
            {/* {!tweet.media && tweet.url && (
              <div
                className={classes.tweet_pic}
                onClick={() => setImgZoom(true)}
              >
                <Image
                  src={`${process.env.BACKEND}${tweet.url.media}`}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  onLoad={() => setLoaded({ ...loaded, ["media"]: true })}
                />
                {!loaded.media && (
                  <div className="skeleton" style={{ zIndex: 2 }} />
                )}
                <div className={classes.url_title}>
                  <Typography variant="body2">
                    <InfoIcon />
                    {tweet.url.title}
                  </Typography>
                </div>
              </div>
            )} */}
            <div className={classes.tweet_stats}>
              <div className={classes.tweet_stats__item}>
                <FavoriteIcon color={even ? "primary" : "secondary"} />
                <Typography variant="body1">{tweet.favorites}</Typography>
              </div>
              <div className={classes.tweet_stats__item}>
                <SvgIcon
                  // color={even ? "primary" : "secondary"}
                  className={classes.retweet_icon}
                >
                  <Retweet />
                </SvgIcon>
                <Typography variant="body1">{tweet.retweets}</Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
      {(tweet?.media || tweet?.url) && (
        <ImgZoom
          show={imgZoom}
          setShow={setImgZoom}
          img={
            tweet?.media
              ? tweet.media
              : `${process.env.BACKEND}${tweet.url.media}`
          }
        />
      )}
    </>
  );
};

const snip = (text, length) => {
  if (text.length > length) {
    const snipped = text.slice(0, length - 1).trim() + "...";
    return snipped;
  } else {
    return text;
  }
};

export default Tweet;
