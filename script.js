const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particlesArray = [];
const colors = ['red', 'pink', 'white', 'gold'];

class Particle {
    constructor() {
        this.x = canvas.width / 2 + Math.random() * 150 - 75;
        this.y = canvas.height / 2 + Math.random() * 150 - 75;
        this.size = Math.random() * 6 + 2;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.color = colors[Math.floor(Math.random() * colors.length)];
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.size > 0.2) this.size -= 0.05;
    }
    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function handleParticles() {
    for (let i = 0; i < 5; i++) {
        particlesArray.push(new Particle());
    }

    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();

        if (particlesArray[i].size <= 0.2) {
            particlesArray.splice(i, 1);
            i--;
        }
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    handleParticles();
    requestAnimationFrame(animate);
}

animate();

const corazon = document.querySelector('.corazon');

const audios = [
    document.getElementById('audio1'),
    document.getElementById('audio2'),
    document.getElementById('audio3'),
    document.getElementById('audio4'),
    document.getElementById('audio5')
];

const mensajes = [
    'Yo no diré nada porque con esta se dice todo',
    'aceptame tal como soy',
    'hay miles pero ninguno es yo y lo sabes',
    'una escapadita y ya',
    '¡te dediqué MAI y me pusiste a escuchar...'
];

function pauseAllAudios() {
    audios.forEach(audio => audio.pause());
}

corazon.addEventListener('click', () => {
    pauseAllAudios();
    const randomIndex = Math.floor(Math.random() * audios.length);
    const randomAudio = audios[randomIndex];
    randomAudio.currentTime = 0;
    randomAudio.play();

    const mensaje = document.createElement('h3');
    mensaje.textContent = mensajes[randomIndex]; 

    const maxTop = window.innerHeight - 50;
    const maxLeft = window.innerWidth - 200; 

    mensaje.style.position = 'absolute';
    mensaje.style.top = `${Math.random() * maxTop}px`;
    mensaje.style.left = `${Math.random() * maxLeft}px`;
    mensaje.style.color = 'darkgreen';
    mensaje.style.fontSize = '26px';
    mensaje.style.width = '13rem'

    document.body.appendChild(mensaje);

    setTimeout(() => mensaje.remove(), 2000);
});
