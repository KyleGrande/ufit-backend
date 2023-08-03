const { model } = require("mongoose");
const roundsModel = require("../models/rounds.model");

class service {
  async getItems() {
    const data = await roundsModel.find().exec();
    return data;
  }

  async getItemByUserId(payload) {
    console.log("payload", payload);
    const { userId } = payload;
    const data = await roundsModel.find({ userId }).exec();
    console.log("data", data);
    return data;
  }

  //this block to post data to our collection
  async insertItem(payload) {
    const request = new roundsModel(payload);
    const data = await request.save();
    return data;
  }
  //here is the query to find user by id and update data
  async updateItem(payload) {
    const { id } = payload; //object destructuring
    const data = await roundsModel.findByIdAndUpdate(id, payload, {
      returnOriginal: false,
    });
    return data;
  }
  //here we are deleting the user document by id
  async deleteItemById(payload) {
    const { id } = payload; //object destructuring
    const data = await roundsModel.deleteOne({ _id: id }); //in mongodb our document is _id, but in front end it is id
    return data.deletedCount || null;
  }
}

module.exports = new service();
