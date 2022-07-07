const { withContentlayer } = require("next-contentlayer");

module.exports = withContentlayer({
  swcMinify: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
});
