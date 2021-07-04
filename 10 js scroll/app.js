// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************

const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();
// ********** close links ************

const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");
const navToggle = document.querySelector(".nav-toggle");

navToggle.addEventListener("click", function () {
  const containerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;

  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});
// ********** fixed navbar ************
const nav = document.getElementById("nav");
const topUpBtn = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = nav.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    nav.classList.add("fixed-nav");
  } else {
    nav.classList.remove("fixed-nav");
  }

  // adding topup button
  if (scrollHeight > 500) {
    topUpBtn.classList.add("show-link");
  } else {
    topUpBtn.classList.remove("show-link");
  }
});
// ********** smooth scroll ************
// select links
const showLink = document.querySelectorAll(".scroll-link");
showLink.forEach(function (link) {
  link.addEventListener("click", function (event) {
    // prevent default
    event.preventDefault();
    // navigate to specific spot
    const id = event.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    // calculate the height
    const navHeight = nav.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = nav.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeight;
    if (!fixedNav) {
      position = position - navHeight;
    }
    if (navHeight > 82) {
      position = position + containerHeight;
    }
    window.scrollTo({
      left: 0,
      top: position,
    });
    linksContainer.style.height = 0;
  });
});
