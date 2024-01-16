function performSearch() {
    const searchInput = document.getElementById('searchInput').value;
  
    $.ajax({
      type: 'POST',
      url: '/search',
      data: { companyName: searchInput },
      success: function (response) {
        displayResults(response.searchResults);
      },
      error: function (error) {
        console.error('Error performing search:', error.responseText);
      }
    });
  }
  
  function displayResults(searchResults) {
    const searchResultsContainer = document.getElementById('searchResults');
    searchResultsContainer.innerHTML = ''; // Clear previous results
  
    if (searchResults.length === 0) {
      searchResultsContainer.innerHTML = '<p>No results found.</p>';
    } else {
      searchResults.forEach(result => {
        const listItem = document.createElement('li');
        listItem.textContent = `${result.symbol} - ${result.name}`;
        searchResultsContainer.appendChild(listItem);
      });
    }
  }
  