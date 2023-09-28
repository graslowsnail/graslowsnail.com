/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: ['graslowsnail/albums.s3.amazonaws.com'], // Adjust this to your S3 bucket domain
    hostname: 'graslowsnail',
    remotePatterns: [
      {
        hostname: 'graslowsnail.s3.us-east-2.amazonaws.com',
      },
    ],
  },

async headers() {
    return [
      {
        // matching all API routes
        source: "/api/(.*)",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        ],
      },
    ]
  },
};

