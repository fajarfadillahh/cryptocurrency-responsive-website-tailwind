module.exports = {
  plugins: [
    require("tailwindcss")("./tailwind.config.js"),
    require("autoprefixer"),
    ...(NODE_ENV === "production" ? { cssnano: {} } : {}),
  ],
};
