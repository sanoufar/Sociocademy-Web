/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

}
module.exports = {
  images: {
    unoptimized: true,
    domains: [
      "links.papareact.com",
      "img.onmanorama.com",
      "lh3.googleusercontent.com",
      "firebasestorage.googleapis.com",
      "i.pinimg.com"
    ]
  }
}

