/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https:/vishnuchhabra.me",
  generateRobotsTxt: true,
  exclude: ['/server-sitemap.xml'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    additionalSitemaps: [
      `${process.env.SITE_URL || "https://vishnuchhabra.me"}/sitemap.xml`,
      `${process.env.SITE_URL || "https://vishnuchhabra.me"}/server-sitemap.xml`,
    ],
  },
};
