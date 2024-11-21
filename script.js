const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particlesArray = [];
const colors = ['#ff0044', 'blue', '#ff8787', 'red', 'pink','#e280e5c2'];

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
    document.getElementById('audio4')
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
});