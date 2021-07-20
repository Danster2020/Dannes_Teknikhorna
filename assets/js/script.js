// disable animations on load
window.addEventListener('load', (event) => {
  var element = document.body;
  element.classList.remove("preload");
});

// disable animations on resizing
let resizeTimer;
window.addEventListener("resize", () => {
document.body.classList.add("preload");
clearTimeout(resizeTimer);
resizeTimer = setTimeout(() => {
  document.body.classList.remove("preload");
}, 400);
});


observer.observe(document.querySelector('#img_grid'));

function showExitIcon() {
    // Get the checkbox
    var checkBox = document.getElementById("nav_toggle");
    // Get the output text
    var hamburger_menu = document.getElementById("hamburger_menu");
  
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
        hamburger_menu.className = "fas fa-times fa-2x";
    } else {
        hamburger_menu.className = "fas fa-bars fa-2x";
    }
}

// when user is not scrolled to the top
var arrow = document.getElementById("scroll_arrow");
window.onscroll = function() {scrollArrow()};
function scrollArrow() {
  if (window.scrollY > 0) {
    arrow.style.display = "block";
  } else {
    arrow.style.display = "none";
  }
}

// scroll user to top
function scrollToTop() {
  window.scrollTo({top: 0, behavior: 'smooth'});
}