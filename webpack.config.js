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
BlogsList : 'app/components/BlogsList.jsx',
AddBlog : 'app/components/AddBlog.jsx',
BlogComments : 'app/components/BlogComments.jsx',
applicationStyles: 'app/styles/app.css',
actions: 'app/actions/actions.jsx',
reducers: 'app/reducers/reducers.jsx',
configureStore:'app/store/configureStore.jsx',
AddComment : 'app/components/AddComment.jsx'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
    loader: 'babel-loader',
    query: {
      presets: ['react','es2015','stage-2']
    },
    tests: /.jsx?$/,
    exclude: /(node_modules|bower_components)/
  }
]
}
};
