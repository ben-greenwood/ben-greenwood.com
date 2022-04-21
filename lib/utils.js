export const fetcher = (url) =>
  fetch(url).then((res) => {
    if (res.ok) {
      return res.json()
    } else {
      throw new Error(`Error fetching data from ${url}: ${res.status}`)
    }
  })
