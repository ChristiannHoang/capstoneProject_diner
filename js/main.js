// --HEADER DARK MODE 
function darkMode() {
    document.querySelector('.header__dark-icon').style.display = 'none';
    document.querySelector('.header__light-icon').style.display = 'block';
    // HEADER 
    document.querySelector('.form__input').classList.add('dark-mode');
    document.querySelector('.header__brand').classList.add('dark-mode');
    document.querySelector('.header__bar-icon').classList.add('dark-mode');
    
    // FOOTER 
    var footerIcon = document.querySelectorAll('.footer__icon-item');
    footerIconLength = footerIcon.length;
    for (var i = 0; i < footerIconLength; i++) {
        footerIcon[i].classList.add('dark-mode');
    }

    document.querySelector('.footer__sub .form__control').classList.add('dark-mode');
}

function lightMode() {
    document.querySelector('.header__light-icon').style.display = 'none';
    document.querySelector('.header__dark-icon').style.display = 'block';
    // HEADER 
    document.querySelector('.form__input').classList.remove('dark-mode');
    document.querySelector('.header__brand').classList.remove('dark-mode');
    document.querySelector('.header__bar-icon').classList.remove('dark-mode');
    
    // FOOTER
    var footerIcon = document.querySelectorAll('.footer__icon-item');
    footerIconLength = footerIcon.length;
    for (var i = 0; i < footerIconLength; i++) {
        footerIcon[i].classList.remove('dark-mode');
    } 

    document.querySelector('.footer__sub .form__control').classList.remove('dark-mode');
}

document.querySelector('.header__dark-icon').onclick = darkMode;
document.querySelector('.header__light-icon').onclick = lightMode;

// --HEADER OPEN NAV 
document.querySelector('.header__bar').onclick = function () {
    document.querySelector('.header__nav').style.display = 'flex';
}

document.querySelector('.nav__close').onclick = function () {
    document.querySelector('.header__nav').style.display = 'none';
}
