module.exports = {
  env: {
    BACKEND: process.env.BACKEND_URL,
  },
  images: {
    domains: ["pbs.twimg.com", process.env.BACKEND_DOMAIN, "localhost"],
  },
};
