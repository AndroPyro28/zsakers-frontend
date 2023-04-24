import pathBrowserify from 'path-browserify'

export default {
  // entry: './src/index.js',
  // output: {
  //   filename: 'bundle.js',
  // },
  externals : {
    path: 'path'
  },
  
  resolve: {
    // fallback: {
    //   
    // }
    fallback: {
      path: require.resolve("path-browserify"),
      "os": false,
      path: false
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};