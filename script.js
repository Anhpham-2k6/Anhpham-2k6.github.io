function scrollTo(id) {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    } else {
        alert("Không tìm thấy section: " + id);
    }
}

function register() {
    window.open("https://forms.gle/your-link", "_blank");
}

function contact() {
    alert("Liên hệ: smartdata@gmail.com");
}
