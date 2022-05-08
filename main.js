
let menuBtn = document.getElementById("menu-btn")
let menu = document.getElementById("menu")
let closeMenu = document.getElementsByTagName("span")[0]
let contactBtn = document.getElementById("contact-btn")
let contact = document.getElementById("contact")
let closeContact = document.getElementsByTagName("span")[1]

// whenever menu button is clicked
menuBtn.addEventListener("click", function () {
    menu.style.display = "block"
    contact.style.display = "none"

})
// whenever menu close sign is clicked
closeMenu.addEventListener("click", function () {
    menu.style.display = "none"
})

// whenever contact button is clicked
contactBtn.addEventListener("click", function () {
    contact.style.display = "block"
    menu.style.display = "none"

})

//  whenever contact cancel sign is clicked
closeContact.addEventListener("click", function () {
    contact.style.display = "none"
})

