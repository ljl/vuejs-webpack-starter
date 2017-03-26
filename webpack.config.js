module.exports = {
  entry: ['./main.js'],
  output: {
    filename: 'dist/scripts.bundle.js'
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: 'vue-loader',
        options: {
          loaders: {
            scss: 'style-loader!css-loader!sass-loader'
          }
        }
      }
    ]
  }
}
