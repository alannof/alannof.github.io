// * toggle active hamburger
const navbarNav = document.querySelector(".navbar-nav");

document.querySelector("#ham-menu").onclick = (e) => {
  navbarNav.classList.toggle("active");
  e.preventDefault();
};

// note: klik diluar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#ham-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// * toggle active search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// note: klik diluar search-box untuk menghilangkan search
const search = document.querySelector("#search-button");
document.addEventListener("click", function (e) {
  if (!search.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
});

// * toggle active cart
const shoppingCart = document.querySelector(".shopping-cart");
document.querySelector("#cart-button").onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};

// note: klik diluar cart untuk menghilangkan cart
const cart = document.querySelector("#cart-button");
document.addEventListener("click", function (e) {
  if (!cart.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});

// * modal box
const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailButtons = document.querySelectorAll(".detail-button");

itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = "flex";
    e.preventDefault();
  };
});

// note: untuk menghilangkan modal lewat X
document.querySelector(".modal .close-icon").onclick = (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
};
// untuk menghilangkan modal dimana saja
window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = "none";
  }
};
