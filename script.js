function scrollToSection(id){
document.getElementById(id).scrollIntoView({behavior:"smooth"});
}

function register(){
alert("Đăng ký thành công!");
}

function contact(){
alert("Liên hệ: smartdata@gmail.com");
}

const els=document.querySelectorAll(".fade");

window.addEventListener("scroll",()=>{
els.forEach(el=>{
if(el.getBoundingClientRect().top<window.innerHeight-100){
el.classList.add("show");
}
});
});
