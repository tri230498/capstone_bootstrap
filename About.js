$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplaySpeed: 1000,
        
        
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });
    
  });


   
  function changeHeader(){
    document.getElementById('header').classList.toggle('nav-fixed', window.scrollY > 20);
    document.getElementById('sroll-up').classList.toggle('scroll2', window.scrollY > 20);
  }
  window.onscroll = changeHeader;

