const path = require(`path`);

module.exports = {
  entry: `./source/js/main.js`,
  output: {
    filename: `bundle.js`,
    path: path.join(__dirname, `build/js`)
  },
  devtool: `source-map`,
};
