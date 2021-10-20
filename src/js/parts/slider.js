import 'flickity/dist/flickity.min.css';
import Flickity from 'flickity';

var sliderFunc = function() {

  window.addEventListener(`DOMContentLoaded`, () => {
  
    var elem = document.querySelector('.slider');
    new Flickity( elem, {
      contain: true,
      wrapAround: true
    });
  
  });

}();

export default sliderFunc;