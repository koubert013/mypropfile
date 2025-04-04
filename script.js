function showTime() {
    document.getElementById('currentTime').innerHTML = "Current Time: " + new Date().toLocaleString();
}
showTime();
setInterval(showTime, 1000);

// Dark Mode Toggle
document.getElementById("themeToggle").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});
