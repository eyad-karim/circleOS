let main = document.getElementById("main");
let desktop = document.querySelector(".desktop");
let taskbar = document.querySelector(".taskbar");
let windows = document.querySelectorAll(".window");
let openedWindows = document.querySelector(".open-window");
let draggableWindows = document.querySelectorAll(".draggable");
let windowsOpenBtns = document.querySelectorAll(".window-open-btn");
let windowsMaxmizeBtns = document.querySelectorAll(".window-maxmize-btn");
let windowsHeaders = document.querySelectorAll(".window > .header");
let windowsCloseBtns = document.querySelectorAll(".window > .header > .tools > .close");
let windowsFullScreenBtns = document.querySelectorAll(".window > .header > .tools > .full-screen");

let start = document.querySelector(".start");
let startOpenBtn = document.querySelector(".start-open-btn");

let toolsOpenBtn = document.querySelector(".tools div")
let toolsSection = document.querySelector(".tools-section")

let time = document.getElementById("time")
let select = document.getElementById("select")

function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm.toLocaleUpperCase();
  return strTime;
}

let d = new Date();

time.innerText = formatAMPM(d);

setInterval(() => {

  let d = new Date();

  time.innerText = formatAMPM(d);

},1000)

let date = document.getElementById("date");
date.innerText = d.getDate() + "/" + ( d.getMonth() + 1 ) + "/" + d.getFullYear()
console.log(d.getMonth());