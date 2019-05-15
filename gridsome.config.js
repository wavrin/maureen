// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const nodeExternals = require("webpack-node-externals");

module.exports = {
  siteName: "Maureen's Readers",
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "blog/**/*.md",
        typeName: "Post",
        route: "/blog/:slug"
      }
    }
  ],
  chainWebpack(config, { isServer }) {
    if (isServer) {
      config.externals(
        nodeExternals({
          whitelist: [/\.css$/, /\?vue&type=style/]
        })
      );
    }
  }
};
