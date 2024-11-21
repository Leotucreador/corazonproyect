const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particlesArray = [];
const colors = ['#ff0044', '#ff6b6b', '#ff8787', '#ffc1c1'];

class Particle {
    constructor() {
        this.x = canvas.width / 2 + Math.random() * 150 - 75; // Mayor dispersión
        this.y = canvas.height / 2 + Math.random() * 150 - 75;
        this.size = Math.random() * 6 + 2; // Partículas más grandes
        this.speedX = Math.random() * 3 - 1.5; // Mayor velocidad horizontal
        this.speedY = Math.random() * 3 - 1.5; // Mayor velocidad vertical
        this.color = colors[Math.floor(Math.random() * colors.length)];
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.size > 0.2) this.size -= 0.05; // Disminución más lenta
    }
    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function handleParticles() {
    // Generar más partículas por ciclo
    for (let i = 0; i < 5; i++) {
        particlesArray.push(new Particle());
    }

    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();

        // Eliminar partículas muy pequeñas
        if (particlesArray[i].size <= 0.2) {
            particlesArray.splice(i, 1);
            i--;
        }
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpieza de fondo
    handleParticles();
    requestAnimationFrame(animate);
}

animate();
