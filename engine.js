/**
 * Created by Luka on 28.10.2016.
 */


window.onload = function () {
    
    // elements declaration
    var mainDiv = document.getElementById('main');

    var dashboardDiv = document.getElementById('dashboard');
    var cashierDiv = document.getElementById('cashier');
    var reservationsDiv = document.getElementById('reservations');
    var facilitiesDiv = document.getElementById('facilities');
    var tasksDiv = document.getElementById('tasks');
    var mailDiv = document.getElementById('mail');
    var businessDiv = document.getElementById('business');

    var menuList = document.getElementById('menuList');

    menuList.addEventListener("click", function (e) {
        console.log(e.target.id);

        switch(e.target.id){
            case 'dashboardLink':
                hideAllDivs();
                dashboardDiv.style.visibility = 'visible';
                break;

            case 'cashierLink':
                hideAllDivs();
                cashierDiv.style.visibility = 'visible';
                break;

            case 'reservationsLink':
                hideAllDivs();
                reservationsDiv.style.visibility = 'visible';
                break;

            case 'facilitiesLink':
                hideAllDivs();
                facilitiesDiv.style.visibility = 'visible';
                break;

            case 'tasksLink':
                hideAllDivs();
                tasksDiv.style.visibility = 'visible';
                break;

            case 'mailLink':
                hideAllDivs();
                mailDiv.style.visibility = 'visible';
                break;

            case 'businessLink':
                hideAllDivs();
                businessDiv.style.visibility = 'visible';
        }
    });

    var hideAllDivs = function () {
        dashboardDiv.style.visibility = 'hidden';
        cashierDiv.style.visibility = 'hidden';
        facilitiesDiv.style.visibility = 'hidden';
        reservationsDiv.style.visibility = 'hidden';
        tasksDiv.style.visibility = 'hidden';
        mailDiv.style.visibility = 'hidden';
        businessDiv.style.visibility = 'hidden'
    };
}