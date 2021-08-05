const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

// let futureDate = new Date(2021, 7, 10, 12, 30, 00);
const futureDate =
  new Date(tempYear, tempMonth, tempDay + 10, 11, 59, 0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
const date = futureDate.getDate();

let month = futureDate.getMonth();
month = months[month];

let weekday = weekdays[futureDate.getDay()];

giveaway.textContent = `giveaway ends on ${weekday} ${date} ${month} ${year} ${hours}:${minutes}am`;

//future time in ms

const futureTime = futureDate.getTime();

function getRemainingTime() {
  const today = new Date().getTime();

  const t = futureTime - today;
  /*
  1s = 1000ms
  1m = 60s
  1hr = 60s
  1day = 24hr
  */
  // values in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHr = 60 * 60 * 1000;
  const oneMin = 60 * 1000;
  const oneSec = 1000;

  // calculate all the values
  let days = t / oneDay;
  days = Math.floor(days);
  let hrs = Math.floor((t % oneDay) / oneHr);
  console.log(hrs);
  let mins = Math.floor((t % oneHr) / oneMin);
  let sec = Math.floor((t % oneMin) / 1000);

  // set values array
  const values = [days, hrs, mins, sec];

  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    } else {
      return item;
    }
  }

  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });

  // if the time of the countdown is less the zero time end
  // this will be written
  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class = "expired">Sorry this giveaway has expired</h4>`;
  }
}

// countdown time
let countdown = setInterval(getRemainingTime, 1000);
// in 1s the content will be refreshed and time will change

getRemainingTime();
