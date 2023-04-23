// --HEADER DARK MODE 
function darkMode() {
    document.querySelector('.header__dark-icon').style.display = 'none';
    document.querySelector('.header__light-icon').style.display = 'block';
    // HEADER 
    document.querySelector('.form__input').classList.add('dark-mode');
    document.querySelector('.header__brand').classList.add('dark-mode');
    document.querySelector('.header__bar-icon').classList.add('dark-mode');
    
    // CAROUSEL 
    document.querySelector('.carousel__title').classList.add('dark-mode');
    document.querySelector('.carousel__text').classList.add('dark-mode');

    // FIND US 
    document.querySelector('.findUs').classList.add('bg-dark-mode');
    document.querySelector('.findUs .section__heading h3').classList.add('heading-dark-mode');
    var findUsHeading = document.querySelectorAll('.findUs .contact__item h5');
    var findUsLink = document.querySelectorAll('.findUs .contact__link');
    for (var i = 0; i < findUsHeading.length; i++) {
        findUsHeading[i].classList.add('heading-dark-mode');
        findUsLink[i].classList.add('text-dark-mode');
    }
    document.querySelector('.findUs_map').style.background = 'transparent';
    document.querySelector('.findUs_map').style.filter = 'grayscale(100%)';

    // FOOTER 
    var footerIcon = document.querySelectorAll('.footer__icon-item');
    footerIconLength = footerIcon.length;
    for (var i = 0; i < footerIconLength; i++) {
        footerIcon[i].classList.add('dark-mode');
    }
    document.querySelector('.footer__sub .form__control').classList.add('dark-mode');
    document.querySelector('.carousel__btn').classList.add('dark-mode');
}

function lightMode() {
    document.querySelector('.header__light-icon').style.display = 'none';
    document.querySelector('.header__dark-icon').style.display = 'block';
    
    // HEADER 
    document.querySelector('.form__input').classList.remove('dark-mode');
    document.querySelector('.header__brand').classList.remove('dark-mode');
    document.querySelector('.header__bar-icon').classList.remove('dark-mode');

    // CAROUSEL 
    document.querySelector('.carousel__title').classList.remove('dark-mode');
    document.querySelector('.carousel__text').classList.remove('dark-mode');
    document.querySelector('.carousel__btn').classList.remove('dark-mode');

    // FIND US
    document.querySelector('.findUs').classList.remove('bg-dark-mode');
    document.querySelector('.findUs .section__heading h3').classList.remove('heading-dark-mode');
    var findUsHeading = document.querySelectorAll('.findUs .contact__item h5');
    var findUsLink = document.querySelectorAll('.findUs .contact__link');
    for (var i = 0; i < findUsHeading.length; i++) {
        findUsHeading[i].classList.remove('heading-dark-mode');
        findUsLink[i].classList.remove('text-dark-mode');
    }
    document.querySelector('.findUs_map').style.background = '#f7f7f7';
    document.querySelector('.findUs_map').style.filter = 'grayscale(0)';

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
