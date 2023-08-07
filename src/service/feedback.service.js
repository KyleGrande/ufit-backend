const { model } = require("mongoose");
const feedbackModel = require("../models/feedback.model");

class service {
  async getItems() {
    const data = await feedbackModel.find().exec();
    return data;
  }

  async getItemByUserId(payload) {
    console.log("payload", payload);
    const { userId } = payload;
    const data = await feedbackModel.find({ userId }).exec();
    console.log("data", data);
    return data;
  }

  async getItemByProgramId(payload) {
    console.log("payload", payload);
    const { programId } = payload;
    const data = await feedbackModel.find({ programId }).exec();
    console.log("data", data);
    return data;
  }
  //this block to post data to our collection
  async insertItem(payload) {
    const request = new feedbackModel(payload);
    const data = await request.save();
    return data;
  }
  //here is the query to find user by id and update data
  async updateItem(payload) {
    const { id } = payload; //object destructuring
    const data = await feedbackModel.findByIdAndUpdate(id, payload, {
      returnOriginal: false,
    });
    return data;
  }
  //here we are deleting the user document by id
  async deleteItemById(payload) {
    const { id } = payload; //object destructuring
    const data = await feedbackModel.deleteOne({ _id: id }); //in mongodb our document is _id, but in front end it is id
    return data.deletedCount || null;
  }
}

module.exports = new service();
