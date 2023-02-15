/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  env: {
    FACEBOOK_URL: process.env.FACEBOOK_URL,
    INSTAGRAM_URL: process.env.INSTAGRAM_URL,
    LINKEDIN_URL: process.env.LINKEDIN_URL
  }

}

module.exports = nextConfig
