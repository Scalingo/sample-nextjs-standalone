/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    experimental: {
        useTypeScriptCli: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.scalingo.com',
                port: '',
                pathname: '/documentation/**',
            },
        ],
    },
};

export default nextConfig;
