import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScreenSize } from "@context/ScreenSize";
import Image from "next/image";

import { Typography, Chip, SvgIcon, Button } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import FavoriteIcon from "@material-ui/icons/Favorite";
import InfoIcon from "@material-ui/icons/Info";
import useStyles from "./styles";
import ImgZoom from "./ImgZoom/ImgZoom";
import Retweet from "@component/Svgs/Retweet";
import Twitter from "@material-ui/icons/Twitter";

const Tweet = ({ tweet, even, i, col }) => {
  const screen = useScreenSize();
  const classes = useStyles();
  const [loaded, setLoaded] = useState({ avatar: false, media: false });
  const [imgZoom, setImgZoom] = useState(false);

  const [content, setContent] = useState("");

  useEffect(() => {
    let text = "";
    tweet.content.map((t) => {
      const urlRemoved = t.split("http");
      if (urlRemoved[0] !== "") {
        text = text.concat(urlRemoved[0] + " ");
      }
    });
    setContent(text);
  }, [tweet]);

  return (
    <>
      <div
        id={`tweet-${i}-${col}`}
        className={classes.tweet_holder}
        key={tweet?.id + "-tweet-content"}
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
            <Typography
              variant="body2"
              className={classes.tweet_desc}
              dangerouslySetInnerHTML={{ __html: content }}
            />
            {tweet.media && (
              <div className={classes.pic_ctn} onClick={() => setImgZoom(true)}>
                <span
                  className={classes.pic_blur}
                  style={tweet?.media?.blur ? { ...tweet.media.blur } : {}}
                />
                <img
                  src={tweet.media.src}
                  onLoad={() => setLoaded({ ...loaded, ["media"]: true })}
                  className={classes.pic_src}
                  quality={50}
                />
              </div>
            )}
            <div className={classes.tweet_stats}>
              <div className={classes.likes_retweets}>
                <div className={classes.tweet_stats__item}>
                  <FavoriteIcon
                    color={even ? "primary" : "secondary"}
                    className="ico"
                  />
                  <Typography variant="body2">{tweet.favorites}</Typography>
                </div>
                <div className={classes.tweet_stats__item}>
                  <SvgIcon
                    color={!even ? "primary" : "secondary"}
                    className="ico"
                  >
                    <Retweet />
                  </SvgIcon>
                  <Typography variant="body2">{tweet.retweets}</Typography>
                </div>
              </div>
              <Button
                size="small"
                className={classes.twit_link}
                target="_blank"
                href={`https://twitter.com/${tweet.user.handle}/status/${tweet.id}`}
              >
                {screen.width > 435 && "View on"}
                <Twitter
                  color={even ? "primary" : "secondary"}
                  fontSize="small"
                />
              </Button>
            </div>
          </div>
        </div>
      </div>
      {(tweet?.media || tweet?.url) && (
        <ImgZoom
          show={imgZoom}
          setShow={setImgZoom}
          img={tweet?.media ? tweet.media.src : tweet.url.media.src}
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
