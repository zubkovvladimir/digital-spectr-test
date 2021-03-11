const path = require(`path`);
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  context: path.resolve(__dirname, 'source'),
  mode: 'none',
  entry: `./js/main.js`,
  output: {
    filename: `bundle.js`,
    path: path.join(__dirname, `build/js`)
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  devtool: `source-map`,
};
