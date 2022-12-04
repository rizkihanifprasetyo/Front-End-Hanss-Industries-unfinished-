const hamburger = document.querySelector('.navbar .nav .nav-bar .nav-menu .hamburger');
const mobile_menu = document.querySelector('.navbar .nav .nav-bar .nav-menu ul');
const menu_item = document.querySelectorAll('.navbar .nav .nav-bar .nav-menu ul li a');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

// Login Section

const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container-acc");


sign_up_btn.addEventListener('click',() => {
  container.classList.add("sign-up-mode");
});
sign_in_btn.addEventListener('click',() => {
  container.classList.remove("sign-up-mode");
});




// // aos library
// AOS.init({
//   offset: 200,
//   delay: 100,
//   duration: 400,
//   easing: 'ease',
//   once: false,    // buat animasinya terus berjalan ketika ngescroll
//   mirror: false,
//   anhorPlacement: 'top-bottom'   //ketika scroll terus berhenti animasi akan berhenti.
// })

// const swiper = new Swiper('.swiper', {
//   loop: true,

//   pagination: {
//     el: '.swiper-pagination',
//   },


// });


















