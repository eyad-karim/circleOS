function taskbarStyle(style){
    taskbar.classList.remove("joined-style")
    taskbar.classList.remove("boxs-style")
    taskbar.classList.remove("bubbles-style")
    taskbar.classList.remove("compact-style")

    taskbar.classList.add(style + "-style")
}

function taskbarPostion(postion){
    taskbar.classList.remove("left-style")
    taskbar.classList.remove("center-style")
    start.classList.remove("left-style")
    start.classList.remove("center-style")

    taskbar.classList.add(postion + "-style")
    start.classList.add(postion + "-style")
}