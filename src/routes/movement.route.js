const express = require("express");
const router = express.Router();
const movementController = require("../controllers/movement.controller");

router.get("/", movementController.getItems);
router.get("/by-id/:id", movementController.getItemById);
router.post("/", movementController.insertItem);
router.put("/by-id", movementController.updateItem);
router.delete("/by-id/:id", movementController.deleteItemById);
router.post("/by-ids", movementController.getItemsById);
module.exports = router;
