const REGISTER_LINK = "https://forms.gle/YOUR_LINK_HERE";

function goToRegister() {
    window.open(REGISTER_LINK, "_blank");
}

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}