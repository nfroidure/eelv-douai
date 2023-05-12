/** @type {import('next').NextConfig} */
const buildPrefix = process.env.NODE_ENV === "production" ? "" : "";
const baseURL =
  process.env.NODE_ENV === "production"
    ? "https://eelv-douaisis.fr"
    : "http://eelv-douaisis.localhost:3000";

export default {
  output: 'export',
  trailingSlash: false,
  distDir: 'out',
  reactStrictMode: true,
  publicRuntimeConfig: {
    environment: process.env.NODE_ENV,
    buildPrefix,
    baseURL,
  },
  assetPrefix: process.env.NODE_ENV === "production" ? "" : "",
  basePath: process.env.NODE_ENV === "production" ? "" : "",
};
