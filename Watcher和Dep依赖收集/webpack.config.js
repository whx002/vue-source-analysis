module.exports = {
    // 打包入口，就是webpack从哪个文件开始打包
    entry: './src/index.js',
    // 出口
    output: {
        // 虚拟路径，就是打包出来的js文件，不会真正的物理生成，而是生成到这个虚拟的路径中，即http://127.0.0.1:8080/xuni/bundle.js中
        publicPath: 'xuni',
        filename: 'bundle.js'
    },
    devServer: {
        // 端口号
        port: 8080,
        // 静态资源文件夹
        contentBase: 'www'
    }
};