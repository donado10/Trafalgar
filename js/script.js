const menu = document.querySelector(".header-menu");
const close_menu = document.querySelector(".header-nav__close");
const navigation = document.querySelector(".header-nav");
const neutral = document.querySelector(".neutral");

menu.addEventListener("click", (e) => {
  e.preventDefault();
  neutral.classList.toggle("show");
  navigation.classList.toggle("open-nav");
});

close_menu.addEventListener("click", (e) => {
  e.preventDefault();
  neutral.classList.toggle("show");
  navigation.classList.toggle("open-nav");
});
