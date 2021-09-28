import axios from "axios";
import { getPlaiceholder } from "plaiceholder";

const fetchTweets = (id) => axios.get(`${process.env.BACKEND}/tweets?id=${id}`);

export const getTopTweets = async () => {
  try {
    const { data: cokedupoptions } = await fetchTweets("cokedupoptions");
    const { data: thestinkmarket } = await fetchTweets("thestinkmarket");
    const { data: redditinvestors } = await fetchTweets("redditinvestors");
    const { data: watchoutshorts } = await fetchTweets("watchoutshorts");
    const { data: stonkmarketnews } = await fetchTweets("stonkmarketnews");
    const combined = [
      ...cokedupoptions,
      ...thestinkmarket,
      ...redditinvestors,
      ...watchoutshorts,
      ...stonkmarketnews,
    ];
    let promises = [];
    combined.map((tweet) => {
      const promise = new Promise(async (resolve) => {
        if (tweet.media) {
          try {
            const { css, img } = await getPlaiceholder(tweet.media);
            resolve({ ...tweet, media: { blur: css, src: img.src } });
          } catch {
            resolve({ ...tweet });
          }
        } else if (tweet.url) {
          try {
            const { css, img } = await getPlaiceholder(
              `${process.env.BACKEND}${tweet.url.media}`
            );
            resolve({
              ...tweet,
              url: {
                url: tweet.url?.url,
                title: tweet.url?.title,
                media: { blur: css, src: img.src },
              },
            });
          } catch {
            resolve({ ...tweet });
          }
        } else {
          resolve({ ...tweet });
        }
      });
      promises.push(promise);
    });
    const withBlurs = await Promise.all(promises);
    const sorted = withBlurs.sort((a, b) => {
      return b.favorites - a.favorites;
    });
    const accountsRaw = sorted.map((tweet) => tweet.user);
    const accountsDupesRemoved = accountsRaw.filter(
      (account, index, self) =>
        index ===
        self.findIndex(
          (acct) => acct.handle === account.handle && acct.name === account.name
        )
    );
    const accounts = accountsDupesRemoved.sort((a, b) => {
      return b.followers - a.followers;
    });

    return { tweets: sorted, accounts: accounts };
  } catch (error) {
    console.log(error.message);
    return [];
  }
};

// export const getAllTweets = async () => {
//   try {
//     const { data: cokedupoptions } = await fetchTweets("cokedupoptions");
//     const { data: thestinkmarket } = await fetchTweets("thestinkmarket");
//     const { data: redditinvestors } = await fetchTweets("redditinvestors");
//     const { data: watchoutshorts } = await fetchTweets("watchoutshorts");
//     const { data: stonkmarketnews } = await fetchTweets("stonkmarketnews");
//     return {
//       cokedupoptions: cokedupoptions,
//       thestinkmarket: thestinkmarket,
//       redditinvestors: redditinvestors,
//       watchoutshorts: watchoutshorts,
//       stonkmarketnews: stonkmarketnews,
//     };
//   } catch (error) {
//     console.log(error.message);
//     return {};
//   }
// };
