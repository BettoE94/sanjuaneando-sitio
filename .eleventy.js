module.exports = function(eleventyConfig) {
  // Carpetas que se copian al sitio final
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("admin");

  // Colecciones automáticas basadas en tus carpetas
  eleventyConfig.addCollection("eventos", function(collectionApi) {
    return collectionApi.getFilteredByGlob("eventos/*.md");
  });
  
  eleventyConfig.addCollection("deportes", function(collectionApi) {
    return collectionApi.getFilteredByGlob("deportes/*.md");
  });

  eleventyConfig.addCollection("noticias", function(collectionApi) {
    return collectionApi.getFilteredByGlob("noticias/*.md");
  });

  eleventyConfig.addCollection("pescadito", function(collectionApi) {
    return collectionApi.getFilteredByGlob("pescadito/*.md");
  });

  return {
    dir: {
      input: ".",
      output: "_site"
    }
  };
};
