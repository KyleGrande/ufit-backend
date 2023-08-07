const express = require("express");
const router = express.Router();
const workoutHistoryController = require("../controllers/workoutHistory.controller");
const { authenticate } = require("../middleware/authenticate.middleware");

router.get("/", workoutHistoryController.getItems);
router.get(
  "/by-user-id/:userId",
  authenticate,
  workoutHistoryController.getItemByUserId
);
router.get(
  "/by-program-id/:programId",
  workoutHistoryController.getItemByProgramId
);
router.post("/", workoutHistoryController.insertItem);
router.put("/by-id", workoutHistoryController.updateItem);
router.delete("/by-id/:id", workoutHistoryController.deleteItemById);

module.exports = router;
