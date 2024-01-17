
import './style.css'

type ball = {
  radius: number,
  x: number,
  y: number,
  vx: number,
  vy: number,
  fillColor: string,
  strokeColor: string,
  strokeWidth: number,
}





const canvas = document.createElement('canvas')
canvas.width = 800;
canvas.height = 600;
const context = canvas.getContext('2d')!;
document.querySelector('#app')!.append(canvas);


const balls: ball[] = [
  {
    radius: 50,
    x: canvas.width / 4,
    y: canvas.height / 2,
    vx: 0,
    vy: 6,
    fillColor: "red",
    strokeColor: "red",
    strokeWidth: 8
  },
  {
    radius: 50,
    x: canvas.width / 2,
    y: canvas.height / 2,
    vx: 0,
    vy: 8,
    fillColor: "green",
    strokeColor: "green",
    strokeWidth: 8
  },
  {
    radius: 50,
    x:canvas.width / 2 + canvas.width / 4,
    y: canvas.height / 2,
    vx: 0,
    vy: 10,
    fillColor: "blue",
    strokeColor: "blue",
    strokeWidth: 8
  },

];

gameloop();

function gameloop() {
  requestAnimationFrame(gameloop);
  update()
  render()
}
function update() {
  for (let i = 0; i < balls.length; i++) {

    let ball = balls[i]

    ball.x += ball.vx;
    ball.y += ball.vy;

    //right edge
    if (ball.x + ball.radius >= canvas.width) {
      ball.vx = -ball.vx;
      ball.x = canvas.width - ball.radius
    }
    //left edge
    if (ball.x - ball.radius < 0) {
      ball.vx = -ball.vx
      ball.x = ball.radius
    }
    //bottom edge
    if (ball.y + ball.radius >= canvas.height) {
      ball.vy = -ball.vy;
      ball.y = canvas.height - ball.radius
    }
    //top edge
    if (ball.y - ball.radius < 0) {
      ball.vy = -ball.vy
      ball.y = ball.radius
    }



  }
}

function render() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < balls.length; i++) {

    let ball = balls[i]
    drawCircle(ball.x, ball.y, ball.radius, ball.fillColor, ball.strokeColor, ball.strokeWidth);
  }
}


function drawCircle(x: number, y: number, radius: number, fillColor: string, strokeColor: string,
  strokeWidth: number,) {
  context.beginPath();
  context.arc(x, y, radius, 0, Math.PI * 2);

  context.fillStyle = fillColor;
  context.fill();

  context.lineWidth = strokeWidth;
  context.strokeStyle = strokeColor;
  context.stroke();
}