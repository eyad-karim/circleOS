startOpenBtn.addEventListener("click",() => {
    start.classList.toggle("open-start")
    toolsSection.classList.remove("open-tools-section")
})

desktop.addEventListener("click",() => {
    start.classList.remove("open-start")
})