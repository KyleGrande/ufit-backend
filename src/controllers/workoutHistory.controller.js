const workoutHistoryService = require("../service/workoutHistory.service");

class workoutHistoryController {
  async getItems(req, res) {
    try {
      const data = await workoutHistoryService.getItems();
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

  async getItemByUserId(req, res) {
    try {
      const data = await workoutHistoryService.getItemByUserId(req.params);
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

  async getItemByProgramId(req, res) {
    try {
      const data = await workoutHistoryService.getItemByProgramId(req.params);
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
      const data = await workoutHistoryService.insertItem(payload);
      if (data) {
        return res.status(200).json({
          success: true,
          message: "workoutHistory created",
          data,
        });
      }
      return res.status(200).json({
        success: false,
        message: "Failed to create workoutHistory",
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
      const data = await workoutHistoryService.updateItem(payload);
      if (data) {
        return res.status(200).json({
          success: true,
          message: "workoutHistory updated",
          data,
        });
      }
      return res.status(200).json({
        success: false,
        message: "Failed to update workoutHistory",
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
      const data = await workoutHistoryService.deleteItemById(payload);
      if (data) {
        return res.status(200).json({
          success: true,
          message: "workoutHistory deleted",
          data,
        });
      }
      return res.status(200).json({
        success: false,
        message: "Failed to delete workoutHistory",
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

module.exports = new workoutHistoryController();
