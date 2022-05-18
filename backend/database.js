const mongoose = require('mongoose');

function DbConnect() {
  const DB_URL = process.env.MONGO_CONNECTION_URL;
  mongoose
    .connect(DB_URL)
    .then(() => console.log("database connection successful!"))
    .catch((err) => console.log(err));
}


module.exports = DbConnect;