const express = require("express");
const router = express.Router();
const movementController = require("../controllers/movement.controller");

router.get("/", movementController.getItems);
router.post("/", movementController.insertItem);
router.put("/by-id", movementController.updateItem);
router.delete("/by-id/:id", movementController.deleteItemById);

module.exports = router;
