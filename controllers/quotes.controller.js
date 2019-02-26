const Quotes = require("../models/quotes.model");

//simple version, without validation or sanitation
exports.test = function (req, res){
    res.send("Greetings from the Test controller!");
}; 

exports.quotes_create = function (req, res){
    let quotes = new Quotes(
        {
            quote:'This world is but a canvas to our imagination.',//req.body.quote,
            author:' Henry David Thoreau'//req.body.author
        }
    );
    quotes.save(function (err){
        if (err){
            return res.send(err);
        }
        res.send({
            "message":"Quote created successfully",
            "quotes": quotes
        });
    });
};

exports.quotes_details = function (req, res){
    Quotes.findById(req.params.id, function(err,quotes){
        if(err) {
            return res.send(err);
        }
        res.send(quotes);
    });
};

exports.quotes_update = function (req, res){
    let quotes = {
        quote: " A goal is a dream with a deadline. |",
        author: " Napoleon Hill"

    };
    Quotes.findByIdAndUpdate(req.params.id, {$set: quotes}, // req.body
    function (err, quotes){
        if (err){
            return res.send(err);
        }
        res.send("Quote updated.");
    });
};

exports.quotes_delete = function (req, res){
    Quotes.findByIdAndRemove(req.params.id, function(err){
        if(err){
            return res.send(err);
        }
        res.send("Deleted successfully!");
    });
};