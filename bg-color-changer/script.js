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

body.style.backgroundColor = 'steelblue';
button.addEventListener('click', randomColor);

function randomColor(){
    const changeColor = parseInt(Math.random()*colors.length);
    body.style.backgroundColor = colors[changeColor];
};