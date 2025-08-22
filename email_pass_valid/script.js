let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("form");
let small = document.querySelector("small");
let show_pswrd = document.querySelector("#show_pswrd");
let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
//let pswrdType = password.getAttribute('type');
const eyeIcon = show_pswrd.querySelector('i');
show_pswrd.addEventListener("click", function () {
    if (password.getAttribute('type') === "password") {
        password.setAttribute("type", "text");
        show_pswrd.textContent = 'Hide';
    } else {
        password.setAttribute('type', 'password');
        show_pswrd.textContent = "Show";
    }
});
password.addEventListener("click", function () {
    small.style.display = "initial";
});

form.addEventListener("submit", function (events) {
    if (emailRegex.test(email.value) && passwordRegex.test(password.value)) {
        alert("Submitted. Thanks!")
    } else {
        events.preventDefault();
        alert("Form not submitted. Please recheck for errors.");
    }
});