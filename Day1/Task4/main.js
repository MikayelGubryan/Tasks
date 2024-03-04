const button = document.getElementById("changer");

const change = function() {
    button.innerHTML = button.innerHTML === "Hello" ?  "Goodbye" : "Hello";
}