// Helper function to toggle active class
const toggleActiveClass = (element, className) => {
  element.classList.toggle(className);
};

// Event listener to toggle active class for hamburger menu
const navbarNav = document.querySelector(".navbar-nav");
document.querySelector("#ham-menu").addEventListener("click", (e) => {
  toggleActiveClass(navbarNav, "active");
  e.preventDefault();
});

// Event listener to hide navbar when clicking outside
document.addEventListener("click", (e) => {
  const hamburger = document.querySelector("#ham-menu");
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Event listener to toggle active class for search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");
document.querySelector("#search-button").addEventListener("click", (e) => {
  toggleActiveClass(searchForm, "active");
  searchBox.focus();
  e.preventDefault();
});

// Event listener to hide search form when clicking outside
const searchButton = document.querySelector("#search-button");
document.addEventListener("click", (e) => {
  if (!searchButton.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
});

// Event listener to toggle active class for shopping cart
const shoppingCart = document.querySelector(".shopping-cart");
document.querySelector("#cart-button").addEventListener("click", (e) => {
  toggleActiveClass(shoppingCart, "active");
  e.preventDefault();
});

// Event listener to hide shopping cart when clicking outside
const cartButton = document.querySelector("#cart-button");
document.addEventListener("click", (e) => {
  if (!cartButton.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});

// Event listener to show item detail modal
const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailButtons = document.querySelectorAll(".detail-button");

itemDetailButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    itemDetailModal.style.display = "flex";
    e.preventDefault();
  });
});

// Event listener to hide item detail modal when clicking the close icon or outside
document.querySelector(".modal .close-icon").addEventListener("click", (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
});

window.addEventListener("click", (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = "none";
  }
});

const input = document.querySelector('input[type="search"]');
input.addEventListener("keyup", (e) => {
  const sbv = input.value.toLowerCase();
  console.log(sbv);
  switch (sbv) {
    case "about":
      window.location.assign("#about");
      break;
    case "contact":
      window.location.assign("#contact");
      break;
    case "product":
      window.location.assign("/product.html");
      break;
    case "best":
      window.location.assign("#seller");
      break;
  }
  e.preventDefault();
});

