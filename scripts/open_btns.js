function openWindow(windowID) {
  document.getElementById(windowID).classList.add("open-window");
}
function topWindow(windowID) {
  windows.forEach((window) => {
    window.classList.remove("top");
  });
  document.getElementById(windowID).classList.add("top");
}

windowsOpenBtns.forEach((windowOpenBtn) => {
  let btnID = windowOpenBtn.id;
  windowOpenBtn.addEventListener("click", () => {
    openWindow(btnID.slice(0, -5));

    topWindow(btnID.slice(0, -5));

    start.classList.remove("open-start")
  });
});
