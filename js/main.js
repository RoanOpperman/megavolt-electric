const ui = {
  buttons: {
    navMenuBurgerBtn: {
      button: document.querySelector("#nav-mobile-menu-button"),
      lineOne: document.querySelector("#nav-m-menu-line-one"),
      lineTwo: document.querySelector("#nav-m-menu-line-two"),
      lineThree: document.querySelector("#nav-m-menu-line-three"),
    },
  },
  navbarMenuItems: document.querySelectorAll(".nav-menu-items"),
};
let burgerButtonPressed = "closed";
ui.buttons.navMenuBurgerBtn.button.addEventListener("touchstart", (event) => {
  if (burgerButtonPressed === "closed") {
    document
      .querySelector("nav")
      .classList.remove("navbar-mobile-animate-close");
    document.querySelector("nav").classList.add("navbar-mobile-animate-open");
    document.querySelector("nav").style.height = "100%";
    for (let item of ui.navbarMenuItems) {
      item.classList.remove("fade-out");
      item.classList.remove("remove-from-document");
      item.classList.add("fade-in");
    }

    ui.buttons.navMenuBurgerBtn.lineOne.classList.remove(
      "nav-mobile-menu-line-one"
    );
    ui.buttons.navMenuBurgerBtn.lineTwo.classList.remove(
      "nav-mobile-menu-line-two"
    );
    ui.buttons.navMenuBurgerBtn.lineThree.classList.remove(
      "nav-mobile-menu-line-three"
    );
    ui.buttons.navMenuBurgerBtn.lineOne.classList.add(
      "nav-mobile-menu-line-one-x"
    );
    ui.buttons.navMenuBurgerBtn.lineTwo.classList.add(
      "nav-mobile-menu-line-two-x"
    );
    ui.buttons.navMenuBurgerBtn.lineThree.classList.add(
      "nav-mobile-menu-line-three-x"
    );

    burgerButtonPressed = "open";
  } else if (burgerButtonPressed === "open") {
    for (let item of ui.navbarMenuItems) {
      item.classList.remove("fade-in");
      item.classList.add("remove-from-document");
      item.classList.add("fade-out");
    }
    document
      .querySelector("nav")
      .classList.remove("navbar-mobile-animate-open");
    document.querySelector("nav").classList.add("navbar-mobile-animate-close");

    ui.buttons.navMenuBurgerBtn.lineOne.classList.remove(
      "nav-mobile-menu-line-one-x"
    );
    ui.buttons.navMenuBurgerBtn.lineTwo.classList.remove(
      "nav-mobile-menu-line-two-x"
    );
    ui.buttons.navMenuBurgerBtn.lineThree.classList.remove(
      "nav-mobile-menu-line-three-x"
    );
    ui.buttons.navMenuBurgerBtn.lineOne.classList.add(
      "nav-mobile-menu-line-one-burger"
    );
    ui.buttons.navMenuBurgerBtn.lineTwo.classList.add(
      "nav-mobile-menu-line-two-burger"
    );
    ui.buttons.navMenuBurgerBtn.lineThree.classList.add(
      "nav-mobile-menu-line-three-burger"
    );
    document.querySelector("nav").style.height = "11%";
    burgerButtonPressed = "closed";
  }
});
