module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
            @import "./src/scss-files/_variables.scss";
          `,
      },
    },
  },
};
