const webpack = require('webpack')
module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/app/" : "/",
  configureWebpack:{
    plugins: [
      new webpack.ProvidePlugin({
        $:"jquery",
        jQuery:"jquery",
        "windows.jQuery":"jquery"
      })
    ]
  },
};
