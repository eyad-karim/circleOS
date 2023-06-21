dragSelectorLogic();
function dragSelectorLogic() {

    document.addEventListener("mousedown", function(e1) {
        if (openedWindows) {
            console.log(openedWindows);
        } else {
            dragSelectorCode();
        }

        function dragSelectorCode() {
            select.style.display = "block";

            select.style.width = 0 + "px";
            select.style.height = 0 + "px";

            firstPositionX = e1.clientX;
            firstPositionY = e1.clientY;

            select.style.top = firstPositionY + "px";
            select.style.left = firstPositionX + "px";

            select.style.transition = "none";

            document.addEventListener("mousemove", function(e2) {
                lastPositionX = e2.clientX;
                lastPositionY = e2.clientY;
                if ((firstPositionX - lastPositionX) < 0) {
                    select.style.width = Math.round(lastPositionX - firstPositionX) + "px";
                }
                else {
                    select.style.width = Math.round(firstPositionX - lastPositionX) + "px";
                    select.style.left = lastPositionX + "px";
                }
                if ((firstPositionY - lastPositionY) < 0) {
                    select.style.height = Math.round(lastPositionY - firstPositionY) + "px";
                }
                else {
                    select.style.height = Math.round(firstPositionY - lastPositionY) + "px";
                    select.style.top = lastPositionY + "px";
                }
            });
            document.addEventListener("mouseup", function() {
                select.style.width = "0px";
                select.style.height = "0px";
                select.style.transitionDuration = "0.3s";

                setTimeout(function() {
                    select.style.display = "none";
                }, 300);
            });
        }
    });
}