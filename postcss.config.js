module.exports = (env, argv) => {
  return {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      ...(env.mode === "production" ? { cssnano: {} } : {}),
    },
  };
};
