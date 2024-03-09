function headerScroll() {

   function windowScroll() {
      const headerBg = document.querySelector('.js-header-bg');
      const scrolling = window.scrollY > 0;
      /* ALTERNATIVE WAY:
      headerBg.classList.toggle('scroll', scrolling);
      */
      if (scrolling) {
         headerBg.classList.add('scroll');
      }
   }

   window.addEventListener('scroll', windowScroll);
}
headerScroll();

function openMenu() {
   function headerMenuClick() {
      const headerNavMenu = document.querySelector('.js-header-nav-menu');
      const menuArrow = document.querySelector('.js-header-nav > ul > li:first-of-type span');
      headerNavMenu.classList.toggle('ativo');
      menuArrow.classList.toggle('ativo');
   }

   const headerMenu = document.querySelector('.js-header-nav ul > li');
   headerMenu.addEventListener('click', headerMenuClick);
}
openMenu();

function scrollTop() {
   const topButton = document.querySelector('.js-top-button');
   function scrollToTop() {
      window.scrollTo({
         top: 0,
         left: 0,
         behavior: 'smooth',
      });
   }
   topButton.addEventListener('click', scrollToTop);

   function buttonShow() {
      if (window.scrollY > 250) {
         topButton.classList.add('ativo');
      } else {
         topButton.classList.remove('ativo');
      }
   }
   window.addEventListener('scroll', buttonShow);

}
scrollTop();

function menuHamburger() {
   const menuHamburger = document.querySelector('.js-header-nav-hamburger');
   function toggleMenuHamburger() {
      menuHamburger.classList.toggle('ativo');
   }

   menuHamburger.addEventListener('click', toggleMenuHamburger);

   window.addEventListener('resize', () => {
      const desktopSize = window.innerWidth;
      if (desktopSize > 600) {
         menuHamburger.classList.remove('ativo');
      }
   });
}
menuHamburger();

function showMeal() {
   const menuItem = Array.from(document.querySelectorAll('.js-principal-menu-item'));
   const descriptionItem = Array.from(document.querySelectorAll('.principal-description-item'));
   const iconItem = Array.from(document.querySelectorAll('.principal-icon-item'));
   const priceItem = Array.from(document.querySelectorAll('.principal-price-item'));
   const imgItem = Array.from(document.querySelectorAll('.principal-img-item'));

   if (menuItem.length) {
      menuItem[0].classList.add('ativo');
      descriptionItem[0].classList.add('ativo');
      iconItem[0].classList.add('ativo');
      priceItem[0].classList.add('ativo');
      imgItem[0].classList.add('ativo');

      menuItem.forEach((item, index) => {
         function showMeal() {
            menuItem.forEach((item) => {
               item.classList.remove('ativo');
            });
            descriptionItem.forEach((item) => {
               item.classList.remove('ativo');
            });
            iconItem.forEach((item) => {
               item.classList.remove('ativo');
            });
            priceItem.forEach((item) => {
               item.classList.remove('ativo');
            });
            imgItem.forEach((item) => {
               item.classList.remove('ativo');
            });
            item.classList.add('ativo');
            descriptionItem[index].classList.add('ativo');
            iconItem[index].classList.add('ativo');
            priceItem[index].classList.add('ativo');
            imgItem[index].classList.add('ativo');
         }

         item.addEventListener('click', showMeal);
      });
   }
}
showMeal();

function showDessert() {
   const brownie = document.querySelector('.js-brownie');
   const muffin = document.querySelector('.js-muffin');
   const pancake = document.querySelector('.js-pancake');

   if (pancake) {
      function scrollHeight() {
         const brownieTop = brownie.getBoundingClientRect().top;
         const muffinTop = muffin.getBoundingClientRect().top;
         const pancakeTop = pancake.getBoundingClientRect().top;
         const windowTop = window.innerHeight * 0.6

         if (brownieTop < windowTop) {
            brownie.classList.add('ativo');
         }
         if (muffinTop < windowTop) {
            muffin.classList.add('ativo');
         }
         if (pancakeTop < windowTop) {
            pancake.classList.add('ativo');
         }
      }
      
      window.addEventListener('scroll', scrollHeight);
   }
}
showDessert();

