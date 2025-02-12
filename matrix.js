const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

// Set canvas to full screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const fontSize = 16;
const columns = canvas.width / fontSize;

// An array of drops - one per column
const drops = Array.from({ length: columns }).fill(1);

// The characters - music notes
const chars = '♪♫♬♩♭♮♯'.split('');

// Adjust the speed of the drops
const speed = 0.1; // Lower value for slower speed

function draw() {
    // Black BG for the canvas
    // Translucent BG to show trail
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#0F0'; // Green text
    ctx.font = `${fontSize}px monospace`;
    ctx.textBaseline = 'top'; // Align text to the top to make it clearer

    // Looping over drops
    drops.forEach((y, index) => {
        // A random character to print
        const text = chars[Math.floor(Math.random() * chars.length)];
        const x = index * fontSize;

        // Drawing the text
        ctx.fillText(text, x, y * fontSize);

        // Sending the drop back to the top randomly after it has crossed the screen
        // Adding a randomness to the reset to make the drops scattered on the Y axis
        if (y * fontSize > canvas.height && Math.random() > 0.975) {
            drops[index] = 0;
        }

        // Incrementing Y coordinate
        drops[index] += speed;
    });

    requestAnimationFrame(draw);
}

// Resize canvas on window resize
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    drops.length = Math.floor(canvas.width / fontSize);
    drops.fill(1);
});

draw();
