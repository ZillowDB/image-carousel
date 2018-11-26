module.exports = {
  entry: `${__dirname}/client/views/index.js`,
  module: {
    rules: [{
      test: [/\.jsx$/],
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react', '@babel/preset-env'],
        },
      },
    }, {
      test: /\.css$/,
      loader: 'style-loader',
    }, {
      test: /\.css$/,
      loader: 'css-loader',
      query: {
        modules: true,
        localIdentName: '[name]__[local]___[hash:base64:5]',
      },
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
    }],
  },
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/public/dist`,
  },
};
