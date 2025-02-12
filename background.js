const canvas = document.getElementById('background');
const ctx = canvas.getContext('2d');

// Set canvas to full screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Line {
    constructor(x, y, length, angle, speed) {
        this.x = x;
        this.y = y;
        this.length = length;
        this.angle = angle;
        this.speed = speed;
    }

    draw() {
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        this.x += Math.cos(this.angle) * this.length;
        this.y += Math.sin(this.angle) * this.length;
        ctx.lineTo(this.x, this.y);
        ctx.stroke();
    }

    update() {
        this.angle += this.speed;
        this.draw();
    }
}

let lines = [];
const lineCount = 100;
for (let i = 0; i < lineCount; i++) {
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;
    let length = Math.random() * 50 + 20;
    let angle = Math.random() * Math.PI * 2;
    let speed = Math.random() * 0.02 - 0.01;
    lines.push(new Line(x, y, length, angle, speed));
}

function animate() {
    ctx.fillStyle = 'rgba(18, 18, 18, 0.3)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = '#00FF00';
    ctx.lineWidth = 1;

    lines.forEach(line => line.update());

    requestAnimationFrame(animate);
}

// Resize canvas on window resize
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

animate();
