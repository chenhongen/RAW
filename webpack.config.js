module.exports = {
    entry: './main.js', // 入口文件路径
    output: {
        path: '/',
        filename: 'index.js'
    },
    devServer: {
        inline: true,
        port: 2333
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/, // babel 转换为兼容性的 js/jsx
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ],
        postLoaders: [
          {
            test: /\.js$/,// es5转es3
            loaders: ['es3ify-loader']
          }
        ]
    }
}