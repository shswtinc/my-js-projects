let btn = document.querySelector("button");
let light_theme = document.querySelector(".light_theme");
btn.addEventListener('click', function () {
    light_theme.classList.toggle("dark_theme");
    if (light_theme.classList.contains('dark_theme')) {
        btn.textContent = "Light mode";
    } else {
        btn.textContent = "Dark mode";
    }
});