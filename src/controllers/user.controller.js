const { comparePasswords } = require("../helper-function/bcrypt.helper"); //add bcrypt helper func
const userService = require("../service/user.service");
const jwt = require("jsonwebtoken");

class userController {
  async getItems(req, res) {
    try {
      const data = await userService.getItems();
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
      const userExist = await userService.getItemByEmailOrUserName(payload); //check existance of user

      if (userExist.length > 0) {
        return res.status(200).json({
          success: false,

          message: "Either email or user name already exists",

          data: null,
        });
      }
      const data = await userService.insertItem(payload);
      if (data) {
        return res.status(200).json({
          success: true,
          message: "User created",
          data,
        });
      }
      return res.status(200).json({
        success: false,
        message: "Failed to create user",
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

  async login(req, res) {
    const payload = req.body;
    console.log("-------------------------------");
    console.log("payload", payload);
    console.log("-------------------------------");

    const { password } = payload;
    try {
      const data = await userService.getItemByEmail(payload);
      if (data) {
        console.log("-------------------------------");
        console.log("user found");
        console.log("-------------------------------");

        if (comparePasswords(password, data.password)) {
          //compare passwords

          console.log("-------------------------------");
          console.log("passwords matched");
          console.log("-------------------------------");

          const token = jwt.sign(
            {
              id: data?._id,
              firstName: data?.firstName,
              lastName: data?.lastName,
              phoneNumber: data?.phoneNumber,
              userName: data?.userName,
            },
            process.env.SECRET_KEY,
            {
              expiresIn: "7d", //valid for 7 days
            }
          );
          
          console.log("-------------------------------");
          console.log("token");
          console.log(token);
          console.log("-------------------------------");
          console.log("jwt token generated");
          console.log("-------------------------------");

          return res.status(200).json({
            success: true,
            message: "User logged in",
            // data,
            token,
          });
        }
        return res.status(200).json({
          success: false,
          message: "Incorrect password",
          data: null,
        });
      }
      return res.status(200).json({
        success: false,
        message: "Email does not exist",
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
      const data = await userService.updateItem(payload);
      if (data) {
        return res.status(200).json({
          success: true,
          message: "User updated",
          data,
        });
      }
      return res.status(200).json({
        success: false,
        message: "Failed to update user",
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
      const data = await userService.deleteItemById(payload);
      if (data) {
        return res.status(200).json({
          success: true,
          message: "User deleted",
          data,
        });
      }
      return res.status(200).json({
        success: false,
        message: "Failed to delete user",
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

module.exports = new userController();
