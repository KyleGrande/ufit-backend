const movementService = require("../service/movement.service");

class movementController {
  async getItems(req, res) {
    try {
      const data = await movementService.getItems();
      if (data.length > 0) {
        return res.status(200).json({
          success: true,
          message: "Data aquired",
          data,
        });
      }
      return res.status(200).json({
        success: false,
        message: "No data",
        data: null,
      });
    } catch (error) {
      return res.status(200).json({
        success: false,
        message: "Exception",
        error,
      });
    }
  }

  async insertItem(req, res) {
    const payload = req.body;
    console.log("payload", payload);
    try {
      const data = await movementService.insertItem(payload);
      if (data) {
        return res.status(200).json({
          success: true,
          message: "movement created",
          data,
        });
      }
      return res.status(200).json({
        success: false,
        message: "Failed to create movement",
        data: null,
      });
    } catch (error) {
      return res.status(200).json({
        success: false,
        message: "Exception",
        error,
      });
    }
  }

  async updateItem(req, res) {
    const payload = req.body;
    console.log("payload", payload);
    try {
      const data = await movementService.updateItem(payload);
      if (data) {
        return res.status(200).json({
          success: true,
          message: "Movement updated",
          data,
        });
      }
      return res.status(200).json({
        success: false,
        message: "Failed to update movement",
        data: null,
      });
    } catch (error) {
      return res.status(200).json({
        success: false,
        message: "Exception",
        error,
      });
    }
  }

  async deleteItemById(req, res) {
    const payload = req.params;
    console.log("payload", payload);
    try {
      const data = await movementService.deleteItemById(payload);
      if (data) {
        return res.status(200).json({
          success: true,
          message: "Movement deleted",
          data,
        });
      }
      return res.status(200).json({
        success: false,
        message: "Failed to delete movement",
        data: null,
      });
    } catch (error) {
      return res.status(200).json({
        success: false,
        message: "Exception",
        error,
      });
    }
  }
}

module.exports = new movementController();
