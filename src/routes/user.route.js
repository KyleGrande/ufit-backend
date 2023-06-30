const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");

router.get("/", userController.getItems);
router.post("/", userController.insertItem);
router.put("/by-id", userController.updateItem);
router.delete("/by-id/:id", userController.deleteItemById);

module.exports = router;
