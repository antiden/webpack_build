import 'flickity/dist/flickity.min.css';
import Flickity from 'flickity';
import 'flickity-bg-lazyload';
import 'flickity-as-nav-for';

var flickityFunc = function() {

  document.addEventListener("DOMContentLoaded", function(){
  
    // main slider
    var mainSlider = document.querySelector('.slider');
  
    if (mainSlider) {
      var flkty = new Flickity( mainSlider, {
        contain: true,
        wrapAround: true,
        lazyLoad: 2,
        bgLazyLoad: 2,
        adaptiveHeight: true
      });
  
      flkty.on("change", function() {   
        flkty.cells.forEach(function(cell, i) {
          if (cell.element == flkty.selectedElement) {
            var video = cell.element.querySelector("video");
            if (video) {
              //console.log("playing video " + i);
              video.play();
            }
            return;
          }
          var video = cell.element.querySelector("video");
          if (video) {
            //console.log("pausing video " + i);
            video.pause();
          }
        });
      });
    }

    // product carousel
    var productMain = document.querySelector('.product_carousel__main');
    var productThumb = document.querySelector('.product_carousel__thumbs');
  
    if (productMain) {
      var flktyMain = new Flickity( productMain, {
        pageDots: false,
        lazyLoad: 1,
        prevNextButtons: true,
        cellAlign: 'left',
        arrowShape: 'M95.7,45.6H14.8L34.1,26.3A4.3,4.3,0,0,0,28,20.2L1.3,46.9a4.3,4.3,0,0,0,0,6.1L28,79.7a4.2,4.2,0,0,0,3,1.2,4.7,4.7,0,0,0,3.1-1.2,4.3,4.3,0,0,0,0-6.1L14.8,54.2H95.7a4.3,4.3,0,0,0,0-8.6Z'
      });
    }

    if (window.innerWidth > 480) {
      var carouselHeight = false,
          carouselDrag = false,
          carouselPosition = false;
    } else {
      var carouselHeight = true,
          carouselDrag = true,
          carouselPosition = true;
    }

    function equalChildParent() {
      const parentHeight = productMain.offsetHeight;
      productThumb.style.width = parentHeight + "px";
    }

    if ( productThumb ) {
      var flktyThumb = new Flickity( productThumb, {
        asNavFor: productMain,
        pageDots: false,
        prevNextButtons: false,
        cellAlign: 'left',
        contain: true,
        adaptiveHeight: carouselHeight,
        draggable: carouselDrag,
        percentPosition: carouselPosition,
        on: {
          ready: function() {
            if (window.innerWidth > 480) {
              window.addEventListener('load', function() {
                equalChildParent();
              });
              window.addEventListener('resize', function(){
                equalChildParent();
              });
            }
          }
        }
      });
    }
  
  });

}();

export default flickityFunc;