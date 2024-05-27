const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api/video',
        createProxyMiddleware({
            target: 'http://54.174.226.155:8080',
            changeOrigin: true,
        })
    );
};