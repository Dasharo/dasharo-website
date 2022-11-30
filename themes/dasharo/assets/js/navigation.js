document.addEventListener("touchstart", function () {}, true);
const navContainer = document.querySelector(".navigation__container");
const burger = document.querySelector(".burger");
const logo = document.querySelector(".navigation__logo-wrapper");
const nav = document.querySelector(".navigation__menu-wrapper");
const navItems = document.querySelectorAll(".navigation__menu-list-item");
let isOpen = false;

const scrollHandler = () => {
  let height = 0;
  let offset = window.pageYOffset;
  if (offset > height + 50) {
    navContainer.classList.add("nav-on-scroll");
  } else {
    navContainer.classList.remove("nav-on-scroll");
  }
};

const navOpenHandler = () => {
  burger.classList.remove("hover");
  burger.classList.add("open");
  logo.classList.add("logo-menu-active");
  nav.classList.remove("navigation__menu-wrapper-slide-up");
  nav.classList.add("navigation__menu-wrapper-slide-down");
  navItems.forEach((item, index) => {
    item.classList.add(`slide-in-nav-item-delay-${index}`);
    item.classList.remove(`slide-in-nav-item-delay-${index}-reverse`);
  });
};

const navCloseHandler = () => {
  burger.classList.remove("open");
  burger.classList.add("hover");
  logo.classList.remove("logo-menu-active");
  nav.classList.remove("navigation__menu-wrapper-slide-down");
  nav.classList.add("navigation__menu-wrapper-slide-up");
  navItems.forEach((item, index) => {
    item.classList.remove(`slide-in-nav-item-delay-${index}`);
    item.classList.add(`slide-in-nav-item-delay-${index}-reverse`);
  });
};

burger.addEventListener("click", () => {
  if (isOpen) {
    navCloseHandler();
  } else {
    navOpenHandler();
  }
  isOpen = !isOpen;
});

logo.addEventListener("click", () => {
  if (isOpen) {
    navCloseHandler();
    isOpen = !isOpen;
  }
});

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    if (isOpen) {
      navCloseHandler();
      isOpen = !isOpen;
    }
  });
});

window.addEventListener("scroll", scrollHandler);
