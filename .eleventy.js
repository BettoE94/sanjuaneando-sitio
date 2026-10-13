module.exports = function(eleventyConfig) {
  // Le decimos al motor que copie la carpeta de imágenes tal cual
  eleventyConfig.addPassthroughCopy("images");
  // Le decimos que también copie la carpeta del panel de administración
  eleventyConfig.addPassthroughCopy("admin");

  return {
    dir: {
      input: ".",
      output: "_site"
    }
  };
};
