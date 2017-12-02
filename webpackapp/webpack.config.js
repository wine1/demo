var webpack=require('webpack');
 
module.exports = {
    entry: "./runoob1.js", 
    // 入口
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    // 出口
    module: {
        loaders: [
            { test: /\.css$/, loader: "style-loader!css-loader" }
        ]
    },
    // 模板
    plugins:[
    new webpack.BannerPlugin('菜鸟教程 webpack 实例')
    ]
    // 插件
};