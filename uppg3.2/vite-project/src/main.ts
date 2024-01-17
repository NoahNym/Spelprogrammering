import './style.css'

const canvas = document.querySelector('canvas')!;
const context = canvas.getContext('2d')!;

const circle = { x: canvas.width / 2, y: canvas.height / 2, radius: 100, color: 'red', visible: false };

let lastToggleTime = 0;
let isCircleVisible = false;

function gameLoop(timestamp) {
    const timeSinceLastToggle = timestamp - lastToggleTime;

    if (timeSinceLastToggle >= 1000) {
        isCircleVisible = !isCircleVisible;
        lastToggleTime = timestamp;
    }

    circle.visible = isCircleVisible;

    context.clearRect(0, 0, canvas.width, canvas.height);


    if (circle.visible) {
        context.fillStyle = circle.color;
        context.beginPath();
        context.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
        context.fill();
    }

    requestAnimationFrame(gameLoop);
}


requestAnimationFrame(gameLoop);
