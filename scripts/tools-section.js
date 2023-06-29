toolsOpenBtn.addEventListener("click",() => {
    toolsSection.classList.toggle("open-tools-section")
    widgetsSection.classList.remove("open-widgets-section")
    start.classList.remove("open-start")
})

desktop.addEventListener("click",() => {
    toolsSection.classList.remove("open-tools-section")
})