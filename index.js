const btnHamburger = document.querySelector('#btnHamburger')
const body = document.querySelector('body')
const header = document.querySelector('.header')
const overlay = document.querySelector('.overlay')
const fadeElems = document.querySelectorAll('.has-fade')
const phoneMenu = document.querySelectorAll('.phoneMenu')

btnHamburger.addEventListener('click', function() {
    if (header.classList.contains('open')) {
        //close hamburger menu
        body.classList.remove('noscroll')
        header.classList.remove('open')
        fadeElems.forEach(function(element) {
            element.classList.remove('fade-in')
            element.classList.add('fade-out')
        })
    } else {
        //open hamburger menu
        body.classList.add('noscroll')
        header.classList.add('open')
        fadeElems.forEach(function(element) {
            element.classList.remove('fade-out')
            element.classList.add('fade-in')
        })
    }
})

// remove overlay when the menu links are cliked
phoneMenu.addEventListener('onclick', function() {
    overlay.forEach(function(over) {
        over.classList.remove('overlay')
    })
})
