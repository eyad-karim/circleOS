startOpenBtn.addEventListener("click",() => {
    start.classList.toggle("open-start")
    toolsSection.classList.remove("open-tools-section")
    widgetsSection.classList.remove("open-widgets-section")
})

desktop.addEventListener("mousedown",() => {
    start.classList.remove("open-start")
})