const withOptimizedImages = require("next-optimized-images");
const webpack = require("webpack");
const SWPrecacheWebpackPlugin = require("sw-precache-webpack-plugin");
const NODE_ENV = process.env.NODE_ENV || "production";
const buildPrefix = NODE_ENV === "production" ? "/eelv-douai" : "";
const baseURL =
  NODE_ENV === "production"
    ? "https://nfroidure.github.io"
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
        new webpack.IgnorePlugin(/^device$/),
        new SWPrecacheWebpackPlugin({
          verbose: true,
          minify: "production" === process.env.NODE_ENV,
          cacheId: "mgda",
          filename: "service-worker.js",
          staticFileGlobsIgnorePatterns: [/\.next\//],
          runtimeCaching:
            "production" === process.env.NODE_ENV
              ? [
                  {
                    handler: "networkFirst",
                    urlPattern: /^https?.*/,
                  },
                ]
              : [],
        }),
        ...(config.plugins || []),
      ],
    });
  },
});
