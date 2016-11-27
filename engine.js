/**
 * Created by Luka on 28.10.2016.
 */

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
var reservationsLink = document.getElementById('reservationsLink');
var dashboardLink = document.getElementById('dashboardLink');
var cashierLink = document.getElementById('cashierLink');
var facilitiesLink = document.getElementById('facilitiesLink');
var mailLink = document.getElementById('mailLink');
var businessLink = document.getElementById('businessLink');
var tasksLink = document.getElementById('tasksLink');

var checkboxMain = document.getElementById('menuToggle');
var tasksList = document.getElementById('tasksList');
var reservationsList = document.getElementById('reservationsList');
var facilitiesList = document.getElementById('facilitiesList');
var tasksListOnTasks = document.getElementById('tasksListOnTasks');
var mailList = document.getElementById('mailList');
var businessGraph = document.getElementById('businessGraph');
var graphCanvas = document.getElementById('graphCanvas');

var addReservation = document.getElementById('newReservation');
var overlayDiv = document.getElementById('overlayDiv');
var tasksOverlay = document.getElementById('tasksOverlay');
var addTask = document.getElementById('addTask');

var cancelNewReservation = document.getElementById('cancelNewReservation');
var confirmNewReservation = document.getElementById('confirmNewReservation');

var cancelNewTask = document.getElementById('cancelNewTask');
var confirmNewTask = document.getElementById('confirmNewTask');

var arrival = document.getElementById('arrivalDate');
var departure = document.getElementById('departureDate');
var numPersons = document.getElementById('numPersons');
var nameInput = document.getElementById('name');
var surnameInput = document.getElementById('surname');
var mailInput = document.getElementById('Email');
var phoneInput = document.getElementById('phone');

var cashierTable = document.getElementById('cashierTable');
var addItem = document.getElementById('addItem');

var articleInput = document.getElementById('articleInput');
var quantityInput = document.getElementById('quantityInput');

var totalAmount = document.getElementById('totalAmount');
var finalAmount = document.getElementById('finalAmount');

var cancelBill = document.getElementById('cancelBill');
var confirmBill = document.getElementById('finishBill');

window.onload = function () {

    menuList.addEventListener("click", function (e) {
        //console.log(e.target.id);

        switch (e.target.id) {
            case 'dashboardLink':
                hideAllDivs();
                dashboardDiv.style.visibility = 'visible';
                dashboardLink.className = "menu-link active";
                overlayDiv.style.visibility = 'hidden';
                tasksOverlay.style.visibility = 'hidden';
                break;

            case 'cashierLink':
                hideAllDivs();
                cashierDiv.style.visibility = 'visible';
                cashierLink.className = "menu-link active";
                overlayDiv.style.visibility = 'hidden';
                tasksOverlay.style.visibility = 'hidden';

                break;

            case 'reservationsLink':
                hideAllDivs();
                reservationsDiv.style.visibility = 'visible';
                reservationsLink.className = "menu-link active";
                overlayDiv.style.visibility = 'hidden';
                tasksOverlay.style.visibility = 'hidden';
                break;

            case 'facilitiesLink':
                hideAllDivs();
                facilitiesDiv.style.visibility = 'visible';
                facilitiesLink.className = "menu-link active";
                overlayDiv.style.visibility = 'hidden';
                tasksOverlay.style.visibility = 'hidden';
                break;

            case 'tasksLink':
                hideAllDivs();
                tasksDiv.style.visibility = 'visible';
                tasksLink.className = "menu-link active";
                overlayDiv.style.visibility = 'hidden';
                tasksOverlay.style.visibility = 'hidden';
                break;

            case 'mailLink':
                hideAllDivs();
                mailDiv.style.visibility = 'visible';
                mailLink.className = "menu-link active";
                overlayDiv.style.visibility = 'hidden';
                tasksOverlay.style.visibility = 'hidden';
                break;

            case 'businessLink':
                hideAllDivs();
                businessDiv.style.visibility = 'visible';
                businessLink.className = "menu-link active";
                overlayDiv.style.visibility = 'hidden';
                tasksOverlay.style.visibility = 'hidden';
        }
    });

    checkboxMain.addEventListener("click", function (e) {
        if (checkboxMain.checked) {
            tasksList.style.marginLeft = '2.5%';
            reservationsList.style.marginLeft = '0';
            facilitiesList.style.marginLeft = '2.5%';
            tasksListOnTasks.style.marginLeft = '2.5%'
            mailList.style.marginLeft = '2.5%';
            businessGraph.style.marginLeft = '2.5%'
        }
        else {
            tasksList.style.marginLeft = '12%';
            reservationsList.style.marginLeft = '18%';
            facilitiesList.style.marginLeft = '12%';
            tasksListOnTasks.style.marginLeft = '12%';
            mailList.style.marginLeft = '18%';
            businessGraph.style.marginLeft = '12%';
        }
    });

    addReservation.addEventListener("click", function (e) {
        overlayDiv.style.visibility = 'visible';
        resetInputValues();
    });

    addTask.addEventListener("click", function (e) {
        tasksOverlay.style.visibility = 'visible';
    });

    cancelNewReservation.addEventListener("click", function (e) {
        overlayDiv.style.visibility = 'hidden';
    });

    confirmNewReservation.addEventListener("click", function (e) {
        overlayDiv.style.visibility = 'hidden';
    });

    cancelNewTask.addEventListener("click", function (e) {
        tasksOverlay.style.visibility = 'hidden';
    });

    confirmNewTask.addEventListener("click", function (e) {
       tasksOverlay.style.visibility = 'hidden';
    });

    addItem.addEventListener("click", function (e) {
        if(articleInput.value.trim() === '' || articleInput.value === articleInput.defaultValue){
            alert("Prosim, vnesite ID rezervacije/artikla!")
        }
        else if(quantityInput.value === quantityInput.defaultValue){
            alert("Prosim, vnesite količino!");
        }
        else if(parseInt(quantityInput.value) < 1){
            alert("Prosim, vnesite veljavno količino!");
        }
        else{
            addElementToBill();
        }
    });

    cancelBill.addEventListener("click", function (e) {
        clearTableContent();
    });

    confirmBill.addEventListener("click", function (e) {
        clearTableContent();
    });

    drawGraphFrame();
    drawGraph(10, 40, 76, 21, 10)

};

