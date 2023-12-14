let main = document.getElementById("main");
let desktop = document.querySelector(".desktop");
let taskbar = document.querySelector(".taskbar");
let showDesktopBtn = document.querySelector(".taskbar .show-desktop-section");

let windows = document.querySelectorAll(".window");
let openedWindows = document.querySelector(".open-window");
let draggableWindows = document.querySelectorAll(".draggable");
let windowsOpenBtns = document.querySelectorAll(".window-open-btn");
let windowsMaxmizeBtns = document.querySelectorAll(".window-maxmize-btn");
let windowsHeaders = document.querySelectorAll(".window > .header");
let windowsCloseBtns = document.querySelectorAll(
  ".window > .header > .tools > .close"
);
let windowsFullScreenBtns = document.querySelectorAll(
  ".window > .header > .tools > .full-screen"
);

let start = document.querySelector(".start");
let startOpenBtn = document.querySelector(".start-btn");

let toolsOpenBtn = document.querySelector(".tools div");
let toolsSection = document.querySelector(".tools-section");
let _toolsSection = document.getElementById("tools-section");
let clickableTools = document.querySelectorAll(".tools-section ul div div li.clickable");

let widgetsOpenBtn = document.querySelector(".widgets.container");
let widgetsSection = document.querySelector(".widgets-section");

let time = document.getElementById("time");
let select = document.getElementById("select");

let customBgBtn = document.getElementById("custom-bg");
let customPiBtn = document.getElementById("custom-pi");
let bgPosition = document.querySelector(".position");
let bgPositions = document.querySelectorAll(".position > div");

let notepadTextsizeInput = document.getElementById("notepad-textsize-input");
let notepadTextsizeValue = document.getElementById("notepad-textsize-value");
let notepadTextcolor = document.getElementById("notepad-textcolor");
let notepadTextarea = document.getElementById("notepad-textarea");

let cmdBody = document.querySelector("#cmd .body");
let cmdInput = document.getElementById("cmd-input");
let cmdOutput = document.getElementById("cmd-output");

let browserSearch = document.getElementById("browser-search");
let browserIframe = document.getElementById("browser-iframe");

function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? " pm" : " am";
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + ampm.toLocaleUpperCase();
  return strTime;
}

let d = new Date();

time.innerText = formatAMPM(d);

setInterval(() => {
  let d = new Date();

  time.innerText = formatAMPM(d);
}, 1000);




let date = document.getElementById("date");
date.innerText = d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();
console.log(d.getMonth());