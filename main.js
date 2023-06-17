let main = document.querySelector("main"); // main el
let desktop = document.querySelector(".desktop"); // desktop
let windows = document.querySelectorAll(".window"); // all windows
let windowsOpenBtns = document.querySelectorAll(".window-open-btn"); // all the buttons in the taskbar that open the windows
let windowsHeaders = document.querySelectorAll(".window > .header"); // all window headers that can drag the window
let windowsCloseBtns = document.querySelectorAll(".window > .header > .tools > .close"); // all the close button in windows in headers
let windowsFullScreenBtns = document.querySelectorAll(".window > .header > .tools > .full-screen"); // all the full screen button in windows in headers

let start = document.querySelector(".start"); // the start window that has all apps
let startOpenBtn = document.querySelector(".start-open-btn"); // the button that opens the start window

/** open and close sections */
startOpenBtn.addEventListener("click",() => {
    start.classList.toggle("open-start") // add the class to the start window to open
})

desktop.addEventListener("click",() => {
    start.classList.remove("open-start") // add the class to close the start window if the desktop is clicked
})



/** open window */
function openWindow(windowID) {
  document.getElementById(windowID).classList.add("open-window") // add the class to open the window useing window id
}

/** close window */
function closeWindow(windowID) {
  document.getElementById(windowID).classList.remove("open-window") // add the class to close the window useing window id
}

/** fulls screen window */
function fullscreenWindow(windowID) {
  document.getElementById(windowID).classList.toggle("full-screen-window") // add the class to full screen the window useing window id
}

/** make one window the top from others */
function topWindow(windowID) {
  windows.forEach(window => {
    window.classList.remove("top") // remove the class from all windows
  })
  document.getElementById(windowID).classList.add("top") // add the class to the window useing window id
}

/** handel all close btns */
windowsCloseBtns.forEach(btn => { // for all close window buttons
  btn.addEventListener("click",() => {
    let btnID = btn.id; // get the close button id
    closeWindow(btnID.slice(0,-6))// get the window id from the btn and close it
    // btnID.slice(0,-6) >> "browser-close" => "browser"
  })
});

/** handel all full screen btns */
windowsFullScreenBtns.forEach(btn => { // for all close window buttons
  btn.addEventListener("click",() => {
    let btnID = btn.id; // get the close button id
    fullscreenWindow(btnID.split("-")[0])// get the window id from the btn and close it
    // btnID.slice(0,-6) >> "browser-close" => "browser"
  })
});

/** handel all open btns */
windowsOpenBtns.forEach(windowOpenBtn => { // for all open window buttons
  let btnID = windowOpenBtn.id; // get the open button id
  windowOpenBtn.addEventListener("click",() => {
    openWindow(btnID.slice(0,-5)) // get the window id from the btn and open it
    // btnID.slice(0,-5) >> "browser-open" => "browser"
    topWindow(btnID.slice(0,-5)) // get the window id from the btn and make it the top
    // btnID.slice(0,-5) >> "browser-open" => "browser"
  })
});


/** handel all windows properties */
windows.forEach(window => { // for all windows
    dragElement(window); // add the drag function to all windows
    window.addEventListener("mousedown",() => {
      topWindow(window.id) // make the window the top when the window clicked ("mouse down") 
    })
});

/** darg function */
/** this function is from w3schools website (https://www.w3schools.com/howto/howto_js_draggable.asp) */
function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "-header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "-header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}