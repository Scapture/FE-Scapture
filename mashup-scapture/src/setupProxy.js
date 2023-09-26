const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/list',
        createProxyMiddleware({
            target: 'http://223.194.134.32:8000',
            changeOrigin: true,
        })
    );
};