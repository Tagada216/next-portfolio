const path = require("path");

const nextConfig = {
  output: "export",
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: ["res.cloudinary.com", "media.dev.to"],
  },
  basePath: "/github-pages",
};

module.exports = nextConfig;
