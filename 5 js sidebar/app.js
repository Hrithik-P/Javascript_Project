let sideBar = document.querySelector(".sidebar");
let navBtn = document.querySelector(".sidebar-toggle");
let clsBtn = document.querySelector(".close-btn");

//add class show-sidebar when clicked on navBtn
navBtn.addEventListener("click", function () {
  sideBar.classList.toggle("show-sidebar");
});

//remove class show-sidebar when clicked on clsBtn
clsBtn.addEventListener("click", function () {
  sideBar.classList.remove("show-sidebar");
});
