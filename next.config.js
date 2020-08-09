const path = require("path");
const DotEnv = require("dotenv-webpack");

module.exports = {
  webpack: (config) => {
    config.resolve.alias["@"] = path.resolve(__dirname);
    config.plugins.push(new DotEnv({ silent: true }));
    return config;
  },
  env: {
    AUTH_NAMESPACE: process.env.AUTH_NAMESPACE,
  },
  generateEtags: false,
};
