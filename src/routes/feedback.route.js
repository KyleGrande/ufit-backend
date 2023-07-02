const express = require("express");
const router = express.Router();
const feedbackController = require("../controllers/feedback.controller");

router.get("/", feedbackController.getItems);
router.post("/", feedbackController.insertItem);
router.put("/by-id", feedbackController.updateItem);
router.delete("/by-id/:id", feedbackController.deleteItemById);

module.exports = router;
