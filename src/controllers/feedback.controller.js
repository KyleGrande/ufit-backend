const feedbackService = require("../service/feedback.service");

class feedbackController {
  async getItems(req, res) {
    try {
      const data = await feedbackService.getItems();
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
      const data = await feedbackService.insertItem(payload);
      if (data) {
        return res.status(200).json({
          success: true,
          message: "Feedback created",
          data,
        });
      }
      return res.status(200).json({
        success: false,
        message: "Failed to create feedback",
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
      const data = await feedbackService.updateItem(payload);
      if (data) {
        return res.status(200).json({
          success: true,
          message: "Feedback updated",
          data,
        });
      }
      return res.status(200).json({
        success: false,
        message: "Failed to update feedback",
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
      const data = await feedbackService.deleteItemById(payload);
      if (data) {
        return res.status(200).json({
          success: true,
          message: "Feedback deleted",
          data,
        });
      }
      return res.status(200).json({
        success: false,
        message: "Failed to delete feedback",
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

module.exports = new feedbackController();
