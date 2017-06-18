var webpack = require('webpack');

module.exports ={
  entry: [
    'script!jquery/dist/jquery.min.js',
       'script!foundation-sites/dist/foundation.min.js',
       './app/app.jsx'
  ],
  externals: {
jquery: 'jQuery'
  },
  plugins: [
new webpack.ProvidePlugin({
  '$': 'jquery',
  'jQuery': 'jquery'
})
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
Main : 'app/components/main.jsx',
OpenBlog : 'app/api/OpenBlog.jsx',
Blogs : 'app/components/blogs.jsx'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
    loader: 'babel-loader',
    query: {
      presets: ['react','es2015']
    },
    tests: /.jsx?$/,
    exclude: /(node_modules|bower_components)/
  }
]
}
};
