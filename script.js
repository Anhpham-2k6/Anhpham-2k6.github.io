function scrollToSection(id){
document.getElementById(id).scrollIntoView({behavior:'smooth'});
}

function register(){
window.open("https://forms.gle/", "_blank");
}

function contact(){
alert("Email: smartdata@gmail.com");
}

function goToSite(){
window.open("https://google.com");
}

/* SCROLL */
window.addEventListener("scroll",()=>{
document.querySelectorAll(".reveal").forEach(el=>{
if(el.getBoundingClientRect().top < window.innerHeight-100){
el.classList.add("show");
}
});
});

/* ICON BACKGROUND */
const icons=["🤖","📊","💻","⚡","🧠"];

for(let i=0;i<20;i++){
let el=document.createElement("span");
el.innerText=icons[Math.floor(Math.random()*icons.length)];
el.style.position="absolute";
el.style.left=Math.random()*100+"%";
el.style.top=Math.random()*100+"%";
el.style.cursor="pointer";

el.onclick=()=>{
el.style.transform="scale(2)";
setTimeout(()=>el.remove(),300);
};

document.body.appendChild(el);
}
