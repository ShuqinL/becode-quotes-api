const express = require("express");
const bodyParser = require("body-parser");

const quotes = require("./routes/quotes.route");
const app = express();

//set up mongoose connection
const mongoose = require("mongoose");
let dev_db_url = 'mongodb://192.168.0.241:27017/quotesDatabase'; 
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use("/quotes", quotes);

let port = 1234;
app.listen(port,()=>{
    console.log("Server is up and running on port number "+ port);
});


