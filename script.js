// =========================
// NAVIGATION FUNCTIONS
// =========================

function scrollToSection(id){
    const el = document.getElementById(id);
    if(el){
        el.scrollIntoView({
            behavior: "smooth"
        });
    }
}

// =========================
// HERO SEARCH BUTTON
// =========================

function goToSite(){
    let input = document.querySelector(".search-box input").value.trim();

    if(input === ""){
        alert("Vui lòng nhập đường dẫn");
        return;
    }

    // nếu chưa có http thì thêm vào
    if(!input.startsWith("http")){
        input = "https://" + input;
    }

    window.open(input, "_blank");
}

// =========================
// BUTTON ACTIONS
// =========================

function register(){
    // bạn có thể thay bằng link Google Form thật
    window.open("https://forms.gle/", "_blank");
}

function contact(){
    alert("Liên hệ: smartdata@gmail.com");
}

// =========================
// SCROLL ANIMATION (CHO CÁC SECTION SAU)
// =========================

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
    reveals.forEach(el => {
        const top = el.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){
            el.classList.add("show");
        }
    });
});

// =========================
// MOUSE GLOW (HIỆU ỨNG CHUỘT - WOW)
// =========================

const glow = document.createElement("div");
glow.style.position = "fixed";
glow.style.width = "120px";
glow.style.height = "120px";
glow.style.background = "radial-gradient(circle, rgba(59,130,246,0.4), transparent)";
glow.style.borderRadius = "50%";
glow.style.pointerEvents = "none";
glow.style.zIndex = "999";
document.body.appendChild(glow);

document.addEventListener("mousemove", (e) => {
    glow.style.left = (e.clientX - 60) + "px";
    glow.style.top = (e.clientY - 60) + "px";
});

// =========================
// SIMPLE GALAXY BACKGROUND (CHO PAGE SAU)
// =========================

const canvas = document.createElement("canvas");
canvas.style.position = "fixed";
canvas.style.top = "0";
canvas.style.left = "0";
canvas.style.zIndex = "-1";
document.body.appendChild(canvas);

const ctx = canvas.getContext("2d");

function resizeCanvas(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

// tạo sao
let stars = [];

for(let i = 0; i < 120; i++){
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2,
        speed: Math.random() * 0.5
    });
}

// animation
function animateStars(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    stars.forEach(s => {
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();

        s.y += s.speed;

        if(s.y > canvas.height){
            s.y = 0;
        }
    });

    requestAnimationFrame(animateStars);
}

animateStars();
