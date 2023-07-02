const roundsService = require("../service/rounds.service");

class roundsController {
  async getItems(req, res) {
    try {
      const data = await roundsService.getItems();
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
      const data = await roundsService.insertItem(payload);
      if (data) {
        return res.status(200).json({
          success: true,
          message: "Round created",
          data,
        });
      }
      return res.status(200).json({
        success: false,
        message: "Failed to create round",
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
      const data = await roundsService.updateItem(payload);
      if (data) {
        return res.status(200).json({
          success: true,
          message: "Round updated",
          data,
        });
      }
      return res.status(200).json({
        success: false,
        message: "Failed to update round",
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
      const data = await roundsService.deleteItemById(payload);
      if (data) {
        return res.status(200).json({
          success: true,
          message: "round deleted",
          data,
        });
      }
      return res.status(200).json({
        success: false,
        message: "Failed to delete round",
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

module.exports = new roundsController();
