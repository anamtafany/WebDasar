const navIcon = document.querySelector('.nav-icon i');
const main = document.querySelector('main');
const nav = document.querySelector('.navigasi');
main.onclick = function(){
    nav.classList.remove('slide');
}

navIcon.onclick = function(){
    nav.classList.toggle('slide');
}