let nm = document.querySelector("#name");
let form = document.querySelector("form");
let mail_input = document.querySelector("#mail");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


form.addEventListener("submit", function (events) {
    events.preventDefault();
    if (nm.value.length <= 2) {
        document.querySelector("#nameWarn").style.display = "initial";
    } else {
        document.querySelector("#nameWarn").style.display = "none";
    }
    if (emailRegex.test(mail_input.value) <= 2) {
        console.log('Email is valid!');
    } else {
        //events.preventDefault();
        console.log('Email is Invalid!');
        alert("Invalid email! ");//alert pop-up

    }
});