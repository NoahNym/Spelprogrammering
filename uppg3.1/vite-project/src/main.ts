import './style.css'

const canvas = document.querySelector('canvas')!;
const context = canvas.getContext('2d')!;

const circles = [
    { x: canvas.width / 2 - 200, y: canvas.height / 2, radius: 50, color: 'red', visible: false },
    { x: canvas.width / 2, y: canvas.height / 2, radius: 50, color: 'green', visible: false },
    { x: canvas.width / 2 + 200, y: canvas.height / 2, radius: 50, color: 'blue', visible: false }
];

let startTime = null; // The time when the game started
let lastCircleTime = 0; // The time when the last circle appeared

function gameLoop(timestamp) {
    if (!startTime) startTime = timestamp; // Set the start time if not set

    const elapsed = timestamp - startTime; // Calculate the time since the game started
    const timeSinceLastCircle = timestamp - lastCircleTime; // Calculate time since the last circle appeared

    if (timeSinceLastCircle >= 1000) {
        const nextCircle = circles.find(circle => !circle.visible); // Find the next invisible circle
        if (nextCircle) {
            nextCircle.visible = true;
            lastCircleTime = timestamp; // Update the last circle appearance time
        }
    }

    requestAnimationFrame(gameLoop);
    update(elapsed);
    render();
}

function update(elapsed) {
    // Update logic if needed
}

function render() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Render visible circles
    circles.forEach(circle => {
        if (circle.visible) {
            context.fillStyle = circle.color;
            context.beginPath();
            context.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
            context.fill();
        }
    });
}

// Start the game loop
requestAnimationFrame(gameLoop);
