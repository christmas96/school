module.exports = [
  {
    test: /\.(ts|tsx)$/,
    exclude: /(node_modules|bower_components|public)/,
    loader: 'babel-loader!ts-loader',
  },
  {
    test: /\.jsx?$/,
    exclude: /(node_modules|bower_components|public)/,
    loader: 'babel-loader',
  },
  {
    test: /\.jpg/,
    exclude: /(node_modules|bower_components)/,
    loader: 'url-loader?limit=10000&mimetype=image/jpg',
  },
  {
    test: /\.less/,
    exclude: ['node_modules'],
    use: [
      'style-loader',
      'css-loader',
      'less-loader',
    ],
  },
  {
    test: /\.(jpg|png|gif|svg|ico)$/,
    loader: 'base64-inline-loader?name=[name].[ext]',
  },
];
