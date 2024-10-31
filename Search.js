document.querySelector('.search-btn').addEventListener('click', function() {
  const location = document.getElementById('location').value;
  const priceRange = document.getElementById('price-range').value;
  const propertyType = document.getElementById('property-type').value;

  const searchCriteria = {
      location: location,
      priceRange: priceRange,
      propertyType: propertyType
  };

  fetch('/search', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(searchCriteria)
  })
  .then(response => response.json())
  .then(data => {
      console.log("Search Results:", data);
      // Code to display results on the page goes here
  })
  .catch(error => console.error("Error:", error));
});