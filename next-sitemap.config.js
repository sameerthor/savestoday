/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://www.anddeals.com',
    generateRobotsTxt: false, // (optional)
    generateIndexSitemap: false,
    transform: async (config, path) => {
        return {
            loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
            changefreq: "daily",
            lastmod: config.autoLastmod ? new Date().toISOString().split('T')[0]+"T00:00:00-05:00" : undefined,
        }
    }
}