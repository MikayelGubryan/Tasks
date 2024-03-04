const text = document.getElementById("text");
const moveText = document.getElementById("moveText");

const move = function() {
    moveText.innerHTML = text.value;
    text.value = "";
}