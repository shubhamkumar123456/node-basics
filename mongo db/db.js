const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const dbName = 'trial';

async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('authentication');
    

    // let response = await collection.find({}).toArray()
    // console.log(response)
    return collection
    // the following code examples can be pasted here...
  
    // return 'done.';
  }
  
//   main()

  module.exports =main

    