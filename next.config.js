const path = require("path");

const nextConfig = {
  output: "out",
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: ["res.cloudinary.com", "media.dev.to"],
  },
};

module.exports = nextConfig;
