  function changeHeader(){
  document.getElementById('header').classList.toggle('nav-fixed', window.scrollY > 20);
  document.getElementById('sroll-up').classList.toggle('scroll2', window.scrollY > 20);
}

window.onscroll = changeHeader;
