// HEADER 

    // --HEADER DARK MODE 
function darkMode() {
    // HEADER 
    document.querySelector('.form__input').style.background = '#232220';
    document.querySelector('.form__input').style.color = '#fff';
    document.querySelector('.header__dark-icon').style.display = 'none';
    document.querySelector('.header__light-icon').style.display = 'block';

    // FOOTER 
    var footerIcon = document.querySelectorAll('.footer__icon-item');
    for (var i = 0 ; i < footerIcon.length; i++) {
        console.log(footerIcon[i]);
        footerIcon[i].style.background = '#232220';
    }
    // HOVER ICON DARKMODE? 

    var footerInput = document.querySelector('.footer__sub .form__control').style.background = '#232220';
    var footerInput = document.querySelector('.footer__sub .form__control').style.color = '#fff';
}

function lightMode() {
    // HEADER 
    document.querySelector('.form__input').style.background = '#fff';
    document.querySelector('.form__input').style.color = 'rgba(22, 28, 45, 0.7)';
    document.querySelector('.header__light-icon').style.display = 'none';
    document.querySelector('.header__dark-icon').style.display = 'block';

    // FOOTER 
    var footerIcon = document.querySelectorAll('.footer__icon-item');
    for (var i = 0 ; i < footerIcon.length; i++) {
        console.log(footerIcon[i]);
        footerIcon[i].style.background = '#fff';
    }
    // HOVER ICON LIGHTMODE? 

    var footerInput = document.querySelector('.footer__sub .form__control').style.background = '#fff';
    var footerInput = document.querySelector('.footer__sub .form__control').style.color = '#000';
}

document.querySelector('.header__dark-icon').onclick = darkMode;
document.querySelector('.header__light-icon').onclick = lightMode;
    
    // --HEADER OPEN NAV 
document.querySelector('.header__bar').onclick = function() {
    document.querySelector('.header__nav').style.display = 'flex';
}

document.querySelector('.nav__close').onclick = function() {
    document.querySelector('.header__nav').style.display = 'none';
}
