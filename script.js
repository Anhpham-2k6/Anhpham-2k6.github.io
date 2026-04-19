function scrollToSection(id){
document.getElementById(id).scrollIntoView({behavior:'smooth'});
}

function register(){
window.open("https://forms.gle/", "_blank");
}

function contact(){
alert("Email: smartdata@gmail.com");
}

/* SCROLL */
window.addEventListener("scroll",()=>{
document.querySelectorAll(".reveal").forEach(el=>{
if(el.getBoundingClientRect().top < window.innerHeight-100){
el.classList.add("show");
}
});
});

/* CLICK EFFECT */
function explodeEffect(el){
el.innerText="💥";
setTimeout(()=>{
el.innerText="🤖";
},500);
}
