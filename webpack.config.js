module.exports = {
  entry: './app/app.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: 'app/components/Main.js',
      Navbar: 'app/components/Navbar.js',
      Weather: 'app/components/Weather.js',
      About: 'app/components/About.js',
      Example: 'app/components/Example.js',
      WeatherResults: 'app/components/WeatherResults.js',
      WeatherForm: 'app/components/WeatherForm.js',
      openWeatherMap: 'app/api/openWeatherMap.js',
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-1']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};
