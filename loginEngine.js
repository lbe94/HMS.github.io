/**
 * Created by Luka on 9.11.2016.
 */
window.onload = function () {

    // elements declaration
    var loginButton = document.getElementById('loginButton');
    var loginDiv = document.getElementById('login');
    var userInput = document.getElementById('userInput');
    var passInput = document.getElementById('passInput');



    loginButton.onclick = function () {
        var check = validateInputs();
        console.log(check);
        if (check) {
            if (loginDiv.style.visibility !== 'hidden') {
                window.open("./content.html", "_self");
            }
        }
    };

    var validateInputs = function () {
        if (userInput.value === '' || userInput.value === userInput.defaultValue) {
            return false;
        }
        if (passInput.value === '' || passInput.value === passInput.defaultValue) {
            return false;
        }
        return true;
    };

}