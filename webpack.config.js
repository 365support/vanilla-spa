const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: "./src/main.tsx",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },

  devServer: {
    compress: true,
    port: 5500,
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    alias: {
      "@utils": path.resolve(__dirname, "src/utils/"),
      "@constants": path.resolve(__dirname, "src/constants/"),
      "@components": path.resolve(__dirname, "src/components/"),
      "@react": path.resolve(__dirname, "react/"),
      "@react-router-dom": path.resolve(__dirname, "react-router-dom/"),
      "@data": path.resolve(__dirname, "public/data/"),
    },
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          {
            loader: "css-loader",
            options: {
              import: true,
              modules: {
                localIdentName: "[name]__[local]___[hash:base64:5]",
              },
            },
          },
        ],
      },
      {
        test: /\.png$/,
        type: "asset/resource",
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
    }),
    new MiniCssExtractPlugin(),
  ],
};
