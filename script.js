
// var slideIndex = 0;
// showSlides();

// function showSlides() {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";  
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}    
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
//   setTimeout(showSlides, 2000); // Change image every 2 seconds
// }

//Current Slide Bar
/* 
var swiper = new Swiper('.mySwiper', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  }); */

  

  let menuButton = document.querySelector('#menu-bar');
  let sideBar = document.querySelector('#sideBar');
  let overlay = document.querySelector('#overlay');

  overlay.addEventListener('click', ()=>{
    sideBar.classList.add('left-[-1000px]')
    sideBar.classList.remove('left-0');
    overlay.classList.toggle('hidden');
  });

  menuButton.addEventListener('click',()=>{
    overlay.classList.remove('hidden');
    sideBar.classList.add('left-0');
    sideBar.classList.remove('left-[-1000px]');
  });