const email = document.getElementById("email");

const chechking = function() {
    console.log(123);
    email.value === "" ? alert("Please enter your email") : alert("Its ok");
}