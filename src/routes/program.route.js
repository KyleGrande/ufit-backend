const express = require("express");
const router = express.Router();
const programController = require("../controllers/program.controller");

router.get("/", programController.getItems);
router.get("/by-userId/:userId", programController.getItemByUserId);
router.post("/", programController.insertItem);
router.put("/by-id", programController.updateItem);
router.delete("/by-id/:id", programController.deleteItemById);

module.exports = router;
