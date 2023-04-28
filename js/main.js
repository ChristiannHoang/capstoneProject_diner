function darkMode() {
    // CHANGE ICON 
    document.querySelector('.header__dark-icon').style.display = 'none';
    document.querySelector('.header__light-icon').style.display = 'block';
    
    // HEADER DARK MODE 
    document.querySelector('.header__bar-icon').style.color = '#232220';

    // CAROUSEL DARK MODE 
    document.querySelector('.carousel__title').style.color = '#232220';
    document.querySelector('.carousel__text').style.color = '#232220';

    // BG DARK MODE BOLD 232220
    var bgDarkMode23 = document.querySelectorAll('.bgDarkMode23');
    var bgDarkMode23Length = bgDarkMode23.length;
    for (var i = 0; i < bgDarkMode23Length; i++) {
        bgDarkMode23[i].style.background = '#232220';
    }

    // BG DARK LIGHT MODE 282828
    var bgDarkMode28 = document.querySelectorAll('.bgDarkMode28');
    var bgDarkMode28Length = bgDarkMode28.length;
    for (var i = 0; i < bgDarkMode28Length; i++) {
        bgDarkMode28[i].style.background = '#282828';
    }

    // HEADING EEE
    var headingDarkColor = document.querySelectorAll('.headingDarkColor');
    var headingDarkColorLength = headingDarkColor.length;
    for (var i = 0; i < headingDarkColorLength; i++) {
        headingDarkColor[i].style.color = '#eee';
    }

    // TEXT COLOR C2D0DA
    var darkTextColor = document.querySelectorAll('.darkTextColor');
    var darkTextColorLength = darkTextColor.length;
    for (var i = 0; i < darkTextColorLength; i++) {
        darkTextColor[i].style.color = '#c2d0da';
    }

    // BTN SECONDARY DARK 
    var secondaryBtnDark = document.querySelectorAll('.secondary__btn');
    for (var i = 0; i < secondaryBtnDark.length; i++) {
        secondaryBtnDark[i].classList.add('dark-mode');
    }

    // FORM DARK MODE BOLD 232220
    var formControl = document.querySelectorAll('.form__control');
    var formControlLength = formControl.length;
    for (var i = 0; i < formControlLength; i++) {
        formControl[i].style.background = '#282828';
        formControl[i].style.color = '#c2d0da';
    }
}

function lightMode() {
    // CHANGE ICON 
    document.querySelector('.header__dark-icon').style.display = 'block';
    document.querySelector('.header__light-icon').style.display = 'none';

    // HEADER DARK MODE 
    document.querySelector('.header__bar-icon').style.color = '#fff';

    // CAROUSEL DARK MODE 
    document.querySelector('.carousel__title').style.color = '#fff';
    document.querySelector('.carousel__text').style.color = '#fff';

    // BG DARK MODE BOLD 232220
    var bgDarkMode23 = document.querySelectorAll('.bgDarkMode23');
    var bgDarkMode23Length = bgDarkMode23.length;
    for (var i = 0; i < bgDarkMode23Length; i++) {
        bgDarkMode23[i].style.background = '#fff';
    }

    // BG DARK LIGHT MODE 282828
    var bgDarkMode28 = document.querySelectorAll('.bgDarkMode28');
    var bgDarkMode28Length = bgDarkMode28.length;
    for (var i = 0; i < bgDarkMode28Length; i++) {
        bgDarkMode28[i].style.background = '#f7f7f7';
    }

    // HEADING EEE
    var headingDarkColor = document.querySelectorAll('.headingDarkColor');
    var headingDarkColorLength = headingDarkColor.length;
    for (var i = 0; i < headingDarkColorLength; i++) {
        headingDarkColor[i].style.color = '#232121';
    }

    // TEXT COLOR 161c2db3
    var darkTextColor = document.querySelectorAll('.darkTextColor');
    var darkTextColorLength = darkTextColor.length;
    for (var i = 0; i < darkTextColorLength; i++) {
        darkTextColor[i].style.color = '#161c2db3';
    }

    // BTN SECONDARY DARK 
    var secondaryBtnDark = document.querySelectorAll('.secondary__btn');
    for (var i = 0; i < secondaryBtnDark.length; i++) {
        secondaryBtnDark[i].classList.remove('dark-mode');
    }
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


