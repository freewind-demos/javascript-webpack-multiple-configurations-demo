module.exports = [{
  mode: "development",
  entry: './entry.js',
  output: {
    path: __dirname,
    filename: 'dist/bundle1.js'
  }
}, {
  mode: "development",
  entry: './entry.js',
  output: {
    path: __dirname,
    filename: 'dist/bundle2.js'
  }
}];
