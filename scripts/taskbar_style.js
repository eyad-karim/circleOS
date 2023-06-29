

function taskbarStyle(style){
    taskbar.classList.remove("joined-style")
    taskbar.classList.remove("boxs-style")
    taskbar.classList.remove("bubbles-style")
    taskbar.classList.remove("windows11-style")

    taskbar.classList.add(style + "-style")
    switch (style) {
        case "bubbles":
            
            taskbarSectionsPosition.forEach(element => {
                element.style.display = "block";
            });
            break;
    
        case "joined":
            
            taskbarSectionsPosition.forEach(element => {
                element.style.display = "none";
            });
            break;

        case "boxs":
            
            taskbarSectionsPosition.forEach(element => {
                element.style.display = "block";
            });
            break;

        case "windows11":
            
            taskbarSectionsPosition.forEach(element => {
                element.style.display = "none";
            });
            break;
    
        default:
            break;
    }
}


function taskbarRightSectionPosition(style) {
    taskbarRightSection.classList.remove("justify-right")
    taskbarRightSection.classList.remove("justify-left")
    taskbarRightSection.classList.remove("justify-center")

    taskbarRightSection.classList.add("justify-" + style)
}

function taskbarLeftSectionPosition(style) {
    taskbarLeftSection.classList.remove("justify-right")
    taskbarLeftSection.classList.remove("justify-left")
    taskbarLeftSection.classList.remove("justify-center")

    taskbarLeftSection.classList.add("justify-" + style)
}