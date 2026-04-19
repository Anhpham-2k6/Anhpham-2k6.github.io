function goToSite(){
let input = document.getElementById("urlInput").value;
if(!input.startsWith("http")){
input="https://"+input;
}
window.open(input);
}

function scrollToSection(id){
document.getElementById(id).scrollIntoView({behavior:"smooth"});
}

function register(){
alert("Đăng ký thành công");
}
