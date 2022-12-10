//creating numbers for comparison and selection
var goalNum;
var playerNum = 1;
var max = 9999;
var min = 1;
var numSel;

var ranNum1 = 0;
var ranNum2 = 0;
var ranNum3 = 0;
var ranNum4 = 0;
var ranNum5 = 0;
var ranNum6 = 0;

//all the buttons corresponding to a function
const newNumsButton = document.querySelector(".new-numbers-button");
newNumsButton.addEventListener('click', newNumFunc);

const multiplyButton = document.querySelector(".multiply-selected");
multiplyButton.addEventListener('click', multFunc);

const divideButton = document.querySelector(".divide-selected");
divideButton.addEventListener('click', divFunc);

const addButton = document.querySelector(".add-selected");
addButton.addEventListener('click', addFunc);

const subButton = document.querySelector(".subtract-selected");
subButton.addEventListener('click', subFunc);

const submitButton = document.querySelector(".js-submit-num");
submitButton.addEventListener('click', submit);

const playerNumDisplay = document.querySelector('#js-playerNum-text');

//okay that function call is bizarre but it calls automatically due to parameter
const ranNumButton1 = document.querySelector('.js-ranNum1-button');
ranNumButton1.addEventListener('click', function() {
    selection(1);
});

const ranNumButton2 = document.querySelector('.js-ranNum2-button');
ranNumButton2.addEventListener('click', function() {
    selection(2);
});

const ranNumButton3 = document.querySelector('.js-ranNum3-button');
ranNumButton3.addEventListener('click', function() {
    selection(3);
});

const ranNumButton4 = document.querySelector('.js-ranNum4-button');
ranNumButton4.addEventListener('click', function() {
    selection(4);
});

const ranNumButton5 = document.querySelector('.js-ranNum5-button');
ranNumButton5.addEventListener('click', function() {
    selection(5);
});

const ranNumButton6 = document.querySelector('.js-ranNum6-button');
ranNumButton6.addEventListener('click', function() {
    selection(6);
});

//little class to show if number has been used or not on top of what number is
//will set using random later in script
class numRandom {
    constructor(ranNum, used) {
        this.ranNum = ranNum;
        this.used = used;
    }
}

function newNumFunc(){
    //gotta create 6 of the numRand class and a new goal as well as reset player to 0
    playerNum = 1;
    goalNum = Math.floor(Math.random() * (max - min + 1)) + min;
    ranNum1 = new numRandom(Math.floor(Math.random() * ((100 - min + 1) + min)), false);
    ranNum2 = new numRandom(Math.floor(Math.random() * ((100 - min + 1) + min)), false);
    ranNum3 = new numRandom(Math.floor(Math.random() * ((100 - min + 1) + min)), false);
    ranNum4 = new numRandom(Math.floor(Math.random() * ((100 - min + 1) + min)), false);
    ranNum5 = new numRandom(Math.floor(Math.random() * ((100 - min + 1) + min)), false);
    ranNum6 = new numRandom(Math.floor(Math.random() * ((100 - min + 1) + min)), false);

    ranNumButton1.textContent = ranNum1.ranNum;
    ranNumButton2.textContent = ranNum2.ranNum;
    ranNumButton3.textContent = ranNum3.ranNum;
    ranNumButton4.textContent = ranNum4.ranNum;
    ranNumButton5.textContent = ranNum5.ranNum;
    ranNumButton6.textContent = ranNum6.ranNum;
    displayGoal();
};

//generate numbers after all those declarations and functions so we have access to everything
function displayGoal(){
    const goalDisplay = document.querySelector('#js-goalNum-text');
    goalDisplay.textContent = "Goal Number: ";
    goalDisplay.textContent += goalNum;
    playerNumDisplay.textContent = "Player Number: ";
    playerNumDisplay.textContent += playerNum;
};

function selection(ranNumSel) {
    //branch and assign numSel, also set used to true in class
    //will check here too if num has been used before, if so, alert saying already used and return
    if(ranNumSel === 1){
        if(ranNum1.used){
            alert('You have already used that number');
            return;
        }
        numSel = ranNum1.ranNum;
        ranNum1.used = true;
    } 
    else if (ranNumSel === 2) {
        if(ranNum2.used){
            alert('You have already used that number');
            return;
        }
        numSel = ranNum2.ranNum;
        ranNum2.used = true;
    }
    else if (ranNumSel === 3) {
        if(ranNum3.used){
            alert('You have already used that number');
            return;
        }
        numSel = ranNum3.ranNum;
        ranNum3.used = true;
    }
    else if (ranNumSel === 4) {
        if(ranNum4.used){
            alert('You have already used that number');
            return;
        }
        numSel = ranNum4.ranNum;
        ranNum4.used = true;
    }
    else if (ranNumSel === 5) {
        if(ranNum5.used){
            alert('You have already used that number');
            return;
        }
        numSel = ranNum5.ranNum;
        ranNum5.used = true;
    }
    else if (ranNumSel === 6) {
        if(ranNum6.used){
            alert('You have already used that number');
            return;
        }
        numSel = ranNum6.ranNum;
        ranNum6.used = true;
    }
};

//all the lovely math functions, very simple but take two parameters (selected num)
function multFunc(){
    playerNum *= numSel;
    playerNumDisplay.textContent = "Player Number: ";
    playerNumDisplay.textContent += playerNum;
};

function divFunc(){
    playerNum /= numSel;
    playerNumDisplay.textContent = "Player Number: ";
    playerNumDisplay.textContent += playerNum;
};

function addFunc(){
    playerNum += numSel;
    playerNumDisplay.textContent = "Player Number: ";
    playerNumDisplay.textContent += playerNum;
};

function subFunc(){
    playerNum -= numSel;
    playerNumDisplay.textContent = "Player Number: ";
    playerNumDisplay.textContent += playerNum;
};

function submit(){
    if(playerNum === goalNum){
        alert("https://www.youtube.com/watch?v=t64-8IECAek");
    }
    else{
        alert("Incorrect, no Jimmy Carr laugh for you");
    }
};