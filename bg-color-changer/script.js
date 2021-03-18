const button = document.querySelector('button');
const body = document.querySelector('body');
const colors = [
    'maroon', 
    'navyblue', 
    'green', 
    'purple', 
    'orange', 
    'Gold', 
    'brown'
];

body.style.backgroundColor = 'steelblue'; //set initial background color
button.addEventListener('click', randomColor); //on click executes function

function randomColor(){
    const changeColor = parseInt(Math.random()*colors.length); //chooses random string from array
    body.style.backgroundColor = colors[changeColor]; //change bg color
};