const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Add your name"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "add your email"],
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "add your password"],
      min: 6,
      max: 62,
    },
    roll: {
      type: String,
      default: "user",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
