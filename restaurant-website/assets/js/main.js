/*=============== SHOW MENU ===============*/
let navMenu = document.querySelector('.nav-menu');
/*===== MENU SHOW ====*/
document.querySelector('.nav-toggle').onclick = () => {
  navMenu.classList.toggle('show-menu');
}

window.onscroll = () => {
  navMenu.classList.remove('active');
}


/*=============== SCROLL REVEAL ===============*/
const sr = ScrollReveal ({
    distance : '45px',
    duration : 2700,
    reset : true,
  })

  sr.reveal('.about-img',{ delay:350, origin:'left' })
  sr.reveal('.about-data-content',{ delay:350, origin:'right' })
  sr.reveal('.home-img',{ delay:350, origin:'left' })
  sr.reveal('.home-data-content',{ delay:350, origin:'right' })

  sr.reveal('.quality-data-content',{ delay:350, origin:'left' })
  sr.reveal('.quality-img',{ delay:350, origin:'right' })
  sr.reveal('.gallery-img',{ delay:350, origin:'top' })
  sr.reveal('.menu-data-content',{ delay:350, origin:'top' })
  sr.reveal('.menu-food-text',{ delay:350, origin:'bottom' })
  sr.reveal('.food-container',{ delay:350, origin:'bottom' })
  sr.reveal('.b-footer',{ delay:350, origin:'bottom' })
  sr.reveal('.footer-data .nav-logo',{ delay:350, origin:'bottom' })
