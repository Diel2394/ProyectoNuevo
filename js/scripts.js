//carousel init
document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".carousel");
  var instances = M.Carousel.init(elems, options);
});

document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".carousel");
  var instances = M.Carousel.init(elems, options);
});

var options = {
  indicator: true,
  numVisible: 5,
  padding: 15,
};

const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", (e) => {
  menu.classList.toggle("mostrar");
});
