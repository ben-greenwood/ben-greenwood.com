/** @type {import('next').NextConfig} */
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
})

const nextConfig = {
  experimental: {
    reactCompiler: true,
  },
  pageExtensions: ['tsx', 'ts', 'mdx'],
}

module.exports = withMDX(nextConfig)
