let iconMenu = document.querySelector("#iconMenu")
let menu = document.querySelector("#menu")
let iconX = document.querySelector("#iconX")


iconMenu.addEventListener("click", () => {
    menu.style.display="block"
})


iconMenu.addEventListener("click", () => {
    menu.style.display="block"
    iconX.style.display = "block"
    iconMenu.style.display = "none"


})

iconX.addEventListener("click", ()=>{
    menu.style.display="none"
    iconX.style.display="none"
    iconMenu.style.display="block"

})

