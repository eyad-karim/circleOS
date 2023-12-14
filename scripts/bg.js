function uploadBG() {
    main.style.backgroundImage = `url('${URL.createObjectURL(customBgBtn.files[0])}')`;
    document.getElementById("current-background").style.backgroundImage = `url('${URL.createObjectURL(customBgBtn.files[0])}')`;
}
function uploadPI() {
    startOpenBtn.style.backgroundImage = `url('${URL.createObjectURL(customPiBtn.files[0])}')`;
    document.getElementById("current-profile").style.backgroundImage = `url('${URL.createObjectURL(customPiBtn.files[0])}')`;
}

bgPositions.forEach(position => {
    position.addEventListener('click',()=>{
        let id = position.id;
        let p = id.replace('-'," ")
        main.style.backgroundPosition = p;
        document.getElementById("current-background").style.backgroundPosition = p;
    })
});