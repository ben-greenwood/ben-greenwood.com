export default async function sitemap() {
  const routes = ["", "/bookshelf", "/tools"].map((route) => ({
    url: `https://beanacre.xyz${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }))

  return [...routes]
}
