const JWT = require("jsonwebtoken");
const { response } = require("express");
const { hashPassword, comparePassword } = require("../helper/HashedPassword");
const UserModel = require("../model/UserModel");

// ------------  For Registration  ------------
const RegisterController = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log(req.body);
    // VALIDAtiON
    if (!name) {
      return res.send({
        success: false,
        message: "name is requireed",
      });
    }
    if (!email) {
      return res.send({
        success: false,
        message: "email is requireed",
      });
    }
    if (!password || password.length < 6) {
      return res.send({
        success: false,
        message: "password is requireed & 6 character long",
      });
    }

    // EXISTING USER
    const ExistingUser = await UserModel.findOne({ email });
    if (ExistingUser) {
      return res.send({
        success: false,
        message: "user already register with this email",
      });
    }
    // Hashed Password
    const hashedPasswrord = await hashPassword(password);

    // SAVE DATA IN DATABASE
    const user = await UserModel({
      name,
      email,
      password: hashedPasswrord,
    }).save();

    return res.status(201).send({
      success: true,
      message: "registration succesfull please login",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "there is error in Registration",
      error,
    });
  }
};

// ------------  For Login  ------------
const LoginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.send({
        success: false,
        message: "Please provide email or password",
      });
    }

    // Find User
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.send({
        success: false,
        message: "User Not Found",
      });
    }

    // match
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.send({
        success: false,
        message: "Invalid UserName And Password",
      });
    }

    // JSON WEB TOKEN
    const token = await JWT.sign(
      { _id: user._id },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "7d" }
    );

    // Undefained Password
    user.password = undefined;

    return res.status(201).send({
      success: true,
      message: "Successfully Login",
      token,
      user,
    });
  } catch (error) {
    return res.status(500).send({
      suceess: false,
      message: "There is Error in Login api",
      error,
    });
  }
};

module.exports = { RegisterController, LoginController };
