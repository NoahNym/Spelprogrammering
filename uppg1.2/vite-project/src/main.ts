import './style.css'

const canvas = document.querySelector('canvas')!;
const context = canvas.getContext('2d')!;


//Yellow Circle
context.fillStyle = 'yellow';
context.lineWidth = 10
context.beginPath();
context.arc(canvas.width / 2,  canvas.height / 2, 200, 0, 2 * Math.PI);
context.fill();
context.stroke();


//Left Eye
context.fillStyle = 'white';
context.lineWidth = 10
context.beginPath();
context.arc(canvas.width / 2 - 75,  canvas.height / 2, 37, 0, 2 * Math.PI);
context.fill();
context.stroke();

//Left Pupil
context.fillStyle = 'black';
context.beginPath();
context.arc(canvas.width / 2 - 75,  canvas.height / 2 + 3, 14, 0, 2 * Math.PI);
context.fill()

//Right Eye
context.fillStyle = 'white';
context.lineWidth = 10
context.beginPath();
context.arc(canvas.width / 2 +75,  canvas.height / 2, 37, 0, 2 * Math.PI);
context.fill();
context.stroke();

//Right Pupil
context.fillStyle = 'black';
context.beginPath();
context.arc(canvas.width / 2 +75,  canvas.height / 2 + 3, 14, 0, 2 * Math.PI);
context.fill()

//Mouth
context.fillStyle = 'red';
context.lineWidth = 10
context.beginPath();
context.arc(canvas.width / 2, canvas.height / 2 + 90, 43, 0, Math.PI);context.fill();
context.closePath()
context.stroke();
