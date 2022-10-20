// When the user scrolls the page, execute myFunction
window.onscroll = function () { onScrollHandler() };

// Get the header
var header = document.getElementById("navbar");
var sticky = header.getBoundingClientRect().y;

function onScrollHandler() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky-shadow");
  }
  else {
    header.classList.remove("sticky-shadow");
  }
}


//  // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
//  function myFunction() {
//   var header = document.getElementById("main-navbar");

//    if (window.pageYOffset > sticky) {
//      header.classList.add("sticky-shadow");
//    } else {
//      header.classList.remove("sticky-shadow");
//    }
//  } 


// NAVBAR Stuff

// const navbarToggle = document.getElementById('navbar-toggle');
// let isNavbarExpanded = navbarToggle.getAttribute('aria-expanded') === 'true';

// const toggleNavbarVisibility = () => {
//   isNavbarExpanded = !isNavbarExpanded;
//   navbarToggle.setAttribute('aria-expanded', isNavbarExpanded);
// };

// navbarToggle.addEventListener('click', toggleNavbarVisibility);

// const navbarMenu = document.getElementById('navbar-menu');
// const navbarLinksContainer = navbarMenu.querySelector('.navbar-links');

// navbarLinksContainer.addEventListener('click', (e) => e.stopPropagation());
// navbarMenu.addEventListener('click', toggleNavbarVisibility);