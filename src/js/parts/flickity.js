import 'flickity/dist/flickity.min.css';
import Flickity from 'flickity';

window.addEventListener(`DOMContentLoaded`, () => {
  
  var elem = document.querySelector('.slider');
  new Flickity( elem, {
    contain: true,
    wrapAround: true
  });

});