import fs from 'fs'
import path from 'path'

export type Post = {
  slug: string
  title: string
  description: string
  date: string
}

export async function getPosts(): Promise<Post[]> {
  const postsDir = path.join(process.cwd(), 'app/posts')
  const entries = fs.readdirSync(postsDir, { withFileTypes: true })
  
  const posts: Post[] = []
  
  for (const entry of entries) {
    if (entry.isDirectory() && !entry.name.startsWith('_')) {
      const postDir = path.join(postsDir, entry.name)
      const mdxFile = path.join(postDir, 'page.mdx')
      
      if (fs.existsSync(mdxFile)) {
        try {
          // Read the MDX file to extract metadata
          const content = fs.readFileSync(mdxFile, 'utf-8')
          const metadata = extractMetadata(content)
          
          if (metadata) {
            posts.push({
              slug: entry.name,
              title: metadata.title || entry.name,
              description: metadata.description || '',
              date: metadata.date || new Date().toISOString().split('T')[0],
            })
          }
        } catch (error) {
          console.warn(`Failed to read metadata from ${mdxFile}:`, error)
        }
      }
    }
  }
  
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

function extractMetadata(content: string) {
  // Look for export const metadata pattern
  const metadataMatch = content.match(/export\s+const\s+metadata\s*=\s*({[\s\S]*?})/m)
  
  if (metadataMatch) {
    try {
      // Simple extraction - in a real app you might want to use a proper parser
      const metadataStr = metadataMatch[1]
      const titleMatch = metadataStr.match(/title:\s*["']([^"']+)["']/)
      const descriptionMatch = metadataStr.match(/description:\s*["']([^"']+)["']/)
      const dateMatch = metadataStr.match(/date:\s*["']([^"']+)["']/)
      
      return {
        title: titleMatch?.[1],
        description: descriptionMatch?.[1],
        date: dateMatch?.[1],
      }
    } catch (error) {
      console.warn('Failed to parse metadata:', error)
    }
  }
  
  return null
} 