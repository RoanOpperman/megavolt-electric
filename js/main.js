const ui = {
  buttons: {
    navMenuBurgerBtn: {
      button: document.querySelector("#nav-mobile-menu-button"),
      lineOne: document.querySelector("#nav-m-menu-line-one"),
      lineTwo: document.querySelector("#nav-m-menu-line-two"),
      lineThree: document.querySelector("#nav-m-menu-line-three"),
    },
    aboutShort: document.querySelector("#about-short-btn"),
    heroCTA: document.querySelector("#hero-CTA-btn"),
  },
  navbarMenuItems: document.querySelectorAll(".nav-menu-items"),
  heroBackgroundImg: document.querySelector("#hero-background"),
  hero: document.querySelector(".hero"),
  aboutShort: document.querySelector("#about-short"),
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

// ---------------------------------------------------------------------

// HERO BACKGROUND SWAP

// ---------------------------------------------------------------------

ui.buttons.heroCTA.addEventListener("mouseenter", () => {
  ui.heroBackgroundImg.classList.remove("header-background");
  ui.heroBackgroundImg.classList.add("header-background-night");
  ui.hero.style.background = `linear-gradient(
    25deg,
    rgba(35, 119, 147, 1) 0%,
    rgba(35, 119, 147, 0) 15%
  ),
  linear-gradient(-25deg, rgba(35, 119, 147, 1) 0%, rgba(35, 119, 147, 0) 30%),
  linear-gradient(135deg, rgba(35, 119, 147, 1) 0%, rgba(35, 119, 147, 0) 12%),
  linear-gradient(
    -135deg,
    rgba(35, 119, 147, 1) -20%,
    rgba(35, 119, 147, 0) 17%
  )`;
});
ui.buttons.heroCTA.addEventListener("mouseleave", () => {
  ui.heroBackgroundImg.classList.remove("header-background-night");
  ui.heroBackgroundImg.classList.add("header-background");
  ui.hero.style.background = `linear-gradient(
      25deg,
      rgba(35, 119, 147, 1) 0%,
      rgba(35, 119, 147, 0) 30%
    ),
    linear-gradient(-25deg, rgba(35, 119, 147, 1) 0%, rgba(35, 119, 147, 0) 60%),
    linear-gradient(135deg, rgba(35, 119, 147, 1) 0%, rgba(35, 119, 147, 0) 25%),
    linear-gradient(
      -135deg,
      rgba(35, 119, 147, 1) -20%,
      rgba(35, 119, 147, 0) 35%
    )`;
});

// ---------------------------------------------------------------------

// ABOUT SHORT BACKGROUND

// ---------------------------------------------------------------------

ui.buttons.aboutShort.addEventListener("mouseenter", () => {
  ui.aboutShort.classList.remove("about-short-background-change-to-dark");
  ui.aboutShort.classList.add("about-short-background-change-to-light");
  ui.aboutShort.style.backgroundColor = "white";
});
ui.buttons.aboutShort.addEventListener("mouseleave", () => {
  ui.aboutShort.classList.remove("about-short-background-change-to-light");
  ui.aboutShort.classList.add("about-short-background-change-to-dark");
  ui.aboutShort.style.backgroundColor = "var(--outer-space-grey-color)";
  ui.aboutShort.classList.remove("about-short-background-change-to-light");
});
