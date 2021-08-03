const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");

about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    // remove active class from all the tab
    btns.forEach(function (btn) {
      btn.classList.remove("active");
      e.target.classList.add("active");
    });
    // hide all the article
      articles.forEach(function (article) {
          article.classList.remove("active");
      });
      const element = document.getElementById(id);
      element.classList.add("active");
  }
});
