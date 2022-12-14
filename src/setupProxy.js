const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://hotel-booking-app-ashen.vercel.app/',
      changeOrigin: true,
    })
  );
};