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
var tasksLink = document.getElementById('tasksLink')


var graphCanvas = document.getElementById('graphCanvas');



window.onload = function () {

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

    drawGraphFrame();
    drawGraph(10,40,76,21,10)

};

var hideAllDivs = function () {
    dashboardDiv.style.visibility = 'hidden';
    cashierDiv.style.visibility = 'hidden';
    facilitiesDiv.style.visibility = 'hidden';
    reservationsDiv.style.visibility = 'hidden';
    tasksDiv.style.visibility = 'hidden';
    mailDiv.style.visibility = 'hidden';
    businessDiv.style.visibility = 'hidden'
};

var drawGraphFrame = function drawGraphFrame(){
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
    for(var i = 0; i < numSteps - 1; i++){
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
    console.log("HU: " + hU);
    var wU = width / 6;

    ctx.beginPath();
    ctx.strokeStyle = "#3399ff";
    ctx.lineWidth = 2;

    currentWidth = wU;
    ctx.moveTo(currentWidth, height - ((arr[0] / max) * hU));
    currentWidth += wU;
    for(var i = 1; i < 5; i++){
        ctx.lineTo(currentWidth, height - ((arr[i] / max) * hU));
        currentWidth += wU;
    }
    ctx.stroke();
};

var convertToUnits = function() {

};

var findMax = function(_m1, _m2, _m3, _m4, _m5){
    var arr = [_m1, _m2, _m3, _m4, _m5];
    var max = 0;
    for(var i = 1; i < 5; i++){
        if(arr[i] > max){
            max = i;
        }
    }
    return arr[max];
};

var findMin = function(_m1, _m2, _m3, _m4, _m5){
    var arr = [_m1, _m2, _m3, _m4, _m5];
    var max = 0;
    for(var i = 1; i < 5; i++){
        if(arr[i] < max){
            max = i;
        }
    }
    return arr[max];
};

//______________________________________________________________________________________________________________________

function LineChart(con) {


}