import './style.css'

const canvas = document.querySelector('canvas')!;
const context = canvas.getContext('2d')!;

//Hollow rectangle
context.strokeStyle = 'red';
context.lineWidth = 10;
context.strokeRect(canvas.width / 2 - 175, 175, 350, 100);

//Red Square
context.fillStyle = 'red';
context.fillRect(canvas.width / 2 - 55, 295, 110, 110)

//Blue Circle
context.fillStyle = 'blue';
context.beginPath();
context.arc(275, 350, 50, 0, 2 * Math.PI);
context.fill();

//Hollow circle
context.lineWidth = 8;
context.strokeStyle = "blue"
context.fillStyle = 'white';
context.beginPath();
context.arc(525, 350, 50, 0, 2 * Math.PI);
context.fill();
context.stroke();