const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

const API_KEY = 'oeDOoawsGAgTpnK4sbyyzTlCxjW1FFev'; // Replace with your Financial Modeling Prep API key
const API_URL = 'https://financialmodelingprep.com/api/v3/company/profile';

app.post('/search', async (req, res) => {
  const ticker = req.body.ticker;

  try {
    const response = await axios.get(API_URL + `/${ticker}`, {
      params: {
        apiKey: API_KEY,
      },
    });

    const data = response.data;

    if (data && data.profile) {
      res.send({
        companyName: data.profile.companyName,
        exchange: data.profile.exchange,
        industry: data.profile.industry,
      });
    } else {
      res.send({ error: 'Company not found' });
    }
  } catch (error) {
    console.error('Error performing search:', error.message);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
