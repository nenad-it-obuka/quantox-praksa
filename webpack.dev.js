const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',    

  devServer: {
    port: 8000,
    contentBase: path.join(__dirname, 'dist'),
    clientLogLevel: 'warn', // Value 'warn' tells stats to log errors and warnings only.
    hot: true,
  },    

  optimization: {
    minimize: false,
  },

  module: {    
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },

      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },      
      
      {
        test: /\.(gif|jpe?g|png|svg)$/i,          
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images',
            },
          },
        ],
      }      
    ]
  },

  plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
          template: 'src/index.html',
          scriptLoading: 'defer',            
      })
  ]  
}