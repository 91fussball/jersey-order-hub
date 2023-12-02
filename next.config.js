/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [
            'kerjaan2-stg.s3-ap-southeast-1.amazonaws.com',
            'sampingan-bucket2.s3.ap-southeast-1.amazonaws.com',
        ],
    },
};

module.exports = nextConfig;
