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
    document.getElementById('audio5'),
    document.getElementById('audio6'),
    document.getElementById('audio7'),
    document.getElementById('audio8'),
    document.getElementById('audio9'),
    document.getElementById('audio10'),
    document.getElementById('audio11'),
    document.getElementById('audio12'),
    document.getElementById('audio13'),
    document.getElementById('audio14'),
    document.getElementById('audio15'),
    document.getElementById('audio16'),
    document.getElementById('audio17'),
    document.getElementById('audio18'),
    document.getElementById('audio19')
];

const mensajes = [
  /*1*/  'si una razón no te convence te daré 10',
  /*2*/  'cuanto te pienso corazonnnnn',
  /*3*/  'cuando te veo siento todo',
  /*4*/  'un amor como el nuestro',
  /*5*/  'en que momento?',
  /*6*/  'eres el cristal de mis pupilas',
  /*7*/  'estas tal cual como me gustan',
  /*8*/  'perdido como el indio en la colina',
  /*9*/  'te seguiré buscando solamente para decirte...',
  /*10*/  'fuiste y serás siempre la razon de mi existir',
  /*11*/  'que tal si te enamoras de...',
  /*12*/  'eres el punto en una noche sin lucero',
  /*13*/  'locaaa',
  /*14*/  'por ti doy hasta lo que no tengo',
  /*15*/  'sabes que como yo no hay otro',
  /*16*/  'haffit lo dice por mi ',
  /*17*/  'todo de usted',
  /*18*/  'soy tuyo y lo sabes',
  /*19*/  'me tienes todo de cabeza',

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
