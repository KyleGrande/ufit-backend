const { model } = require("mongoose");
const programModel = require("../models/program.model");

class service {
  async getItems() {
    const data = await programModel.find().exec();
    return data;
  }

  async getItemByUserId(payload) {
    console.log("payload", payload);
    const { userId } = payload;
    const data = await programModel.find({ userId }).exec();
    console.log("data", data);
    return data;
  }

  //this block to post data to our collection
  async insertItem(payload) {
    const request = new programModel(payload);
    const data = await request.save();
    return data;
  }
  //here is the query to find user by id and update data
  async updateItem(payload) {
    const { id } = payload; //object destructuring
    const data = await programModel.findByIdAndUpdate(id, payload, {
      returnOriginal: false,
    });
    return data;
  }
  //here we are deleting the user document by id
  async deleteItemById(payload) {
    const { id } = payload; //object destructuring
    const data = await programModel.deleteOne({ _id: id }); //in mongodb our document is _id, but in front end it is id
    return data.deletedCount || null;
  }
}

module.exports = new service();
