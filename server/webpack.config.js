const { resolve } = require("path");
const glob = require("glob");

console.log({ asd: resolve(__dirname, "./shared/") });
const alias = {
  "@api": resolve(__dirname, "./api/"),
  "@shared": resolve(__dirname, "./shared/"),
};

const entries = glob.sync("./api/*").reduce(function (entries, entry) {
  entries[entry.toString()] = entry;
  return entries;
}, {});

console.log("Building functions");
console.log(Object.keys(entries).join("\n"));

const config = {
  mode: "production",
  entry: entries,
  target: "node",
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
        options: {
          transpileOnly: true,
        },
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js", ".json"],
    descriptionFiles: ["package.json", "bower.json"],
    modules: ["node_modules"],
    alias,
  },
  output: {
    filename: "[name]/index.js",
    libraryTarget: "commonjs",
    path: resolve(__dirname, "public"),
  },
  performance: {
    hints: false,
  },
  optimization: {
    minimize: true,
  },
  plugins: [],
};

module.exports = config;
