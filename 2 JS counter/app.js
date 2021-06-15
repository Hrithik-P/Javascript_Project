// set initial value
let count = 0;

// select values and button

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
btns.forEach((btn) => {
  btn.addEventListener("click", function (event) {
    const styles = event.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("reset")) {
      count = 0;
    } else if (styles.contains("increase")) {
      count++;
    }
    if (count > 0) {
      value.style.color = "#25bb32";
    } else if (count < 0) {
      value.style.color = "#bb2525";
    } else if (count == 0) {
      value.style.color = "#222";
    }
    value.textContent = count;
  });
});
