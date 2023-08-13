const body = document.body,
      burger = document.querySelector('.header__menu'),
      navLinks = document.querySelectorAll('.menu a'),
      menu = document.querySelector('.menu'),
      html = document.documentElement,
      authModal = document.querySelector('#auth-modal'),
      authButton = document.querySelector('.header__login'),
      supportModal = document.querySelector('#support-modal'),
      withModal = document.querySelector('#with-modal'),
      withBtn = document.querySelector('.user__replenish-btn'),
      supportBtn = document.querySelector('#support-button'),
      closeModalButtons = document.querySelectorAll('.modal__close'),
      closeBtn = document.querySelector('.menu__btn'),
      menuSupportBtn = document.querySelector('.menu-support-btn'),
      header = document.querySelector('.header'),
      dynamicBtn = document.querySelector('.inner-heading__dynamic');

if (dynamicBtn) {
  dynamicBtn.addEventListener('click', () => {
    dynamicBtn.classList.toggle('inner-heading__dynamic--active')
  })
}

function showModal() {
  body.classList.add('locked')
  document.documentElement.classList.add('locked')
}

function hideModal() {
  body.classList.remove('locked')
  document.documentElement.classList.remove('locked')
}

closeModalButtons.forEach(btn =>{
  document.querySelectorAll('.modal').forEach(modal => {
    btn.addEventListener('click', () => {
      hideModal();
      modal.classList.remove('modal--active')
    })
  })
})



function showModal() {
  body.classList.add('locked');
  document.documentElement.classList.add('locked');
}

function closeModalByOuterClick (modal) {
  const modalContainer = modal.querySelector('.modal__container');

  modalContainer.addEventListener('click', (e) => {
    if (e.target === modalContainer) {
      hideModal();
      modal.classList.remove('modal--active');
    }
  })
}

try {
  if (supportModal || withModal) {
    authButton.addEventListener('click', () => {
      authModal.classList.add('modal--active');

      closeModalByOuterClick(authModal);
      showModal();
    })

    supportBtn.addEventListener('click', () => {
      supportModal.classList.add('modal--active');

      closeModalByOuterClick(supportModal);
      showModal();
    })

    withBtn.addEventListener('click', () => {
      withModal.classList.add('modal--active');

      closeModalByOuterClick(withModal);
      showModal();
    })
  }
} catch (error) {
  console.log(error);
}

function closeMenu() {
    menu.classList.remove('show-menu');
    burger.classList.remove('active-burger');
    body.classList.remove('locked')
    html.classList.remove('locked');
    menu.classList.remove('show-links');
}

function closeMenuByClick() {
  if (navLinks.length > 0) {
    navLinks.forEach(link => {
      link.addEventListener('click', closeMenu);
    })
  }
}

closeMenuByClick();

function showMenu() {
  burger.classList.toggle('active-burger');
  body.classList.add('locked')
  if (burger.classList.contains('active-burger')) {
    menu.classList.add('show-menu')
    body.classList.add('locked')
    html.classList.add('locked')
  } else {
    menu.classList.remove('show-menu')
    body.classList.remove('locked')
    html.classList.remove('locked');

    closeMenu();
  }
}

if (burger) {
  burger.addEventListener('click', () => {
    showMenu();
  });

  menu.addEventListener('click', (e) => {
    if (e.target === document.querySelector('.menu__overlay')) {
      menu.classList.remove('menu--active');
      closeMenu();
      menu.classList.remove('active-burger')
    }
  })

  menuSupportBtn.addEventListener('click', () => {
    closeMenu();

    menu.classList.remove('show-menu');

    setTimeout(() => {
      supportModal.classList.add('modal--active')
    }, 300)
  })
}

if (closeBtn) {
  closeBtn.addEventListener('click', () => {
    closeMenu();
  })
}

const clipButton = document.querySelector('.user__clip-btn');
const clipPopup = document.querySelector('.copy-popup');

const copyValueHandler = () => {
  const clipButtonValue = document.querySelector('.user__clip-value').textContent;
  navigator.clipboard.writeText(clipButtonValue)
  .then(() => {
    clipPopup.classList.add('copy-popup--active')
    setTimeout(() => {
      clipPopup.classList.remove('copy-popup--active')
    }, 1250)
  })
  .catch(() => {
    alert('Ошибка копирования!');
   })
}

clipButton.addEventListener('click', copyValueHandler);
