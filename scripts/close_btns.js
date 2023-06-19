function closeWindow(windowID) {
  document.getElementById(windowID).classList.remove("open-window"); // add the class to close the window useing window id
}

/** handel all close btns */
windowsCloseBtns.forEach((btn) => {
  // for all close window buttons
  btn.addEventListener("click", () => {
    let btnID = btn.id; // get the close button id
    closeWindow(btnID.slice(0, -6)); // get the window id from the btn and close it
    // btnID.slice(0,-6) >> "browser-close" => "browser"
  });
});
