import './style.css'

const canvas = document.querySelector('canvas')!;
const context = canvas.getContext('2d')!;

const circle = { x: canvas.width / 2, y: canvas.height / 2, radius: 50, color: 'yellow', visible: true };
const duration = 3000; // Total duration for each grow-shrink-pause cycle in milliseconds
const maxRadius = 200; // Maximum radius for the circle
const minRadius = 40;  // Minimum radius for the circle

let startTime = null; // The time when the animation started

function gameLoop(timestamp) {
    if (!startTime) startTime = timestamp; // Set the start time if not set

    const elapsed = timestamp - startTime;
    const cycleTime = elapsed % duration; // Calculate time within the current cycle

    if (cycleTime < duration / 4) {
        // Growing phase
        circle.radius = (cycleTime / (duration / 4)) * (maxRadius - minRadius) + minRadius;
    } else if (cycleTime < duration / 2) {
        // Pause at fully grown state
        circle.radius = maxRadius;
    } else if (cycleTime < (3 * duration) / 4) {
        // Shrinking phase
        circle.radius = maxRadius - ((cycleTime - duration / 2) / (duration / 4)) * (maxRadius - minRadius);
    } else {
        // Pause at fully shrunken state
        circle.radius = minRadius;
    }

    context.clearRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = circle.color;
    context.strokeStyle = 'red';
    context.lineWidth = 20; // Set the line width for the stroke
    context.beginPath();
    context.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
    context.fill();
    context.stroke(); // Draw the stroke

    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
