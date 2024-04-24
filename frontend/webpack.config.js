const path = require("path");

module.exports = {
    cache: true,
    devtool: "eval-cheap-module-source-map",
    optimization: {
        moduleIds: 'deterministic',
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                  test: /[\\/]node_modules[\\/]/,
                  name: 'vendors',
                  chunks: 'all'
                }
              }
        },
    },
    entry  : './src/index.js',
    output : {
        path     : path.resolve(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: '[name].bundle.js',
    },
    mode: 'development',
    module : {
        rules: [
        {
            test: /\.css$/,
            use: ["lit-css-loader"],
        },
            {
                test: /\.(?:js|mjs|cjs)$/,
                include: path.resolve(__dirname, 'src'),
                use: {
                    loader: 'babel-loader',
                    options: {
                      presets: ['@babel/preset-env'],
                      plugins: [
                        ["@babel/plugin-proposal-decorators", { decoratorsBeforeExport: true }],
                        ["@babel/plugin-proposal-class-properties"]
                    ]
                    }
                }
            }
        ]
    }
};