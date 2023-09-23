const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/list',
        createProxyMiddleware({
            target: 'http://192.168.1.11:8000',
            changeOrigin: true,
        })
    );
};