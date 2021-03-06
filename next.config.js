const withOptimizedImages = require("next-optimized-images");
const NODE_ENV = process.env.NODE_ENV || "production";
const buildPrefix = NODE_ENV === "production" ? "" : "";
const baseURL =
  NODE_ENV === "production"
    ? "https://eelv-douaisis.fr"
    : "http://localhost:3000";

module.exports = withOptimizedImages({
  publicRuntimeConfig: {
    environment: NODE_ENV,
    buildPrefix,
    baseURL,
  },
  pageExtensions: ["js", "jsx", "mdx"],
  // Needed while using the temporary url
  assetPrefix: buildPrefix,
  webpack: function (config) {
    return Object.assign({}, config, {
      node: Object.assign({}, config.node || {}, { fs: "empty" }),
      plugins: [
        ...(config.plugins || []),
      ],
    });
  },
});
