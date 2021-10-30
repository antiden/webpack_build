import stickybits from 'stickybits';

var stickyFunc = function() {

  document.addEventListener("DOMContentLoaded", function(){
    if (window.innerWidth > 768) {
      stickybits('.header', {
        useStickyClasses: true
      });
    }
  });

}();

export default stickyFunc;