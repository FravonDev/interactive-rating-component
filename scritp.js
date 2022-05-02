let currentSelected;
function getButtonValue(btnValue){
    // console.log(btnValue)
    validateValue(btnValue)
    return btnValue;
}

function validateValue(btnValue){
//verify if the value of seleceted button matches to another button
var buttons = document.getElementsByClassName('btn-ratting')
currentSelected = btnValue;

for(var i = 0; i < buttons.length; i++){
    if (buttons[i].value == currentSelected){
        buttons[i].classList.add('selected');
        }else{
            buttons[i].classList.remove('selected');
        }
    }
}

function showSelection(currentSelected){
//when submit, hidde the main card and show the thanks card
let mainCard = document.getElementsByClassName('main-card')[0];
mainCard.style.display = 'none';
let thanksCard = document.querySelector('.thanks-card')
console.log(thanksCard)
thanksCard.style.visibility = 'visible';

}
