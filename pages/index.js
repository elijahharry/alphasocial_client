import * as api from "@lib/twitter";
import axios from "axios";

import MainWrap from "@component/MainWrap/MainWrap";
import Feature from "@component/Feature/Feature";
import Tweets from "@component/Tweets/Tweets";
import CaseStudies from "@component/CaseStudies/CaseStudies";
import CTA from "@component/CTA/CTA";

import { Container } from "@material-ui/core";

export default function Index({ tweets, accounts }) {
  console.log(tweets);

  return (
    <MainWrap>
      <Feature
        overline="Social pioneers of finance"
        title="Let's Build <span>Your Audience</span>"
        desc=""
        media={{
          background: {
            src: "socialmedia-people.jpg",
          },
        }}
        top={true}
        dark={true}
        overlay={{ color: "primary_darker", opacity: 0.9 }}
        color="secondary-light"
        centered={true}
        desc="We've built a social media <strong>following of over 400,000</strong> in the <strong>finance space</strong>. We can do the same for your brand."
        shadow={true}
      />
      <CTA />
      <Feature
        media={{}}
        color="primary"
        overline="Service overview"
        title="What <span>We Do</span>"
        desc="Finance branding doesn't have to be boring. We work with financial service companies to incorporate humor and pertinent market information into their social media accounts, helping to build an engaged following."
        // border="bottom"
        flipped={true}
        media={{ float: "people-on-phones.png" }}
        icons={true}
        shadow={true}
      />
      <Feature
        media={{
          stacked: [
            { src: "john.jpg" },
            { src: "stonk.jpg" },
            { src: "alpha-investors.jpg" },
            { src: "eloise.jpg" },
            { src: "volatility-alerts.jpg" },
          ],
        }}
        color="secondary"
        overline="Unmatched in experience"
        title="Our <span>Credentials</span>"
        desc="Between the top 6 accounts we've built from the ground up, we surpass over <strong><span>150 million</span> impressions</strong> per month. Millions of people, who could have their <strong>eyes on your brand</strong>."
        overlay={{ color: "grey", opacity: 1 }}
        shadow={true}
      />
      <CaseStudies />
      <Feature
        color="secondary"
        overline="Unmatched in experience"
        title="Our <span>Credentials</span>"
        desc="Between the top 6 accounts we've built from the ground up, we surpass over <strong><span>150 million</span> impressions</strong> per month. Millions of people, who could have their <strong>eyes on your brand</strong>."
        overlay={{ color: "grey", opacity: 1 }}
        flipped={true}
        shadow={true}
        services={true}
      />
      {tweets.length > 0 && <Tweets tweets={tweets} accounts={accounts} />}
    </MainWrap>
  );
}

export async function getStaticProps() {
  const { tweets: tweets, accounts: accounts } = await api.getTopTweets();
  return {
    revalidate: 1800,
    props: { tweets: tweets, accounts: accounts },
  };
}
