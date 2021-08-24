const   img = document.querySelector('.work_all'),
        close = document.querySelector('.overflow_close'),
        overflowStr = document.querySelector('.overflow'),
        themeLightBtn = document.querySelector('.theme_link'),
        themeDarkBtn = document.querySelector('.theme_link_1'),
        style = document.querySelectorAll('*'),
        container = document.querySelector('.container'),
        setting = document.querySelector('.theme_link'),
        menu = document.querySelector('.theme-menu')



close.addEventListener('click', () => {
    overflowStr.classList.remove('active');
});   

img.addEventListener('click', () => {
    overflowStr.classList.add('active');
});

themeLightBtn.addEventListener('click', () => {
    this.querySelector('section').style.background = 'red';
});

// setting.addEventListener('click', () => {
//     menu.classList.add('theme-menu_active');
// });





// const connect = document.querySelector('.us__btn'),
//     back = document.querySelector('.us__connect'),
//     closeElem = document.querySelector('.us__connect__close');
//     headBtn = document.querySelector('.header__btn')
    

new WOW().init();