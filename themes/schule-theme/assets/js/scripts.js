 // When the user scrolls the page, execute myFunction
 window.onscroll = function() {myFunction()};

 // Get the header
 var header = document.getElementById("main-navbar");
 
 // Get the offset position of the navbar
 var sticky = header.getBoundingClientRect().y;
 
 // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
 function myFunction() {
  var header = document.getElementById("main-navbar");
  
   if (window.pageYOffset > sticky) {
     header.classList.add("sticky-shadow");
   } else {
     header.classList.remove("sticky-shadow");
   }
 } 