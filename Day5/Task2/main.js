let firstInput = document.getElementById('firstInput');
let secondInput = document.getElementById('secondInput');

const saveToLocalStorage = function() {
    localStorage.setItem('firstInput', firstInput.value);
    localStorage.setItem('secondInput', secondInput.value);
    firstInput.value = "";
    secondInput.value = "";
}
