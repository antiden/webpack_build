import Inputmask from "inputmask";

var maskFunc = function() {

  document.addEventListener("DOMContentLoaded", function(){

    var selector = document.querySelector(".tel");

    if (selector) {
      var im = new Inputmask("+7 (999) 999-99-99");
      im.mask(selector);
    }

  });

}();

export default maskFunc;