const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development', // Use 'production' for deployment builds
    entry: './src/index.js', // Entry point for your app
    output: {
        path: path.resolve(__dirname, 'dist'), // Output directory
        filename: '[name].[contenthash].js', // Cache-busting for output files
        publicPath: '/', // Base path for all assets
    },
    devtool: 'source-map', // Enable source maps for easier debugging
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        historyApiFallback: true, // Support React Router
        compress: true, // Enable gzip compression
        port: 3000, // Development server port
        open: true, // Automatically open the app in the browser
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, // Handle JavaScript and JSX files
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/, // Handle CSS files
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/, // Handle image files
                type: 'asset/resource',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html', // Template HTML file
            filename: 'index.html',
        }),
        new CleanWebpackPlugin(), // Clean the output directory before building
    ],
    resolve: {
        extensions: ['.js', '.jsx'], // Resolve these extensions
    },
    optimization: {
        splitChunks: {
            chunks: 'all', // Split vendor and app code into separate files
        },
        runtimeChunk: 'single', // Separate the runtime chunk
    },
};
