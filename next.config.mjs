/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Performance optimizations
  experimental: {
    optimizePackageImports: [
      '@radix-ui/react-dialog',
      '@radix-ui/react-dropdown-menu',
      '@floating-ui/react',
      '@floating-ui/react-dom',
      '@tanstack/react-query',
      'motion',
      'jotai',
      'clsx',
      'tailwind-merge'
    ],
  },
  // Enable compression
  compress: true,
  // Optimize images
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
  },
  // Headers for better caching and bfcache compatibility
  async headers() {
    return [
      {
        // Static assets (long cache)
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Images and fonts
        source: '/(.*)\\.(png|jpg|jpeg|gif|webp|svg|woff|woff2|ico)$',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, stale-while-revalidate=86400',
          },
        ],
      },
      {
        // HTML pages (shorter cache to allow updates)
        source: '/((?!api|_next/static).*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, s-maxage=86400, stale-while-revalidate=86400',
          },
        ],
      },
    ];
  },
  // Enable bundle analyzer in development
  ...(process.env.ANALYZE === 'true' && {
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.resolve.fallback = {
          ...config.resolve.fallback,
          fs: false,
        };
      }
      return config;
    },
  }),
  // Production optimizations
  ...(process.env.NODE_ENV === 'production' && {
    swcMinify: true,
    modularizeImports: {
      '@radix-ui/react-dialog': {
        transform: '@radix-ui/react-dialog/{{member}}',
      },
      '@radix-ui/react-dropdown-menu': {
        transform: '@radix-ui/react-dropdown-menu/{{member}}',
      },
      '@floating-ui/react': {
        transform: '@floating-ui/react/{{member}}',
      },
    },
  }),
};

export default nextConfig;
