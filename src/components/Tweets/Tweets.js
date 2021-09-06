import { useState, useEffect } from "react";
import Tweet from "./Tweet/Tweet";
import Account from "./Account/Account";
import Image from "next/image";
import { AnimateSharedLayout } from "framer-motion";

import { Container, Grid, Typography, Chip } from "@material-ui/core";
import { ContactSupportOutlined } from "@material-ui/icons";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import useStyles from "./styles";
import useColors from "@styles/colors";
import useGradients from "@styles/gradients";

const Tweets = ({ tweets, accounts }) => {
  const classes = useStyles();
  const colors = useColors();
  const gradients = useGradients();
  const [filter, setFilter] = useState("");
  const [filteredTweets, setFilteredTweets] = useState(tweets.slice(0, 24));

  useEffect(() => {
    if (filter !== "") {
      const filtered = tweets.filter((tweet) => tweet.user.handle === filter);
      setFilteredTweets(filtered.slice(0, 24));
    } else {
      setFilteredTweets(tweets.slice(0, 24));
    }
  }, [filter]);

  let imgCol = 1;
  let tweetsColumn1 = [];
  let tweetsColumn2 = [];
  filteredTweets.map((tweet, index) => {
    if (tweet.media || tweet.url) {
      if (imgCol === 1) {
        imgCol = 2;
        tweetsColumn1.push(tweet);
      } else if (imgCol === 2) {
        imgCol = 1;
        tweetsColumn2.push(tweet);
      }
    } else if (index % 2 === 0) {
      tweetsColumn1.push(tweet);
    } else if (index % 2 === 1) {
      tweetsColumn2.push(tweet);
    }
  });

  return (
    <section id="tweets" className={classes.tweets_section}>
      <Container maxWidth="lg" className={classes.top_menu}>
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          className={colors.underline_secondary}
        >
          Recent <span>Popular Tweets</span>
        </Typography>
        <Typography variant="body1" align="center">
          Below you'll find some of our more popular tweets from recent memory.
        </Typography>
        <div className={classes.filter_row}>
          <Typography
            variant="body1"
            align="center"
            className={`${classes.filter_text} ${
              filter !== "" && classes.text__filter_on
            }`}
          >
            Click on an account to filter.
          </Typography>
          <Chip
            icon={<HighlightOffIcon />}
            label={"Remove filter".toUpperCase()}
            color="secondary"
            className={`${classes.filter_chip} ${
              filter !== "" && classes.chip__filter_on
            }`}
            onClick={() => setFilter("")}
          />
        </div>
        <div className={classes.accounts}>
          {accounts.map((account) => (
            <Account
              total={accounts.length}
              account={account}
              filter={filter}
              setFilter={setFilter}
            />
          ))}
        </div>
      </Container>
      <Container maxWidth="lg" className={classes.tweets_desktop}>
        <Grid container>
          <Grid item xs={12} md={6}>
            {tweetsColumn1.map((tweet, index) => (
              <Tweet
                tweet={tweet}
                even={index % 2 === 0}
                key={tweet?.id + "-tweet"}
              />
            ))}
          </Grid>
          <Grid item xs={12} md={6}>
            {tweetsColumn2.map((tweet, index) => (
              <Tweet
                tweet={tweet}
                even={index % 2 !== 0}
                key={tweet?.id + "-tweet"}
              />
            ))}
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="lg" className={classes.tweets_mobile}>
        <Grid container>
          <Grid item xs={12} sm={12}>
            {filteredTweets.map((tweet, index) => (
              <Tweet
                tweet={tweet}
                even={index % 2 === 0}
                key={tweet?.id + "-tweet"}
              />
            ))}
          </Grid>
        </Grid>
      </Container>
      <div className={`backdrop`} style={{ zIndex: 0, opacity: 0.9 }}>
        <div className={`backdrop ${gradients.both}`} />
      </div>
      <div
        id="tweets-background"
        className={`${classes.background_img} ${classes.absolute}`}
      />
    </section>
  );
};

const onlyUnique = (value, index, self) => {
  return self.indexOf(value) === index;
};

export default Tweets;
