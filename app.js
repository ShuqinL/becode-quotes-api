const express = require("express");
const bodyParser = require("body-parser");

const quotes = require("./routes/quotes.route"); //imports routes for the quotes
const app = express();

//set up mongoose connection
const mongoose = require("mongoose");

let dev_db_url = 'mongodb://mymongouser:hellomongouser123@rnc-shard-00-00-6vzo0.mongodb.net:27017,rnc-shard-00-01-6vzo0.mongodb.net:27017,rnc-shard-00-02-6vzo0.mongodb.net:27017/test?ssl=true&replicaSet=RNC-shard-0&authSource=admin&retryWrites=true'; 

const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, {useNewUrlParser:true});
mongoose.Promise = global.Promise;
const db = mongoose.connection;

db.on("success", console.log.bind(console, "MongoDB connection success:"));
db.on("error", console.error.bind(console, "MongoDB connection error:"));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use("/quotes", quotes);

let port = 1234;
app.listen(port,()=>{
    console.log("Server is up and running on port number "+ port);
});



// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://reneelsq:cestRenee%26007@RNC.mongodb.net/admin";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//  // perform actions on the collection object
//   client.close();
// });
 


