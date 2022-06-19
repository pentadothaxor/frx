let showMobileMenu = false;

const toggleMobileMenu = () => {
  if (showMobileMenu === true) {
    document.querySelector("header .backdrop").style.display = "block";
  } else {
    document.querySelector("header .backdrop").style.display = "none";
  }
  showMobileMenu = !showMobileMenu;
};

document
  .querySelector("header svg")
  .addEventListener("click", toggleMobileMenu);

document
  .querySelector("header .backdrop")
  .addEventListener("click", toggleMobileMenu);

toggleMobileMenu();
