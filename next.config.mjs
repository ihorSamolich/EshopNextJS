/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        SERVER_URL: process.env.SERVER_URL
    },
    images:{
        remotePatterns:[
            {
                protocol: 'https',
                hostname: "tailwindui.com"
            },
            {
                protocol: 'http',
                hostname: "localhost",
                port: "5135"
            },
            {
                protocol: 'http',
                hostname: "ihor.fun",
            }
        ]
    }
}

export default nextConfig;