function historiaAnimations() {
   const historiaAnime = Array.from(document.querySelectorAll('.js-historia-anime'));

   if (historiaAnime.length) {
      function animeSection() {
         const windowTop = window.innerHeight * 0.75;

         historiaAnime.forEach((item) => {
            const sectionTop = item.getBoundingClientRect().top;
            if (sectionTop < windowTop) {
               item.classList.add('ativo');
            }
         });
      }

      historiaAnime[0].classList.add('ativo');
      historiaAnime[1].classList.add('ativo');
      window.addEventListener('scroll', animeSection);
   }
}
historiaAnimations()

function vinhosAnimation() {
   const vinhosAnime = Array.from(document.querySelectorAll('.js-vinhos-anime'));
      
   if (vinhosAnime.length) {
      const windowTop = window.innerHeight * 0.6;
      function animeVinho() {
         vinhosAnime.forEach((item) => {
            const vinhoHeight = item.getBoundingClientRect().top;

            if (vinhoHeight < windowTop) {
               item.classList.add('ativo');
            }
         });
      }

      window.addEventListener('scroll', animeVinho);
   }
}
vinhosAnimation();

function scrollToWine() {
   const sectionBtn = Array.from(document.querySelectorAll('.js-section-btn'));

   sectionBtn.forEach((item) => {
      function scrollToSection(event) {         
         event.preventDefault();         
         const href = event.currentTarget.getAttribute('href');
		   const section = document.querySelector(href).parentElement; 
         function findPos(obj) {
            let curtop = 0;
            if (obj.offsetParent) {
               do {
                  curtop += obj.offsetTop;
               } while (obj = obj.offsetParent);
               return [curtop];
            }
         }

         window.scrollTo({
            top: findPos(section) - 50,
            left: 0,
            behavior: 'smooth',
         });
      }
      item.addEventListener('click', scrollToSection);
   });
}
scrollToWine();

function contactForm() {
   const buttons = Array.from(document.querySelectorAll('.js-select-btns > *'));

   if (buttons.length) {
      const contactForm = document.querySelector('.js-contact-form');
      const reservaForm = document.querySelector('.js-reserva-form');
      const contactTitle = document.querySelector('.js-contact-title');
      const params = new URLSearchParams(location.search);

      function buttonsCallback() {
         buttons.forEach((item) => {
            item.classList.remove('ativo');
         });
         this.classList.add('ativo');
         if (buttons[0].classList.contains('ativo')) {
            reservaForm.classList.remove('ativo');
            contactForm.classList.add('ativo');
            contactTitle.innerHTML = 'Contato';
         } else {
            contactForm.classList.remove('ativo');
            reservaForm.classList.add('ativo');
            contactTitle.innerHTML = 'Booking';
         }
      }

      buttons[0].classList.add('ativo');
      contactForm.classList.add('ativo');
      buttons.forEach((item) => {
         item.addEventListener('click', buttonsCallback);
      });

      function activeParams(params) {
         const input = document.getElementById(params);
         if (input) {
            input.checked = true;
            if (input.parentElement.nextElementSibling) {
               input.parentElement.nextElementSibling.classList.remove('ativo');
               reservaForm.classList.remove('ativo');
               contactTitle.innerHTML = 'Contato';
               input.parentElement.classList.add('ativo');
               contactForm.classList.add('ativo');
            } else if (input.parentElement.previousElementSibling) {
               input.parentElement.previousElementSibling.classList.remove('ativo');
               contactForm.classList.remove('ativo');
               contactTitle.innerHTML = 'Booking';
               input.parentElement.classList.add('ativo');
               reservaForm.classList.add('ativo');
            }
         }
      }
      params.forEach(activeParams);
   }
}
contactForm();
/*
function selectContact() {
   const contactForm = document.querySelector('.js-contact-form');
   const reservaForm = document.querySelector('.js-reserva-form');
   const contactTitle = document.querySelector('.js-contact-title');
   const params = new URLSearchParams(location.search);

   function activeParams(params) {
      const input = document.getElementById(params);
      if (input) {
         input.checked = true;
         if (input.parentElement.nextElementSibling) {
            input.parentElement.nextElementSibling.classList.remove('ativo');
            reservaForm.classList.remove('ativo');
            contactTitle.innerHTML = 'Contato';
            input.parentElement.classList.add('ativo');
            contactForm.classList.add('ativo');
         } else if (input.parentElement.previousElementSibling) {
            input.parentElement.previousElementSibling.classList.remove('ativo');
            contactForm.classList.remove('ativo');
            contactTitle.innerHTML = 'Reserva';
            input.parentElement.classList.add('ativo');
            reservaForm.classList.add('ativo');
         }
      }
   }
   params.forEach(activeParams);
}
selectContact();*/