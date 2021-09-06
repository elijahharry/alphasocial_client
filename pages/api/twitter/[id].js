import { TwitterClient } from "twitter-api-client";
import axios from "axios";

const twitterClient = new TwitterClient({
  apiKey: process.env.TWITTER_API,
  apiSecret: process.env.TWITTER_SECRET,
  accessToken: process.env.TWITTER_ACCESS,
  accessTokenSecret: process.env.TWITTER_ACCESS_SECRET,
});

export default async function handler(req, res) {
  const { id } = req.query;
  const { data } = await axios.get(`${process.env.BACKEND}/tweets?id=${id}`);
  res.status(200).json({ data });
}
