export interface Post {
  id: string
  published_at: string
  title: string
  slug: string
  html: string
  url: string
  excerpt: string
}

const API_URL = "https://201-created.ghost.io/ghost/api/content"
const API_KEY = process.env.GHOST_API_KEY

export async function getPosts({ limit = "all" }: { limit?: string | number }) {
  const res = await fetch(`${API_URL}/posts/?key=${API_KEY}&limit=${limit}`, {})

  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }

  return res.json()
}

export async function getPost(slug: string) {
  const res = await fetch(`${API_URL}/posts/slug/${slug}/?key=${API_KEY}`)

  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }

  return res.json()
}
