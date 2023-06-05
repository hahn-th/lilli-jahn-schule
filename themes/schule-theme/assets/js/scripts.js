// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  onScrollHandler();
};

// Get the header
var header = document.getElementById("navbar");
var sticky = header.getBoundingClientRect().y;

function onScrollHandler() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky-shadow");
  } else {
    header.classList.remove("sticky-shadow");
  }
}

function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString() + "; SameSite=Lax";
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

function setupCookieDialog() {
  var accepted = getCookie("acceptedDatenschutz");
  if (accepted != "true") {
    var myModal = new bootstrap.Modal(
      document.getElementById("acceptDatenschutz")
    );
    myModal.show();
  }
}

setupCookieDialog();

const datenschutzModal = document.getElementById("acceptDatenschutz");
datenschutzModal.addEventListener("hidden.bs.modal", (event) => {
  setCookie("acceptedDatenschutz", true, 180);
});
