const REGISTER_LINK = "https://forms.gle/YOUR_LINK_HERE";

/* BUTTON */
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

function goToRegister() {
    window.open(REGISTER_LINK, "_blank");
}

/* SAKURA ANIMATION */
const canvas = document.getElementById("sakura");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let petals = [];

for (let i = 0; i < 30; i++) {
    petals.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 4 + 2,
        d: Math.random() * 2
    });
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "pink";
    petals.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
    });
    update();
}

function update() {
    petals.forEach(p => {
        p.y += p.d;
        if (p.y > canvas.height) {
            p.y = 0;
        }
    });
}

setInterval(draw, 30);