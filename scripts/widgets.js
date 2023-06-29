widgetsOpenBtn.addEventListener("click",() => {
    widgetsSection.classList.toggle("open-widgets-section")
    toolsSection.classList.remove("open-tools-section")
    start.classList.remove("open-start")
})

desktop.addEventListener("click",() => {
    widgetsSection.classList.remove("open-widgets-section")
})