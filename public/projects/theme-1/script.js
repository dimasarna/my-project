// Global variable
let slideIndex = 1;
let navbar = document.getElementById("navbar");
let sticky = navbar.offsetTop;

// Global constant
const hiddenElements = document.querySelectorAll(".hidden");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

// Application function
function observeNavbar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("content-img");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

function plusSlides(n) { showSlides(slideIndex += n); }

// Main program
hiddenElements.forEach((el) => observer.observe(el));
window.onscroll = function() {observeNavbar()};
