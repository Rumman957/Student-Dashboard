const hamburgerIcon = document.querySelector('.hamburger-icon');
const sideBarCloseIcon = document.querySelector('.close-icon');
const sidebar = document.querySelector('aside')

hamburgerIcon.addEventListener('click', ()=>{
    sidebar.classList.add('open')
})

sideBarCloseIcon.addEventListener('click', ()=>{
    sidebar.classList.remove('open')
})