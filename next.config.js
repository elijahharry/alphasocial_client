module.exports = {
  env: {
    BACKEND: process.env.BACKEND_URL,
    WORDPRESS: process.env.WORDPRESS_URL,
    CONTACT_FORM_7_FORM_ID: process.env.CF7_FORM_ID,
  },
  images: {
    domains: ["pbs.twimg.com", process.env.BACKEND_DOMAIN, "localhost"],
  },
};
