window.addEventListener('DOMContentLoaded', () => {
  console.log('Dom loaded');
})

const loaders = document.querySelector('.loader-overlay')
// Function to handle the complete loading of the page
const handlePageLoad = () => {
  console.log("Window loaded");
  
  // Display loaders initially
  loaders.style.opacity = 1;

    // Create a Promise that resolves when all resources are loaded
    const allResourcesLoaded = new Promise((resolve) => {
      const checkIfLoaded = () => {
        if (
          document.readyState === "complete" &&
          (!document.hidden || document.visibilityState === "prerender")
        ) {
          console.log("All resources loaded");
          resolve();
        } else {
          setTimeout(checkIfLoaded, 100);
        }
      };
  
      checkIfLoaded();
    });

  // When all resources are loaded, perform the transition
  allResourcesLoaded.then(() => {
    setTimeout(() => {
      // Apply fade-out transition
      loaders.style.opacity = 0;

      // Hide loaders and display other elements after the transition is complete
      setTimeout(() => {
        loaders.style.display = "none";
      }, 500); // Adjust the time based on your desired transition duration
    }, 2500); // Adjust the time based on your desired delay
  });
};
// Attach the handlePageLoad function to the window.onload event
window.onload = handlePageLoad;

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
const destinations = {
  home: "#",
  about: "#about",
  contact: "#contact",
  best: "#seller",
};

input.addEventListener("keyup", (e) => {
  let inputValue = input.value.toLowerCase();
  console.log(inputValue);

  if (destinations.hasOwnProperty(inputValue)) {
    window.location.replace(destinations[inputValue]);
  } else if (inputValue === "product") {
    window.location.assign("/product.html");
  }
  e.preventDefault();
});
