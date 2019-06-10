// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const nodeExternals = require("webpack-node-externals");

module.exports = {
  siteName: "Maureen's Readers",
  siteUrl: "https://maureensreaders.org",
  siteDescription: "Maureen's Readers promotess and develops reading in elementary grade students.",
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "content/posts/*.md",
        typeName: "Post",
        route: "/updates/:slug"
      }
    }
  ],
  {
    use: "@gridsome/plugin-google-analytics",
    options: {
      id: "UA-141774823-1"
    }
  },
  chainWebpack(config, { isServer }) {
    if (isServer) {
      config.externals(
        nodeExternals({
          whitelist: [/\.css$/, /\?vue&type=style/]
        })
      );
    }
  },
  transformers: {
    //Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: "_blank",
      externalLinksRel: ["nofollow", "noopener", "noreferrer"],
      anchorClassName: "icon icon-link",
      plugins: ["@gridsome/remark-prismjs"]
    }
  }
};
