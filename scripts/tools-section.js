toolsOpenBtn.addEventListener("click",() => {
    toolsSection.classList.toggle("open-tools-section")
    start.classList.remove("open-start")
})

desktop.addEventListener("click",() => {
    toolsSection.classList.remove("open-tools-section")
})