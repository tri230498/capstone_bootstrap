
  
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplaySpeed: 1000,
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
            items: 2,
            nav: false
          }
        }
 
      });

    


    
function changeHeader(){
  document.getElementById('header').classList.toggle('nav-fixed', window.scrollY > 20);
  document.getElementById('sroll-up').classList.toggle('scroll2', window.scrollY > 20);
}

window.onscroll = changeHeader;







