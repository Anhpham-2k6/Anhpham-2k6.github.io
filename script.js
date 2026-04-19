function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}

function goToRegister() {
    alert("Demo đăng ký (bạn có thể gắn Google Form)");
}

/* SCROLL EFFECT */
window.addEventListener("scroll", () => {
    document.querySelectorAll(".section").forEach(el => {
        let top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            el.classList.add("reveal", "active");
        }
    });
});
