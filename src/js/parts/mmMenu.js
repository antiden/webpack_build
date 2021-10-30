var mobileMenuFunc = function() {

  document.addEventListener("DOMContentLoaded", function(){

    const mobileButton = document.querySelector(".mm_button"),
          mobileButtonClose = document.querySelector(".mm_button_close"),
          mobileMenu = document.querySelector( ".header__nav" ),
          mobileBg = document.querySelector( ".mmBb" );

    if (mobileMenu) {
      function mmMenuOpen () {
        document.body.classList.add('mm_open');
        document.getElementById("hamburger").checked = true;
        document.getElementById("hamburger_close").checked = true;
      }
  
      function mmMenuClose () {
        document.body.classList.remove('mm_open');
        document.getElementById("hamburger").checked = false;
        document.getElementById("hamburger_close").checked = false;
      }

      function mmHasActive () {
        const isActive = document.body.classList.contains("mm_open");
        if (isActive) {
          ocument.getElementById("hamburger").checked = true;
          document.getElementById("hamburger_close").checked = true;
        } else {
          document.getElementById("hamburger").checked = false;
          document.getElementById("hamburger_close").checked = false;
        }
      }

      mmHasActive();

      mobileButton.onclick = function() {
        mmMenuOpen();
      }
      mobileButtonClose.onclick = function() {
        mmMenuClose();
      }
      mobileBg.onclick = function() {
        mmMenuClose();
      }
    }

  });

}();

export default mobileMenuFunc;