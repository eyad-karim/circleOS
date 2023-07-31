widgetsOpenBtn.addEventListener("click",() => {
    widgetsSection.classList.toggle("open-widgets-section")
    toolsSection.classList.remove("open-tools-section")
    start.classList.remove("open-start")
})

desktop.addEventListener("mousedown",() => {
    widgetsSection.classList.remove("open-widgets-section")
})