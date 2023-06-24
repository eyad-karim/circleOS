function changeBG(bgName) {
    main.style.backgroundImage = `url('./media/${bgName}')`;
    document.getElementById("current-background").style.backgroundImage = `url('./media/${bgName}')`;
}
function uploadBG() {
    main.style.backgroundImage = `url('${URL.createObjectURL(customBgBtn.files[0])}')`;
    document.getElementById("current-background").style.backgroundImage = `url('${URL.createObjectURL(customBgBtn.files[0])}')`;
}