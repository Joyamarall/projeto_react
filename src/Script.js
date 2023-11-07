
var btn = document.querySelector("#back-to-top");

btn.addEventListener("click", function () {
window.scrollTo(0, 0);
}); 


function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")
}