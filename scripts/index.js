var mobileBtn = document.querySelector('.mobile-btn button')
var sideBar = document.querySelector('.sidebar')

mobileBtn.addEventListener ('click', () => {
    sideBar.classList.toggle('on')
})