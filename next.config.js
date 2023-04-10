// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   webpack: (config, { isServer }) => {
//         if (!isServer) {
//           config.resolve.fallback = { fs: false }
//         }
//         return config
//       },
//       eslint: {
//         ignoreDuringBuilds: true,
//       },
//       // Add this line
//       experimental: { esmExternals: true },
// }

// module.exports = nextConfig
// // module.exports = {
// //   reactStrictMode: true,
// //   webpack: (config, { isServer }) => {
// //     if (!isServer) {
// //       config.resolve.fallback = { fs: false }
// //     }
// //     return config
// //   },
// //   eslint: {
// //     ignoreDuringBuilds: true,
// //   },
// //   // Add this line
// //   experimental: { esmExternals: true },
// // }
module.exports = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = { fs: false };
    }
    return config;
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Add this line
  experimental: { esmExternals: true },
};
