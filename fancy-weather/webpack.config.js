// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.jsx',
    resolve: {
        extensions: ['.jsx', '.js'],
        alias: {
            '~': path.resolve(__dirname, 'src/'),
        },
    },
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'main.js',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },

            {
                test: /\.svg$/,
                use: [
                    {
                        loader: 'svg-inline-loader',
                        options: {
                            removeSVGTagAttrs: false,
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            base: '/',
        }),
    ],
    mode: 'development',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: process.env.PORT || 3000,
        open: true,
        historyApiFallback: true,
        contentBasePublicPath: '/',
        publicPath: '/'
    },
};