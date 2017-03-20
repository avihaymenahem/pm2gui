const config = require("./config/config.json"),
    webpack = require("webpack"),
    HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry : './src/client/index.ts',
    output: {
        path: __dirname + '/dist',
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            }, {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },{
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader?name=public/fonts/[name].[ext]'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.ts']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/client/index.html'
        }),
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
            __dirname
        )
    ],
    devServer: {
        port: config.MANAGEMENT_PORT,
        historyApiFallback: true,
        host: "0.0.0.0",
        compress: true,
        contentBase: './',
        stats: {
            modules: false,
            cached: false,
            colors: true,
            chunk: false
        },
        proxy: {
            '/**': {
                target: '/index.html',
                secure: false,
                bypass: function(req, res, opt){
                    if(req.path.indexOf('/img/') !== -1 || req.path.indexOf('/public/') !== -1){
                        return '/'
                    }

                    if (req.headers.accept && req.headers.accept.indexOf('html') !== -1) {
                        return '/index.html';
                    }
                }
            }
        }
    }
};