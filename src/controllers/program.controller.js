const programService = require("../service/program.service");

class programController {
  async getItems(req, res) {
    try {
      const data = await programService.getItems();
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
      const data = await programService.insertItem(payload);
      if (data) {
        return res.status(200).json({
          success: true,
          message: "program created",
          data,
        });
      }
      return res.status(200).json({
        success: false,
        message: "Failed to create program",
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
      const data = await programService.updateItem(payload);
      if (data) {
        return res.status(200).json({
          success: true,
          message: "Program updated",
          data,
        });
      }
      return res.status(200).json({
        success: false,
        message: "Failed to update program",
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
      const data = await programService.deleteItemById(payload);
      if (data) {
        return res.status(200).json({
          success: true,
          message: "Program deleted",
          data,
        });
      }
      return res.status(200).json({
        success: false,
        message: "Failed to delete program",
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

module.exports = new programController();
