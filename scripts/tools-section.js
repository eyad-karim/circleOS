setInterval(() => {
    if ( !taskbar.classList.contains("compact-style") ) {
        let btnRect = toolsOpenBtn.getBoundingClientRect();
        let secRect = _toolsSection.getBoundingClientRect();
        let secHalf = secRect.width / 2;
        let btnHalf = btnRect.width / 2;
        _toolsSection.style.left = btnRect.left + btnHalf - secHalf + "px";
    } else {
        _toolsSection.style.left= "auto"
    }
},1000)

clickableTools.forEach(element => {
    element.addEventListener("click",() => {
        element.classList.toggle("turned-on")
    })
})

toolsOpenBtn.addEventListener("click",() => {
    toolsSection.classList.toggle("open-tools-section")
    widgetsSection.classList.remove("open-widgets-section")
    start.classList.remove("open-start")
})

desktop.addEventListener("mousedown",() => {
    toolsSection.classList.remove("open-tools-section")
})