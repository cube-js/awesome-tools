/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://awesome.cube.dev/",
  generateRobotsTxt: true, // (optional)
};
