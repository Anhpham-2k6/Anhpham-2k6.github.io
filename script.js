function scrollToSection(id){
document.getElementById(id).scrollIntoView({behavior:'smooth'});
}

function register(){
window.open("https://forms.gle/", "_blank");
}

function contact(){
alert("Email: smartdata@gmail.com");
}

/* ICON BACKGROUND */
const icons = ["💻","📊","🤖","⚡","🧠","📁"];

for(let i=0;i<30;i++){
let span=document.createElement("span");
span.innerText=icons[Math.floor(Math.random()*icons.length)];
span.style.left=Math.random()*100+"%";
span.style.top=Math.random()*100+"%";

span.onclick=()=>{
span.style.transform="scale(2)";
setTimeout(()=>span.remove(),300);
}

document.getElementById("bg-icons").appendChild(span);
}
