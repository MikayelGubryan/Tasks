const button = document.getElementById("button");
const text = document.getElementById("text");

const show = function() {
    text.innerHTML = text.innerHTML === "Some Text" ? "" : "Some Text";
    button.innerHTML = button.innerHTML === "Hide" ? "Show" : "Hide";
}
