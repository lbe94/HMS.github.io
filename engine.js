/**
 * Created by Luka on 28.10.2016.
 */


window.onload = function () {
    // elements declaration
    var loginButton = document.getElementById('loginButton');
    var loginDiv = document.getElementById('login');
    var mainDiv = document.getElementById('main');


    loginButton.onclick = function() {
        console.log("ININININ");
        if(loginDiv.style.visibility !== 'hidden'){
            loginDiv.style.visibility = 'hidden';
            mainDiv.style.visibility = 'visible';
        }
    }
}