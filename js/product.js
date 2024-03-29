const secondCSS = document.getElementById("secondCSS");
const loaders = document.getElementById("loaders");
const product = document.getElementById("product");

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
      createLink();
      // Apply fade-out transition
      loaders.style.opacity = 0;

      // Hide loaders and display other elements after the transition is complete
      setTimeout(() => {
        loaders.style.display = "none";
        product.classList.remove("hidden");
        secondCSS.remove();
      }, 500); // Adjust the time based on your desired transition duration
    }, 2500); // Adjust the time based on your desired delay
  });
};

// Attach the handlePageLoad function to the window.onload event
window.onload = handlePageLoad;

const cardSlider = new Swiper(".card-slider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const createLink = () => {
  const load = document.createElement("link");
  load.setAttribute("rel", "stylesheet");
  load.setAttribute("href", "css/product.css");
  document.head.appendChild(load);
};
