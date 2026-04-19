function goToSite(){
    let input = document.getElementById("urlInput").value;

    if(!input.startsWith("http")){
        input = "https://" + input;
    }

    window.open(input, "_blank");
}

function register(){
    alert("Đăng ký thành công!");
}
