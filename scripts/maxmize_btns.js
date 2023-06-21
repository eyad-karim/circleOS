
function maxmizeWindow(windowID) {
    document.getElementById(windowID).classList.toggle("maxmize-window");
    document.getElementById(windowID).classList.remove("dragable");
}

windowsMaxmizeBtns.forEach(btn=> {
    let btnID = btn.id;
    btn.addEventListener("click",() => {
        maxmizeWindow(btnID.split("-")[0])
    })
})