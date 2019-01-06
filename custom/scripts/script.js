const nav = document.getElementById("nav-bar")
const navBar = document.getElementById("menu-bar")

navBar.addEventListener("click", function () {
    nav.classList.toggle("active")
}) 

if (window.innerWidth < 501) {
    nav.addEventListener('click', function () {
        nav.classList.toggle("active")
    })
}
