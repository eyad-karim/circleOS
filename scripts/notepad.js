function notepadTextSize() {
    notepadTextarea.style.fontSize = notepadTextsizeInput.value + "rem"
    notepadTextsizeValue.innerText = notepadTextsizeInput.value + "rem"
}

function notepadTextAlign(align) {
    notepadTextarea.style.textAlign = align
}

function notepadTextColor() {
    notepadTextarea.style.color = notepadTextcolor.value
}