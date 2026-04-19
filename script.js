function scrollToSection(id){
document.getElementById(id).scrollIntoView({behavior:"smooth"});
}

function register(){
alert("Đăng ký thành công");
}

function toggleChat(){
let box=document.getElementById("chatbox");
box.style.display = box.style.display==="flex" ? "none":"flex";
}

function sendMsg(){
let input=document.getElementById("chatInput");
let body=document.getElementById("chatBody");

body.innerHTML += "<p>"+input.value+"</p>";
input.value="";
}
