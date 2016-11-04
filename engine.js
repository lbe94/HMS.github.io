/**
 * Created by Luka on 28.10.2016.
 */


window.onload = function () {
    // elements declaration
    var loginButton = document.getElementById('loginButton');
    var loginDiv = document.getElementById('login');
    var mainDiv = document.getElementById('main');
    var userInput = document.getElementById('userInput');
    var passInput = document.getElementById('passInput');

    loginButton.onclick = function () {
        var check = validateInputs();
        console.log(check);
        if (check) {
            if (loginDiv.style.visibility !== 'hidden') {
                loginDiv.style.visibility = 'hidden';
                mainDiv.style.visibility = 'visible';
            }
        }
    };

    validateInputs = function () {
        if (userInput.value === '' || userInput.value === userInput.defaultValue) {
            return false;
        }
        if (passInput.value === '' || passInput.value === passInput.defaultValue) {
            return false;
        }
        return true;
    }


}