const path = require("path");

const nextConfig = {
  webpack: (config: { module: { rules: { test: RegExp; use: any; }[]; }; }) => {
    config.module.rules.push({
      test: /favicon\.ico$/,
      use: path.resolve(__dirname, "node_modules/null-loader"),
    });
    return config;
  },
};

export default nextConfig;
