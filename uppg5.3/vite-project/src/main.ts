import './style.css'


const canvas = document.createElement('canvas');
canvas.width = 800;
canvas.height = 600;
const ctx = canvas.getContext('2d')!;
document.querySelector('#app')!.append(canvas);


const player = {
    x: 100,
    y: 100,
    width: 50,
    height: 50,
    speed: 10,
};

const obstacles = [
    { x: 200, y: 100, width: 100, height: 50 },
    { x: 400, y: 300, width: 50, height: 100 },
    { x: 100, y: 450, width: 500, height: 100 },
    { x: 600, y: 100, width: 50, height: 100 },
    { x: 200, y: 200, width: 20, height: 200 },
];

// Define key states
const keys = {
    w: false,
    a: false,
    s: false,
    d: false,
};

// Add event listeners for keydown and keyup events
document.addEventListener("keydown", (event) => {
    if (event.key in keys) {
        keys[event.key] = true;
    }
});

document.addEventListener("keyup", (event) => {
    if (event.key in keys) {
        keys[event.key] = false;
    }
});

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "red";
    ctx.fillRect(player.x, player.y, player.width, player.height);

    ctx.fillStyle = "black";
    for (const obstacle of obstacles) {
        ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
    }
}

function update() {
    // Store the player's current position for collision response
    const prevX = player.x;
    const prevY = player.y;

    let dx = 0;
    let dy = 0;

    if (keys.w) dy -= player.speed;
    if (keys.a) dx -= player.speed;
    if (keys.s) dy += player.speed;
    if (keys.d) dx += player.speed;

    // Move the player horizontally first
    player.x += dx;

    // Check for collisions with obstacles horizontally
    for (const obstacle of obstacles) {
        if (
            player.x < obstacle.x + obstacle.width &&
            player.x + player.width > obstacle.x &&
            player.y < obstacle.y + obstacle.height &&
            player.y + player.height > obstacle.y
        ) {
            // Collision detected, revert player's horizontal position
            player.x = prevX;
        }
    }

    // Move the player vertically
    player.y += dy;

    // Check for collisions with obstacles vertically
    for (const obstacle of obstacles) {
        if (
            player.x < obstacle.x + obstacle.width &&
            player.x + player.width > obstacle.x &&
            player.y < obstacle.y + obstacle.height &&
            player.y + player.height > obstacle.y
        ) {
            // Collision detected, revert player's vertical position
            player.y = prevY;
        }
    }
}

function gameLoop() {
    update();
    draw();
    requestAnimationFrame(gameLoop);
}

gameLoop();