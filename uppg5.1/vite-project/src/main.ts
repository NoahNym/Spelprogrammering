import './style.css'


const canvas = document.createElement('canvas');
canvas.width = 800;
canvas.height = 600;
const context = canvas.getContext('2d');
document.querySelector('#app').append(canvas);

const radius = 50;
const gravity = 0.6;
const glideFactor = 0.99;
const bounce = -0.8;
let x = 300;
let y = 300;
let velocityX = 0;
let velocityY = 0;
let isJumping = false;

const keys = {};

document.addEventListener('keydown', (event) => {
    keys[event.key] = true;
});

document.addEventListener('keyup', (event) => {
    keys[event.key] = false;
});

function drawBall() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    if (keys['a'] || keys['A']) {
        velocityX -= 0.3;
    } else if (keys['d'] || keys['D']) {
        velocityX += 0.3;
    } else {
        velocityX *= glideFactor;
    }

    if ((keys['w'] || keys['W']) && !isJumping) {
        velocityY = -15;
        isJumping = true;
    }

    velocityY += gravity;
    y += velocityY;
    x += velocityX;

    // Collision with canvas boundaries
    if (x - radius < 0 || x + radius > canvas.width) {
        velocityX *= bounce; // Bounce off side walls
    }
    if (x - radius < 0) {
        x = radius;
    }
    if (x + radius > canvas.width) {
        x = canvas.width - radius;
    }
    if (y + radius > canvas.height) {
        y = canvas.height - radius;
        velocityY *= bounce;
        isJumping = false;
    }

    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2);
    context.fillStyle = 'red';
    context.fill();

    context.lineWidth = 8;
    context.strokeStyle = 'black';
    context.stroke();

    requestAnimationFrame(drawBall);
}

drawBall();