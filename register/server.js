const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'register.html'));
});

const PORT = process.env.PORT || 8080; // Change the port to 8080
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
