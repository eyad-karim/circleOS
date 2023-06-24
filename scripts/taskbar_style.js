function taskbarStyle(style){
    if (style == "modern") {
        taskbar.classList.remove("classic-style")
        taskbar.classList.add("modern-style")
    }else if (style == "classic") {
        taskbar.classList.add("classic-style")
        taskbar.classList.remove("modern-style")
    }
}