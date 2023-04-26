// --HEADER DARK MODE 
function darkMode() {
    document.querySelector('.header__dark-icon').style.display = 'none';
    document.querySelector('.header__light-icon').style.display = 'block';
    var sectionHeadingh3 = document.querySelectorAll('.section__heading h3');
    for (var i = 0; i < sectionHeadingh3.length; i++) {
        sectionHeadingh3[i].style.color = "#eee";
    }

    // HEADER 
    document.querySelector('.form__control').classList.add('dark-mode');
    document.querySelector('.header__brand').classList.add('dark-mode');
    document.querySelector('.header__bar-icon').classList.add('dark-mode');

    // CAROUSEL 
    document.querySelector('.carousel__title').classList.add('dark-mode');
    document.querySelector('.carousel__text').classList.add('dark-mode');

    // CATEGORIES 
    var sectionDarkMode28 = document.querySelectorAll('.bgDarkMode28');
    for (var i = 0; i < sectionDarkMode28.length; i++) {
        sectionDarkMode28[i].style.background = '#282828';
    }

    // VIDEO
    var videoBgDarkMode = document.querySelectorAll('.video .bgDarkMode');
    for (var i = 0; i < videoBgDarkMode.length; i++) {
        videoBgDarkMode[i].style.background = '#232220';
    }

    var counterNumber = document.querySelectorAll('.video .counter');
    var counterName = document.querySelectorAll('.video .number__name');
    for (var i = 0; i < counterNumber.length; i++) {
        counterNumber[i].style.color = '#eee';
        counterName[i].style.color = '#c2d0da';
    }

    // BLOG 
    document.querySelector('.blog').style.background = '#282828';
    var blogCardTitleList = document.querySelectorAll('.post__card .card-title');
    var blogCardLink = document.querySelectorAll('.card__autor-link');
    for (var i = 0; i < blogCardTitleList.length; i++) {
        blogCardTitleList[i].style.color = '#eee';
        blogCardLink[i].style.color = '#eee';
    }
    for (var i = 0; i < blogCardLink.length; i++) {
        blogCardLink[i].style.color = '#eee';
    }

    // CONTACT 
    document.querySelector('.contact').classList.add('bg-dark-mode');
    document.querySelector('.contact .section__heading p').style.color = '#c2d0da';
    var contactFormControl = document.querySelectorAll('.contact .form__control');
    for (var i = 0; i < contactFormControl.length; i++) {
        contactFormControl[i].classList.add('dark-mode');
    }

    // FEEDBACK 
    document.querySelector('.feedback').classList.add('dark-mode');
    var quoteHeading = document.querySelectorAll('.feedback__item .quote-heading');
    var quoteText = document.querySelectorAll('.feedback__item .quote-text');
    var peopleName = document.querySelectorAll('.people-infor h3');
    var peopleJob = document.querySelectorAll('.people-infor p');
    for (var i = 0; i < quoteHeading.length; i++) {
        quoteHeading[i].style.color = '#eee';
        quoteText[i].style.color = '#c2d0da';
        peopleName[i].style.color = '#eee';
        peopleJob[i].style.color = '#c2d0da';
    }

    // FIND US 
    document.querySelector('.findUs').classList.add('bg-dark-mode');
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
    document.querySelector('.secondary__btn').classList.add('dark-mode');
}

function lightMode() {
    document.querySelector('.header__light-icon').style.display = 'none';
    document.querySelector('.header__dark-icon').style.display = 'block';
    var sectionHeadingh3 = document.querySelectorAll('.section__heading h3');
    for (var i = 0; i < sectionHeadingh3.length; i++) {
        sectionHeadingh3[i].style.color = "#232121";
    }

    // HEADER 
    document.querySelector('.form__control').classList.remove('dark-mode');
    document.querySelector('.header__brand').classList.remove('dark-mode');
    document.querySelector('.header__bar-icon').classList.remove('dark-mode');

    // CAROUSEL 
    document.querySelector('.carousel__title').classList.remove('dark-mode');
    document.querySelector('.carousel__text').classList.remove('dark-mode');
    document.querySelector('.secondary__btn').classList.remove('dark-mode');

    // CATEGORIES ---------------------APPLY TOÀN PROJECT
    var sectionDarkMode28 = document.querySelectorAll('.bgDarkMode28');
    for (var i = 0; i < sectionDarkMode28.length; i++) {
        sectionDarkMode28[i].style.background = '#f7f7f7';
    }

    // VIDEO
    var videoBgDarkMode = document.querySelectorAll('.video .bgDarkMode');

    // BLOG 
    document.querySelector('.blog').style.background = '#f7f7f7';
    var blogCardTitleList = document.querySelectorAll('.post__card .card-title');
    var blogCardLink = document.querySelectorAll('.card__autor-link');
    for (var i = 0; i < blogCardTitleList.length; i++) {
        blogCardTitleList[i].style.color = '#232121';
        blogCardLink[i].style.color = '#232121';
    }
    for (var i = 0; i < blogCardLink.length; i++) {
        blogCardLink[i].style.color = '#232121';
    }

    // CONTACT 
    document.querySelector('.contact').classList.remove('bg-dark-mode');
    document.querySelector('.contact .section__heading p').style.color = '#161c2db3';
    var contactFormControl = document.querySelectorAll('.contact .form__control');
    for (var i = 0; i < contactFormControl.length; i++) {
        contactFormControl[i].classList.remove('dark-mode');
    }

    // FEEDBACK 
    document.querySelector('.feedback').classList.remove('dark-mode');
    var quoteHeading = document.querySelectorAll('.feedback__item .quote-heading');
    var quoteText = document.querySelectorAll('.feedback__item .quote-text');
    var peopleName = document.querySelectorAll('.people-infor h3');
    var peopleJob = document.querySelectorAll('.people-infor p');
    for (var i = 0; i < quoteHeading.length; i++) {
        quoteHeading[i].style.color = '#232121';
        quoteText[i].style.color = '#161c2db3';
        peopleName[i].style.color = '#232121';
        peopleJob[i].style.color = '#161c2db3';
    }

    // FIND US
    document.querySelector('.findUs').classList.remove('bg-dark-mode');
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

// OWL CAROUSEL
$('.owl-carousel').owlCarousel({
    loop: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})

// VENOBOX 
new VenoBox({
    selector: ".my-video"
});

// COUNTER 
$('.counter').countUp({
    'time': 2000,
    'delay': 20
});
