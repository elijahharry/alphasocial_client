import axios from "axios";

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
    const sorted = combined.sort((a, b) => {
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
