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

body.style.backgroundColor = 'maroon';
button.style.margin = '0 auto';

function randomColor(colors){
    return color[Math.floor(Math.random() * colors.length)];
}


button.addEventListener("click", randomColor);
