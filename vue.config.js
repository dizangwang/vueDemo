module.exports = {
    devServer: {
        proxy: {
            '/': {
                target: 'http://www.baidu.com',
                ws: true,
                changeOrigin: true
            },
        }
    }
}