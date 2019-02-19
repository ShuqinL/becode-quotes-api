const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let QuotesSchema = new Schema({
      quote: {type: String, required: true, max: 250},
      author: { type: String, required: true, max: 100},
});

//export the model
module.exports = mongoose.model("Quotes", QuotesSchema);