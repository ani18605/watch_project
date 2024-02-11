const body = document.querySelector("body"),
  hourHand = document.querySelector(".hour"),
  minuteHand = document.querySelector(".minute"),
  secondHand = document.querySelector(".second"),
  modeSwitch = document.querySelector(".mode-switch"),
  nav__menu=document.querySelector(".nav__menu");
if (localStorage.getItem("mode") === "Dark Mode"){
  body.classList.add("dark");
  modeSwitch.textContent = "Light Mode";
}
let ringtone = new Audio("tick.mp3");
modeSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");
  const isDarkMode = body.classList.contains("dark");
  modeSwitch.textContent = isDarkMode ? "Light Mode" : "Dark Mode";
  localStorage.setItem("mode", isDarkMode ? "Dark Mode" : "Light Mode");
});
const updateTime = () => {
  let date = new Date(),
    secToDeg = (date.getSeconds() / 60) * 360,
    minToDeg = (date.getMinutes() / 60) * 360,
    hrToDeg = (date.getHours() / 12) * 360;
  secondHand.style.transform = `rotate(${secToDeg}deg)`;
  minuteHand.style.transform = `rotate(${minToDeg}deg)`;
  ringtone.play();
  hourHand.style.transform = `rotate(${hrToDeg}deg)`;
};
var startStopButton = document.getElementById("btn");
let isClockRunning = true;
const toggleClock = () => {
  isClockRunning = !isClockRunning;
  startStopButton.textContent = isClockRunning ? "Stop" : "Start";
};
startStopButton.addEventListener("click", toggleClock);
setInterval(() => {
  if (isClockRunning) {
    updateTime();
    ringtone.play();
    ringtone.loop = true;
  }
}, 1000);