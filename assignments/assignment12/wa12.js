/*get mouse position in box
uses x client cord for first 3 num and y client cord for second set
Third set uses x cord of screen*/

let screenLog = document.querySelector('#screen-log');
let selectionNum = document.querySelector('#number-entered');
const submitButton = document.querySelector('.submit-button').addEventListener('click', submit);
document.addEventListener('mousemove', logKey);
document.addEventListener('click', selectNumber);

function submit() {
    alert(selectionNum.textContent);
};

function logKey(e) {
  screenLog.innerText = `
    Screen X/Y: ${e.screenX}, ${e.screenY}
    Client X/Y: ${e.clientX}, ${e.clientY}`;
};

function selectNumber(e) {
    var numSet1 = (e.clientX % 1000);
    if(numSet1 < 100){
        numSet1 += 100;
    }
    var numSet2 = e.clientY;
    if (numSet2 < 100) {
        numSet2 += 100;
    }
    var numSet3 = e.screenX + Math.trunc((Math.random() * 7999));
    selectionNum.innerText = '(' + numSet1.toString() + ') - ' + numSet2.toString() + ' - ' + numSet3.toString();
};