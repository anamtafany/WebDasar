// const navIcon = document.querySelector('.nav-icon i');
// const nav = document.querySelector('.navigasi ul');

// navIcon.addEventListener('click', function(){
//     // console.log(nav)
//     nav.classList.toggle('slide');
// })

const navIcon = document.querySelector('.nav-icon i');
const main = document.querySelector('main');
const nav = document.querySelector('.navigasi');
main.onclick = function(){
    nav.classList.remove('slide');
}

navIcon.onclick = function(){
    // console.log(nav)
    
    nav.classList.toggle('slide');
}