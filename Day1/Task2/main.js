const changeText = document.querySelector("#changeText");
const button = document.querySelector("button");
button.addEventListener("click", () => {
    changeText.textContent = "It was successfully changed";
})