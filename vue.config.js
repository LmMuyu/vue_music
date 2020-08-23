const { resolve } = require("path");
module.exports = {
  lintOnSave: false,
  css: {
    sourceMap: true //开启css sourcemap
  },
  devServer: {
    host: "127.0.0.1",
    port: "4000",
    compress: true
  }
};
