import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()


const Sitemap = () => { };
const toUrl = (data) =>
    data.slug == 1 ? `<url><loc>${data.url}</loc> <image:image><image:loc>${data.image}</image:loc></image:image><lastmod>${data.last_mod}</lastmod><changefreq>daily</changefreq></url>` : `<url><loc>${data.url}</loc><changefreq>daily</changefreq></url>`;

const createSitemap = (urlList) =>
    `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
    ${urlList.map((data) => toUrl(data)).join("")}
    </urlset>`;

export async function getServerSideProps({ res, req }) {


    var urlList = [{ url: "https://www.savestoday.com" }, { url: "https://www.savestoday.com/about" }, { url: "https://www.savestoday.com/category" }, { url: "https://www.savestoday.com/contact-us" }, { url: "https://www.savestoday.com/cookie-policy" }, { url: "https://www.savestoday.com/faqs" }, { url: "https://www.savestoday.com/privacy-policy" }, { url: "https://www.savestoday.com/stores" }, { url: "https://www.savestoday.com/terms-of-use" }]
    const result = await fetch('https://backend.savestoday.com/stores/')
    const stores = await result.json()
    stores.forEach(element => {
        urlList.push({ url: "https://www.savestoday.com/" + element.slug, last_mod: element.last_mod, slug: 1,image:element.image })
    });

    const resultCat = await fetch('https://backend.savestoday.com/categories/')
    const categories = await resultCat.json()
    categories.forEach(element => {
        urlList.push({ url: "https://www.savestoday.com/category/" + element.slug, slug: 0 })
    });

    const sitemap = createSitemap(urlList);
    res.setHeader("Content-Type", "text/xml");
    res.write(sitemap);
    res.end();
    return { props: { results: { urlList } }, revalidate: 10 }
};


// Default export to prevent Next.js errors
export default function MemorialSitemapIndexPage() { }