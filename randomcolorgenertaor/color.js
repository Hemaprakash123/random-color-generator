let bgColorsArray = ["#e75d7c", "#b16cef", "#53cca4", "#efc84d", "#628ef0", "#184b73", "#883e7f", "#ed048b"];
let bg = document.getElementById("bgContainer");
bg.style.backgroundColor = bgColorsArray[0];

function colorgenerate() {
    let length = bgColorsArray.length;
    let random = Math.ceil(Math.random() * (length - 1));
    let c = bgColorsArray[random]
    bg.style.backgroundColor = c;
}