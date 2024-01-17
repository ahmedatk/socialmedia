const { MongoClient } = require('mongodb');

const url = 'mongodb+srv://ahmedzaweel:O7uoKpcnklsR5GWA@stock-profile.dbdvxpt.mongodb.net/?retryWrites=true&w=majority'; 
const dbName = 'test'; 

const client = new MongoClient(url, { useUnifiedTopology: true });

async function connectDB() {
  await client.connect();
  console.log('Connected to the database');
  return client.db(dbName);
}

module.exports = connectDB;
