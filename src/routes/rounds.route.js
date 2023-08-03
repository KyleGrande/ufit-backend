const express = require("express");
const router = express.Router();
const roundsController = require("../controllers/rounds.controller");

router.get("/", roundsController.getItems);
router.get("/by-id/:userId", roundsController.getItemByUserId);
router.post("/", roundsController.insertItem);
router.put("/by-id", roundsController.updateItem);
router.delete("/by-id/:id", roundsController.deleteItemById);

module.exports = router;
