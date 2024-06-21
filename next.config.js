/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.coinranking.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        port: "",
        pathname: "/PokeAPI/sprites/master/sprites/pokemon/**",
      },
    ],
  },
};

// module.exports = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "raw.githubusercontent.com",
//         port: "",
//         pathname: "/PokeAPI/sprites/master/sprites/pokemon/**",
//       },
//     ],
//   },
// };

module.exports = nextConfig;
