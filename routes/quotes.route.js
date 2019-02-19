const express = require("express");
const router = express.Router();

//require the controllers 
const quotes_controller = 
require("../controllers/quotes.controller");

//a simple test url to check that all of our files are communicating correctly.
router.get("/test", quotes_controller.test);

router.post("/create", quotes_controller.quotes_create);
module.exports = router;

router.get("/:id", quotes_controller.quotes_details);

router.put("/:id/update", quotes_controller.quotes_update);

router.delete("/:id/delete", quotes_controller.quotes_delete);
