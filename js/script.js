let hamburger = document.querySelector('.nav__menu-container');

hamburger.addEventListener('click',function(){
    let menu = document.querySelector('.nav__menu');

    menu.classList.toggle('show-element');
})