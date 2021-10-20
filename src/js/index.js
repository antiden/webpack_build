var app = (function () {
  
  var importSlider = require('./parts/slider.js');
  var importLog = require('./parts/log.js');
  
  return {
    sliderFunc : importSlider,
    logFunc : importLog,
  }
  
})();

export default app;