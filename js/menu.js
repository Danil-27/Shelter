const htmlEl = document.documentElement;
const burger = document.querySelector(".burger");
const navbar = document.querySelector(".navbar");


if (burger && htmlEl && navbar){
    // Открывающийся бургер
    burger.addEventListener("click", () => {
        htmlEl.classList.toggle("noScroll")
        navbar.classList.toggle("navbar_click-js")
        burger.classList.toggle("burger_click-js")
    })

    // Закрываюющийся бургер при клике на ссылку
    document.querySelectorAll(".menu__link").forEach(e => {
        e.addEventListener("click", e => {
            htmlEl.classList.remove("noScroll")
            navbar.classList.remove("navbar_click-js")
            burger.classList.remove("burger_click-js")
        })
    })

    // При клике за границей меню 
    navbar.addEventListener("click", e => {
        if (e.target.classList.contains("navbar")){
            htmlEl.classList.remove("noScroll")
            navbar.classList.remove("navbar_click-js")
            burger.classList.remove("burger_click-js")
        }
    })
}



//  Находим ширину окна браузера и удаляем классы на ширине 768
function debounce(originalFunction, timeoutMs) {
    let timeout;
    return (...args) => {
        clearTimeout(timeout); // clear timeout every time the function is called
    timeout = setTimeout(() => originalFunction(...args), timeoutMs); // call the original function once "timeoutMs" ms after the last call have elapsed
}}

let width = window.innerWidth || htmlEl.clientWidth || document.body.clientWidth
function handlerResize() {
    width = window.innerWidth || htmlEl.clientWidth || document.body.clientWidth
    if (width > 767) {
        closeNav()
    }
}

function closeNav() {
    htmlEl.classList.remove("noScroll")
    navbar.classList.remove("navbar_click-js")
    burger.classList.remove("burger_click-js")
}

window.addEventListener("resize", debounce(handlerResize, 500)); 

