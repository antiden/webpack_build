var app = (function () {
  
  var importFlickity = require('./parts/flickity.js');
  var importSticky = require('./parts/sticky.js');
  var importMask = require('./parts/mask.js');
  var importMobileMenu = require('./parts/mmMenu.js');
  
  return {
    flickityFunc : importFlickity,
    stickyFunc : importSticky,
    maskFunc : importMask,
    mobileMenuFunc : importMobileMenu,
  }
  
})();

export default app;