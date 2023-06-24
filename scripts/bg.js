function changeBG(bgName) {
    main.style.backgroundImage = `url('./media/${bgName}')`;
    document.getElementById("current-background").style.backgroundImage = `url('./media/${bgName}')`;
}
function uploadBG() {
    uploaded.src = URL.createObjectURL(customBgBtn.files[0])
    main.style.backgroundImage = `url('${uploaded.src}')`;
    document.getElementById("current-background").style.backgroundImage = `url('${uploaded.src}')`;
}