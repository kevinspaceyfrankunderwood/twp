const path = require('path')
const fs = require('fs')
const sm = require('sitemap')

const OUTPUT_FILE = path.resolve(__dirname, '..', '..', 'public', 'sitemap.xml')

const sitemap = sm.createSitemap({
  hostname: 'https://thewildflowerprojectmn.org',
  cacheTime: 600000, //600 sec (10 min) cache purge period
  urls: [
    { url: '/', changefreq: 'weekly', priority: 1 },
    { url: '/mission/', changefreq: 'weekly', priority: 0.5 },
    { url: '/partnerships/', changefreq: 'weekly', priority: 0.5 },
    { url: '/ourteam/', changefreq: 'weekly', priority: 0.5 },
    { url: '/gardenmap/', changefreq: 'weekly', priority: 0.5 },
    { url: '/login/', changefreq: 'weekly', priority: 0.5 },
    { url: '/events/', changefreq: 'weekly', priority: 0.5 },
    { url: '/submitasite/', changefreq: 'weekly', priority: 0.5 },
    { url: '/resources/', changefreq: 'weekly', priority: 0.5 },
    { url: '/register/', changefreq: 'weekly', priority: 0.5 }
  ]
})

fs.writeFileSync(OUTPUT_FILE, sitemap.toString())

console.log(`Sitemap written at ${OUTPUT_FILE}`)
