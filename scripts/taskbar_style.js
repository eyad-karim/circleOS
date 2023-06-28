function taskbarStyle(style){
    taskbar.classList.remove("joined-style")
    taskbar.classList.remove("boxs-style")
    taskbar.classList.remove("bubbles-style")
    switch (style) {
        case "bubbles":
            
            taskbar.classList.add("bubbles-style")
            break;
    
        case "joined":
            
            taskbar.classList.add("joined-style")
            break;

        case "boxs":
            
            taskbar.classList.add("boxs-style")
            break;
    
        default:
            break;
    }
}


function taskbarRightSectionPosition(style) {
    taskbarRightSection.style.justifyContent = style;
}

function taskbarLeftSectionPosition(style) {
    taskbarLeftSection.style.justifyContent = style;
}