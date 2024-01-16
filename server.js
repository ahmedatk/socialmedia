const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./db');

const app = express();
const port = 3000; 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const db = await connectDB();

  try {
    const user = await db.collection('users').insertOne({
      name,
      email,
      password,
    });

    console.log('User registered:', user.ops[0]);
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
