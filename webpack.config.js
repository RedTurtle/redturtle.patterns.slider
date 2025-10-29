process.traceDeprecation = true;
const mf_config = require("@patternslib/dev/webpack/webpack.mf");
const package_json = require("./package.json");
const package_json_mockup = require("@plone/mockup/package.json");
const package_json_patternslib = require("@patternslib/patternslib/package.json");
const path = require("path");
const webpack_config =
  require("@patternslib/dev/webpack/webpack.config").config;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = () => {
  let config = {
    entry: {
      "slider.min": path.resolve(__dirname, "resources/index.js"),
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.s[ac]ss$/i,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
      ],
    },
  };

  config = webpack_config({
    config: config,
    package_json: package_json,
  });
  config.output.path = path.resolve(
    __dirname,
    "src/redturtle/patterns/slider/static/bundles",
  );

  config.plugins.push(
    mf_config({
      name: "slider",
      filename: "pattern-slider.min.js",
      remote_entry: config.entry["pattern-slider.min"],
      dependencies: {
        ...package_json_patternslib.dependencies,
        ...package_json_mockup.dependencies,
        ...package_json.dependencies,
      },
    }),
  );

  if (process.env.NODE_ENV === "development") {
    config.devServer.port = "3001";
    config.devServer.static.directory = path.resolve(__dirname, "./resources/");
  }

  // console.log(JSON.stringify(config, null, 4));

  return config;
};
