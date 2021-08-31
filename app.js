//Create an HTML page containing 3 different buttons, one saying RED, one saying GREEN, and one saying BLUE. 
//When the User holds the mouse over one of the buttons,
 //change the background color according to the text value on the button. The default background color should be white.
//  make a plan
//get all the elements needed. i.e. body and all the buttons
let body = document.getElementById('body');
let red = document.getElementById('red');
let green = document.getElementById('green');
let blue = document.getElementById('blue');
// background color of the body should be set to a default white;
body
let changeColorsRed = 
//add event listeners to all my buttons;
red.addEventListener('click',function(){
    body.style.backgroundColor = 'red'
    });
green.addEventListener('click',function(){
    body.style.backgroundColor = 'green'
    });
blue.addEventListener('click',function(){
    body.style.backgroundColor = 'blue'
    });

