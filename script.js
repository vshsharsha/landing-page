// JavaScript to add interactivity

// Change navbar background color on scroll
window.onscroll = function() {
  var navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
};
