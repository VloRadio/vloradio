const canvas = document.getElementById('background');
const ctx = canvas.getContext('2d');

// Set canvas to full screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const barWidth = 10;
const barGap = 5;
const barCount = Math.floor(canvas.width / (barWidth + barGap));
const bars = Array.from({ length: barCount }, () => ({
    height: Math.random() * canvas.height,
    speed: Math.random() * 2 + 1,
}));

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    bars.forEach((bar, index) => {
        const x = index * (barWidth + barGap);
        ctx.fillStyle = '#00FF00';
        ctx.fillRect(x, canvas.height - bar.height, barWidth, bar.height);

        bar.height += bar.speed;
        if (bar.height > canvas.height) {
            bar.height = Math.random() * canvas.height / 2;
            bar.speed = Math.random() * 2 + 1;
        }
    });

    requestAnimationFrame(draw);
}

// Resize canvas on window resize
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    bars.length = Math.floor(canvas.width / (barWidth + barGap));
    bars.fill({ height: Math.random() * canvas.height, speed: Math.random() * 2 + 1 });
});

draw();
