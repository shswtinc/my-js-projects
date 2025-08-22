let progress_color = document.querySelector("#progress_color");
let progress_percent = document.querySelector("#progress_percent");
let count = 0;
setInterval(function () {
    if (count < 99) {
        count++;
        progress_color.style.width = `${count}%`;
        progress_percent.textContent = `${count+1}%`;
    }
},30)