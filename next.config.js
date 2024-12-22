/** @type {import('next').NextConfig} */
const nextConfig = {
  headers: async () => [
    {
      source: '/:path*',
      headers: [
        {
          key: 'Cross-Origin-Opener-Policy',
          value: 'same-origin',
        },
        {
          key: 'Cross-Origin-Opener-Policy-Report-Only',
          value: 'same-origin',
        },
        {
          key: 'Cross-Origin-Embedder-Policy',
          value: 'require-corp',
        },
        {
          key: 'Access-Control-Allow-Origin',
          value: '*',
        },
      ],
    },
  ],
  webpack: (config) => {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
      asyncWebAssembly: true,
    }

    config.module.rules.push({
      test: /\.worker\.(js|ts)$/,
      use: {
        loader: 'worker-loader',
        options: {
          filename: 'static/workers/[name].js',
          publicPath: '/_next/',
          esModule: true,
        },
      },
    });

    config.output = {
      ...config.output,
      publicPath: '/_next/',
      globalObject: 'self',
    };

    // config.module.rules.push({
    //   test: /sqlite_tonbo\.js$/,
    //   use: {
    //     loader: 'babel-loader',
    //     options: {
    //       presets: ['@babel/preset-env']
    //     }
    //   }
    // });

    return config
  },
  devServer: {
    headers: {
      'Cross-Origin-Opener-Policy': 'same-origin',
      'Cross-Origin-Embedder-Policy': 'require-corp',
    },
  },
  async rewrites() {
    return [
      {
        source: '/_next/static/workers/:path*',
        destination: '/_next/static/workers/:path*',
      },
    ];
  },
}

module.exports = nextConfig 