var addElementToBill = function () {
    var row = cashierTable.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);

    cell1.innerHTML = articleInput.value;
    cell2.innerHTML = "kos";
    var addition =  cell3.innerHTML = "10 EUR";
    cell4.innerHTML = quantityInput.value;
    var total = cell5.innerHTML = parseInt(addition) *parseInt(quantityInput.value) + " EUR";

    console.log(parseInt(addition));
    console.log("TOTAL AMOUNT: " + parseInt(totalAmount.value));

    var znesek = parseInt(totalAmount.value)  + parseInt(total);
    var DDVZnesek = znesek * 1.23;

    console.log("ZNESEK: " + znesek + "DDV: " + DDVZnesek);

    totalAmount.value = znesek;
    finalAmount.value = DDVZnesek;

    znesek = parseFloat(znesek).toFixed(2);
    DDVZnesek = parseFloat(DDVZnesek).toFixed(2);

    totalAmount.innerHTML = znesek + " EUR";
    finalAmount.innerHTML = DDVZnesek + " EUR";
}

var clearTableContent = function(){
    articleInput.value = articleInput.defaultValue;
    quantityInput.value = quantityInput.defaultValue;
    cashierTable.innerHTML = "";
    totalAmount.value = "0.00";
    finalAmount.value = "0.00";
    totalAmount.innerHTML = "0.00 EUR";
    finalAmount.innerHTML = "0.00 EUR";
}

var hideAllDivs = function () {
    clearTableContent();
    dashboardDiv.style.visibility = 'hidden';
    dashboardLink.className = "menu-link";
    cashierDiv.style.visibility = 'hidden';
    cashierLink.className = "menu-link";
    facilitiesDiv.style.visibility = 'hidden';
    facilitiesLink.className = "menu-link";
    reservationsDiv.style.visibility = 'hidden';
    reservationsLink.className = "menu-link";
    tasksDiv.style.visibility = 'hidden';
    tasksLink.className = "menu-link";
    mailDiv.style.visibility = 'hidden';
    mailLink.className = "menu-link";
    businessDiv.style.visibility = 'hidden';
    businessLink.className = "menu-link";
};

var resetInputValues = function () {
    arrival.value = "";
    departure.value = "";
    numPersons.value = "";
    nameInput.value = "";
    surnameInput.value = "";
    mailInput.value = "";
    phoneInput.value = "";
    articleInput.value = "";
    quantityInput.value = "";
}

var drawGraphFrame = function drawGraphFrame() {
    var ctx = graphCanvas.getContext("2d");

    var height = graphCanvas.height;
    var width = graphCanvas.width;

    var numSteps = 5;
    var stepHeight = height / numSteps;
    var currentHeight = height - stepHeight;

    var sideMargin = width * 0.05;


    ctx.beginPath();
    ctx.strokeStyle = "#c2c2a3";
    ctx.lineWidth = 0.3;
    for (var i = 0; i < numSteps - 1; i++) {
        ctx.moveTo(sideMargin, currentHeight);
        ctx.lineTo(width - sideMargin, currentHeight);
        currentHeight = currentHeight - stepHeight;
    }

    ctx.stroke();
};

var drawGraph = function (_m1, _m2, _m3, _m4, _m5) {

    var arr = [_m1, _m2, _m3, _m4, _m5];

    var ctx = graphCanvas.getContext("2d");

    var width = graphCanvas.width;
    var height = graphCanvas.height;

    var max = findMax(_m1, _m2, _m3, _m4, _m5);
    var min = findMin(_m1, _m2, _m3, _m4, _m5);

    var hU = (height / (max));
    //console.log("HU: " + hU);
    var wU = width / 6;

    ctx.beginPath();
    ctx.strokeStyle = "#3399ff";
    ctx.lineWidth = 2;

    currentWidth = wU;
    ctx.moveTo(currentWidth, height - ((arr[0] / max) * hU));
    currentWidth += wU;
    for (var i = 1; i < 5; i++) {
        ctx.lineTo(currentWidth, height - ((arr[i] / max) * hU));
        currentWidth += wU;
    }
    ctx.stroke();
};

var convertToUnits = function () {

};

var findMax = function (_m1, _m2, _m3, _m4, _m5) {
    var arr = [_m1, _m2, _m3, _m4, _m5];
    var max = 0;
    for (var i = 1; i < 5; i++) {
        if (arr[i] > max) {
            max = i;
        }
    }
    return arr[max];
};

var findMin = function (_m1, _m2, _m3, _m4, _m5) {
    var arr = [_m1, _m2, _m3, _m4, _m5];
    var max = 0;
    for (var i = 1; i < 5; i++) {
        if (arr[i] < max) {
            max = i;
        }
    }
    return arr[max];
};

// get weather data
function getJSON() {
    var url = 'http://api.openweathermap.org/data/2.5/weather';
    $.ajax({
        dataType: "jsonp",
        url: url,
        jsonCallback: 'jsonp',
        data: {q: city},
        cache: false,
        success: function (data) {
            data.city = city;
            callback(data);
        }
    });
};