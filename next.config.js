/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config,) => {
    // Web Worker 支持
    config.module.rules.push({
      test: /\.worker\.(js|ts)$/,
      loader: 'worker-loader',
      options: {
        filename: 'static/[hash].worker.js',
        publicPath: '/_next/',
      },
    });

    // 添加跨域头
    config.headers = {
      'Cross-Origin-Opener-Policy': 'same-origin',
      'Cross-Origin-Embedder-Policy': 'require-corp',
      'Cross-Origin-Resource-Policy': 'same-origin'
    };

    return config;
  },
}

module.exports = nextConfig 