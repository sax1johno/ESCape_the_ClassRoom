const path = require("path");

module.exports = {
    entry  : './src/index.js',
    output : {
        path     : path.resolve(__dirname, 'dist'),
        publicPath: '/dist/',
        filename : 'esccl8.js'
    },
    mode: 'development',
    devtool: 'source-map',    
    module : {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                      presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    // devServer: {
    //     static: {
    //       directory: path.join(__dirname, 'public'),
    //     },
    //     compress: true,
    //     port: 9000,
    //   },    
};