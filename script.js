function scrollToSection(id){
document.getElementById(id).scrollIntoView({behavior:'smooth'});
}

function register(){
window.open("https://forms.gle/", "_blank");
}

function contact(){
alert("Email: smartdata@gmail.com");
}

/* SCROLL ANIMATION */
const sections = document.querySelectorAll('.section');

window.addEventListener('scroll', () => {
sections.forEach(sec => {
const top = sec.getBoundingClientRect().top;
if(top < window.innerHeight - 100){
sec.classList.add('show');
}
});
});
