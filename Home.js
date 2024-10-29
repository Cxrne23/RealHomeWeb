// script.js

// Search Functionality
document.addEventListener("DOMContentLoaded", function() {
  const searchButton = document.querySelector('.search-btn');
  const locationInput = document.querySelector('input[placeholder="Location"]');
  const priceRangeInput = document.querySelector('input[placeholder="Price Range"]');
  const propertyTypeInput = document.querySelector('input[placeholder="Property Type"]');
  const listings = document.querySelectorAll('.image-placeholder');

  searchButton.addEventListener('click', function() {
      const location = locationInput.value.toLowerCase();
      const priceRange = priceRangeInput.value.toLowerCase();
      const propertyType = propertyTypeInput.value.toLowerCase();

      listings.forEach((listing) => {
          const image = listing.querySelector('img');
          const details = image.alt.toLowerCase(); // Assuming the alt text contains details

          // Check if all filters match
          if (details.includes(location) && details.includes(priceRange) && details.includes(propertyType)) {
              listing.style.display = 'block'; // Show matching listings
          } else {
              listing.style.display = 'none'; // Hide non-matching listings
          }
      });
  });

  // Handle Logout
  const logoutButton = document.createElement('button');
  logoutButton.textContent = 'Logout';
  logoutButton.classList.add('logout-btn');
  document.querySelector('header .navbar').appendChild(logoutButton);

  logoutButton.addEventListener('click', function() {
      // Redirect to the login page and clear session
      window.location.href = 'Login.html';
      // Optionally, you can clear session storage if you're using it
      // sessionStorage.clear(); // Uncomment if you're using session storage
  });
});
