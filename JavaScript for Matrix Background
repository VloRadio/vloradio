const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

// Set canvas to full screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const fontSize = 16;
const columns = canvas.width / fontSize;

// An array of drops - one per column
const drops = Array.from({ length: columns }).fill(1);

// The characters - taken from the unicode charset
const chars = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズヅブプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴ'.split('');

function draw() {
    // Black BG for the canvas
    // Translucent BG to show trail
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#0F0'; // Green text
    ctx.font = `${fontSize}px monospace`;

    // Looping over drops
    for (let i = 0; i < drops.length; i++) {
        // A random character to print
        const text = chars[Math.floor(Math.random() * chars.length)];

        // x = i*fontSize, y = value of drops[i]*fontSize
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Sending the drop back to the top randomly after it has crossed the screen
        // Adding a randomness to the reset to make the drops scattered on the Y axis
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        // Incrementing Y coordinate
        drops[i]++;
    }
}

setInterval(draw, 33);
