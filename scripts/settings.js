function changeBG(bgName) {
    main.style.backgroundImage = `url(../media/${bgName})`;
    document.getElementById("current-background").style.backgroundImage = `url(../media/${bgName})`;
}