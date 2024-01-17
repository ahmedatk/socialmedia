// Import necessary libraries (Make sure to include the MongoDB Node.js driver in your project)
const MongoClient = require('mongodb').MongoClient;

// MongoDB Atlas connection string
const connectionString = 'mongodb+srv://ahmedzaweel:O7uoKpcnklsR5GWA@stock-profile.dbdvxpt.mongodb.net/?retryWrites=true&w=majority';

// Function to register a user
async function registerUser() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        // Connect to MongoDB Atlas
        const client = await MongoClient.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
        const db = client.db('account.profile'); // Replace 'your_database_name' with your actual database name

        // Insert user data into the collection
        const result = await db.collection('users').insertOne({
            name: name,
            email: email,
            password: password,
        });

        console.log('User registered successfully:', result.ops[0]);

        // Close the database connection
        client.close();
    } catch (error) {
        console.error('Error registering user:', error);
    }
}
