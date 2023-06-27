function taskbarStyle(style){
    if (style == "bubbles") {
        taskbar.classList.remove("joined-style")
        taskbar.classList.add("bubbles-style")
    }else if (style == "joined") {
        taskbar.classList.add("joined-style")
        taskbar.classList.remove("bubbles-style")
    }
}