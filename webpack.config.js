module.exports = {
  context: `${__dirname}/src`,
  entry: ['./App.jsx'],

  output: {
    path: `${__dirname}/dist/js`,
    filename: 'bundle.js',
    sourceMapFilename: 'bundle.map.js'
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {}
  },

  module: {
    loaders: [
      // babel-loader
      {
        test: /\.(js|jsx)?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
          plugins: [
            'transform-class-properties',
            'react-html-attrs'
          ]
        }
      },
    ]
  },
}