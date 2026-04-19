const REGISTER_LINK = "https://forms.gle/YOUR_LINK_HERE";

function goToRegister() {
    window.open(REGISTER_LINK, "_blank");
}

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}

/* SCROLL REVEAL */
window.addEventListener("scroll", () => {
    document.querySelectorAll(".section").forEach(el => {
        let top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            el.classList.add("reveal", "active");
        }
    });
});