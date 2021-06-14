const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  //get a random number between 0 - 3 in colors[]
  // function is called and random num is generated
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});
function getRandomNumber() {
  // function to get random num from 0 - 3
  return Math.floor(Math.random() * colors.length);
}
