let nameInput = document.getElementById("nameInput")
let emailInput = document.getElementById("emailInput")


btn.addEventListener("click", check)
function check(){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(emailRegex.test(emailInput.value) && emailInput.value !== "" && nameInput.value !== ""){
            alert("This is correct");
    }else{
        alert("This is InCorrect");
    }
}