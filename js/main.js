// HEADER 
function darkMode() {
    document.querySelector('.form__input').style.background = '#232220';
    document.querySelector('.form__input').style.color = '#fff';
    document.querySelector('.header__dark-icon').style.display = 'none';
    document.querySelector('.header__light-icon').style.display = 'block';
}

function lightMode() {
    document.querySelector('.form__input').style.background = '#fff';
    document.querySelector('.header__light-icon').style.display = 'none';
    document.querySelector('.header__dark-icon').style.display = 'block';
}

document.querySelector('.header__dark-icon').onclick = darkMode;
document.querySelector('.header__light-icon').onclick = lightMode;