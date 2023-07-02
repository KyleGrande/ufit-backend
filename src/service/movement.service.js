const { model } = require("mongoose");
const movementModel = require("../models/movement.model");

class service {
  async getItems() {
    const data = await movementModel.find().exec();
    return data;
  }
  //this block to post data to our collection
  async insertItem(payload) {
    const request = new movementModel(payload);
    const data = await request.save();
    return data;
  }
  //here is the query to find user by id and update data
  async updateItem(payload) {
    const { id } = payload; //object destructuring
    const data = await movementModel.findByIdAndUpdate(id, payload, {
      returnOriginal: false,
    });
    return data;
  }
  //here we are deleting the user document by id
  async deleteItemById(payload) {
    const { id } = payload; //object destructuring
    const data = await movementModel.deleteOne({ _id: id }); //in mongodb our document is _id, but in front end it is id
    return data.deletedCount || null;
  }
}

module.exports = new service();
