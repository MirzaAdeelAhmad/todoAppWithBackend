const mongoose = require("mongoose");
const colors = require("colors");

const ConnectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `Connect to Database Successfully ${mongoose.connection.host}`.bgBlue
        .white
    );
  } catch (error) {
    console.log("Connect to Database Failed".bgRed.white);
    console.log(error);
  }
};

module.exports = ConnectToDatabase;
