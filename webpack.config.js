module.exports = {
  entry: './resources/js/app.js',
  runtimeCompiler: true,
  output: {
    filename: './public/javascripts/bundle.js',
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js',
    },
    extensions: ['*', '.js', '.vue', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
    ],
  },
}
