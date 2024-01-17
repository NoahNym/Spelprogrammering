import './style.css'

const canvas = document.querySelector('canvas')!;
const context = canvas.getContext('2d')!;

// the triangle
context.beginPath();
context.moveTo(canvas.width / 2 , 200);
context.lineTo(canvas.width / 2 -100, 350);
context.lineTo(canvas.width / 2 + 100, 350);
context.closePath();

// the outline
context.lineWidth = 40;
context.strokeStyle = 'red';
context.stroke();

// the fill color
context.fillStyle = "yellow";
context.fill();