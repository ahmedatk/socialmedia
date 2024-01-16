document.addEventListener('DOMContentLoaded', () => {
   
    fetchData();
  });
  
  let myChart; 
  
  async function fetchData() {
    try {
      const stockSymbolInput = document.getElementById('stockSymbol');
      const stockSymbol = stockSymbolInput.value || 'AAPL'; // Default to AAPL
  
      const response = await fetch(`/fetchData?stockSymbol=${stockSymbol}`);
  
      if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.statusText}`);
      }
  
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new Error('Invalid response format');
      }
  
      const data = await response.json();
  
      if (myChart) {
        myChart.destroy();
      }
  
      const ctx = document.getElementById('financialChart').getContext('2d');
      myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: data.dates,
          datasets: [{
            label: 'Closing Prices',
            data: data.closingPrices,
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            fill: false,
          }]
        },
      });
    } catch (error) {
      console.error(error);
      alert('Error fetching data. Please check the stock symbol and try again.');
    }
  }
  