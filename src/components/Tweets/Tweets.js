import { useState, useEffect } from "react";
import Tweet from "./Tweet/Tweet";
import Account from "./Account/Account";
import { useScreenSize } from "@context/ScreenSize";
import useInterval from "react-useinterval";

import { Container, Grid, Typography, Chip } from "@material-ui/core";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { ContactSupportOutlined } from "@material-ui/icons";
import useStyles from "./styles";
import useColors from "@styles/colors";
import useGradients from "@styles/gradients";

const Tweets = ({ tweets: raw_tweets, accounts }) => {
  const classes = useStyles();
  const colors = useColors();
  const gradients = useGradients();
  const screen = useScreenSize();
  const [filter, setFilter] = useState("");
  const [tweets, setTweets] = useState(raw_tweets.slice(0, 30));

  useEffect(() => {
    if (filter !== "") {
      const filtered = raw_tweets.filter(
        (tweet) => tweet.user.handle === filter
      );
      setTweets(filtered.slice(0, 30));
    } else {
      setTweets(raw_tweets.slice(0, 30));
    }
  }, [filter]);

  let imgCol = 1;
  let tweetsColumn1 = [];
  let tweetsColumn2 = [];
  tweets.map((tweet, index) => {
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

  const [columns, setColumns] = useState({ a: [], b: [] });
  const [moved, setMoved] = useState(0);
  useEffect(() => {
    const col1 = [];
    const col2 = [];
    let imgCol = 1;
    tweets.forEach((tweet, i) => {
      if (tweet.media) {
        if (imgCol === 1) {
          imgCol = 2;
          col1.push(tweet);
        } else if (imgCol === 2) {
          imgCol = 1;
          col2.push(tweet);
        }
      } else if (i % 2 === 0) {
        col1.push(tweet);
      } else if (i % 2 === 1) {
        col2.push(tweet);
      }
    });
    setColumns({ a: col1, b: col2 });
    setMoved(0);
  }, [tweets, screen]);

  useInterval(
    () => {
      if (moved < 5) {
        const col1 = columns.a.slice();
        const col2 = columns.b.slice();
        if (typeof window !== undefined) {
          const col1El = document.getElementById("tweets-a");
          const col2El = document.getElementById("tweets-b");
          const col1LastChild = document.getElementById(
            `tweet-${col1.length}-a`
          );
          const col2LastChild = document.getElementById(
            `tweet-${col2.length}-b`
          );
          if (col1El && col2El && col1LastChild && col2LastChild) {
            const { height: height1 } = col1El.getBoundingClientRect();
            const { height: height2 } = col2El.getBoundingClientRect();
            const { height: childHeight1 } =
              col1LastChild.getBoundingClientRect();
            const { height: childHeight2 } =
              col2LastChild.getBoundingClientRect();
            if (height1 - height2 > childHeight1) {
              col2.push(col1[col1.length - 1]);
              col1.pop();
            } else if (height2 - height1 > childHeight2) {
              col1.push(col2[col2.length - 1]);
              col2.pop();
            }
          }
        }
        setColumns({ a: col1, b: col2 });
        setMoved(moved + 1);
      }
    },
    moved < 5 ? 50 : null
  );

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

      <Container maxWidth="lg" className={classes.tweets}>
        <div className={classes.column} id="tweets-a">
          {screen.width > 960
            ? columns.a.map((tweet, index) => (
                <Tweet
                  tweet={tweet}
                  even={index % 2 === 0}
                  key={tweet?.id + "-tweet"}
                  i={index + 1}
                  col="a"
                />
              ))
            : tweets.map((tweet, index) => (
                <Tweet
                  tweet={tweet}
                  even={index % 2 === 0}
                  key={tweet?.id + "-tweet"}
                  i={index + 1}
                  col="a"
                />
              ))}
        </div>
        {screen.width > 960 && (
          <div className={classes.column} id="tweets-b">
            {columns.b.map((tweet, index) => (
              <Tweet
                tweet={tweet}
                even={index % 2 !== 0}
                key={tweet?.id + "-tweet"}
                i={index + 1}
                col="b"
              />
            ))}
          </div>
        )}
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
