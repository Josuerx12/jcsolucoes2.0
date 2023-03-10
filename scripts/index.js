const mobileBtn = document.querySelector('.mobile-btn button')
const sideBar = document.querySelector('.sidebar')
const visu1 = document.getElementById('visu-1')
const visu2 = document.getElementById('visu-2')
const visu3 = document.getElementById('visu-3')
const code1 = document.getElementById('code-1')
const code2 = document.getElementById('code-2')
const code3 = document.getElementById('code-3')
const contato = document.getElementById('contato')
const sobre = document.getElementById('sobre')

mobileBtn.addEventListener ('click', () => {
    sideBar.classList.toggle('on')
})

visu1.addEventListener ('click', () => {
    window.open ("/index.html", "_self")
})

code1.addEventListener ('click', () => {
    window.open ("https://github.com/Josuerx12/jcsolucoes2.0", "_blank")
})
