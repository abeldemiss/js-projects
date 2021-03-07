const button = document.querySelector('button');
const body = document.querySelector('body');

const colors = [
    'red', 
    'blue', 
    'green', 
    'purple', 
    'orange', 
    'yellow', 
    'brown'
];

body.style.backgroundColor = 'steelblue';

document.getElementById("btn").addEventListener("click", randomColor);

function randomColor(colors){
    return colors[Math.floor(Math.random() * colors.length)];
}




