 $(document).ready(function () {
    $('.owl-one').owlCarousel({
      loop: true,
      margin: 0,
      nav: false,
      responsiveClass: true,
      autoplay: false,
      autoplayTimeout: 5000,
      autoplaySpeed: 1000,
      autoplayHoverPause: false,
      responsive: {
        0: {
          items: 1,
          nav: false
        },
        480: {
          items: 1,
          nav: false
        },
        667: {
          items: 1,
          nav: false
        },
        1000: {
          items: 1,
          nav: false
        }
      }
    })
  })

  function changeHeader(){
    document.getElementById('header').classList.toggle('nav-fixed', window.scrollY > 20);
    document.getElementById('sroll-up').classList.toggle('scroll2', window.scrollY > 20);
  }
  
  window.onscroll = changeHeader;