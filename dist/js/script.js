//navbar fixed
window.onscroll = function(){
    const header = document.querySelector('header');
    const fixedNav= header.offsetTop;
    if(window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed');
    }
    else {
        header.classList.remove('navbar-fixed');
    }
}

//Transfer button
const transfer = document.querySelector('#transfer');
const pay = document.querySelector('#pay');
const viewTrans = document.querySelector('#viewTrans');
const exit = document.querySelector('#exit');

transfer.addEventListener('click', function() {
    viewTrans.classList.toggle('hidden');
});

exit.addEventListener('click', function() {
    viewTrans.classList.toggle('hidden');
});


// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');
const sideBar = document.querySelector('#sidebar');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

hamburger.addEventListener('click', function() {
    sideBar.classList.toggle('left-[-300px]');
});

//submit
document.getElementById("submit").onclick = function () {
    page.href = "#index.html";
};

// Modal Popup-btn
window.addEventListener('DOMContentLoaded',() =>{
    const passwd = document.querySelector('#overlay-passwd')
    const sukses = document.querySelector('#overlay-sukses')
    const payBtn = document.querySelector('#pay-btn')
    const confirmBtn = document.querySelector('#confirm-btn')
    const closeBtn = document.querySelector('#close-modal')

    const toggleModal = () => {
        passwd.classList.toggle('hidden');
        passwd.classList.toggle('flex');
    }
    payBtn.addEventListener('click', toggleModal)
    closeBtn.addEventListener('click', toggleModal)
    confirmBtn.addEventListener('click',() => {
        passwd.classList.add('hidden')
        passwd.classList.remove('flex')
        sukses.classList.add('flex')
        sukses.classList.remove('hidden')
    })
})