const stockSymbolInput = document.getElementById('stock-symbol');
    const suggestionsContainer = document.getElementById('suggestions');

    stockSymbolInput.addEventListener('input', debounce(getStockSuggestions, 300));

    function debounce(func, delay) {
        let timeoutId;
        return function() {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                func.apply(this, arguments);
            }, delay);
        };
    }search

    function getStockSuggestions() {
        const inputText = stockSymbolInput.value.trim();
        if (inputText === '') {
            suggestionsContainer.innerHTML = '';
            return;
        }

        const apiKey = '0609U2BSUNIKGYH8'; 
        const apiUrl = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${inputText}&apikey=${apiKey}`;

        axios.get(apiUrl)
            .then(response => {
                const suggestions = response.data.bestMatches || [];
                displaySuggestions(suggestions);
            })
            .catch(error => {
                console.error('Error fetching stock suggestions:', error.message);
            });
    }

    function displaySuggestions(suggestions) {
        suggestionsContainer.innerHTML = '';

        suggestions.forEach(suggestion => {
            const suggestionItem = document.createElement('div');
            suggestionItem.classList.add('suggestion-item');
            suggestionItem.textContent = suggestion['1. symbol'];
            suggestionItem.addEventListener('click', () => {
                stockSymbolInput.value = suggestion['1. symbol'];
                suggestionsContainer.innerHTML = '';
            });
            suggestionsContainer.appendChild(suggestionItem);
        });
    }