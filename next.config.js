/** @type {import('next').NextConfig} */
const withMDX = require('@next/mdx')({
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

const nextConfig = {
  experimental: {
    reactCompiler: true,
  },
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
}

// Combine MDX and Next.js config
module.exports = withMDX(nextConfig)
