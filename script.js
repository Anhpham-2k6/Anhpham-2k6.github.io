// =================
// SAFE LOAD
// =================
window.addEventListener("DOMContentLoaded", () => {

    // HERO BUTTON
    window.goToSite = function(){
        let input = document.querySelector(".search-box input").value.trim();

        if(!input.startsWith("http")){
            input = "https://" + input;
        }

        window.open(input, "_blank");
    }

    // BUTTON
    window.register = function(){
        alert("Đăng ký thành công!");
    }

    window.contact = function(){
        alert("Liên hệ: smartdata@gmail.com");
    }

    // =================
    // GALAXY (FIX KHÔNG ĐÈ UI)
    // =================

    const canvas = document.getElementById("galaxy");
    const ctx = canvas.getContext("2d");

    function resize(){
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    resize();
    window.addEventListener("resize", resize);

    let stars = [];

    for(let i=0;i<120;i++){
        stars.push({
            x:Math.random()*canvas.width,
            y:Math.random()*canvas.height,
            r:Math.random()*2,
            speed:Math.random()*0.5
        });
    }

    function draw(){
        ctx.clearRect(0,0,canvas.width,canvas.height);

        stars.forEach(s=>{
            ctx.beginPath();
            ctx.arc(s.x,s.y,s.r,0,Math.PI*2);
            ctx.fillStyle="white";
            ctx.fill();

            s.y += s.speed;

            if(s.y > canvas.height){
                s.y = 0;
            }
        });

        requestAnimationFrame(draw);
    }

    draw();

});
