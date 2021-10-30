var mobileMenuFunc = function() {

  document.addEventListener("DOMContentLoaded", function(){

    const mobileButton = document.querySelector(".mm_button"),
          mobileButtonClose = document.querySelector(".mm_button_close"),
          mobileMenu = document.querySelector( ".header__nav" ),
          mobileBg = document.querySelector( ".mmBb" );

    if (mobileMenu) {
      mobileButton.onclick = function() {
        document.body.classList.toggle('mm_open');
        document.getElementById("hamburger").checked = true;
        document.getElementById("hamburger_mobile").checked = true;
      }
      mobileButtonClose.onclick = function() {
        document.body.classList.remove('mm_open');
        document.getElementById("hamburger").checked = false;
        document.getElementById("hamburger_close").checked = false;
      }
      mobileBg.onclick = function() {
        document.body.classList.remove('mm_open');
        document.getElementById("hamburger").checked = false;
        document.getElementById("hamburger_close").checked = false;
      }
    }

  });

}();

export default mobileMenuFunc;