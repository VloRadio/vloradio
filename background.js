const canvas = document.getElementById('background');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Circuit {
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
        ctx.strokeStyle = `rgba(0, 255, 255, ${Math.random()})`;
        ctx.lineWidth = 2;
        ctx.stroke();
    }

    update() {
        this.angle += this.speed;
        this.draw();
    }
}

let circuits = [];
const circuitCount = 300;

for (let i = 0; i < circuitCount; i++) {
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;
    let length = Math.random() * 20 + 10;
    let angle = Math.random() * Math.PI * 2;
    let speed = (Math.random() - 0.5) * 0.02; // Slower speed
    circuits.push(new Circuit(x, y, length, angle, speed));
}

function animate() {
    ctx.fillStyle = 'rgba(18, 18, 18, 0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    circuits.forEach(circuit => circuit.update());

    requestAnimationFrame(animate);
}

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    circuits = [];
    for (let i = 0; i < circuitCount; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        let length = Math.random() * 20 + 10;
        let angle = Math.random() * Math.PI * 2;
        let speed = (Math.random() - 0.5) * 0.02; // Slower speed
        circuits.push(new Circuit(x, y, length, angle, speed));
    }
});

animate();
