module.exports = {
  entry: `${__dirname}/client/src/index.jsx`,
  module: {
    rules: [{
      test: [/\.jsx$/, /\.js$/],
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
      use: ['eslint-loader'],
    }],
  },
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/client/dist`,
  },
};
