const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});



app.get('/fetchData', async (req, res) => {
    try {
      const apiKey = 'oeDOoawsGAgTpnK4sbyyzTlCxjW1FFev';
      const stockSymbol = req.query.stockSymbol || 'AAPL'; // Default to AAPL
  
      const response = await axios.get(`https://financialmodelingprep.com/api/v3/historical-price-full/${stockSymbol}?apikey=${apiKey}`);
      const historicalData = response.data.historical;
  
      const dates = historicalData.map(item => item.date);
      const closingPrices = historicalData.map(item => item.close);
  
      res.json({ dates, closingPrices });
    } catch (error) {
      console.error(error);
      res.status(500).send('Error fetching data');
    }
  });




app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
