const mongoose = require("mongoose");
const URL_MONGODB = "mongodb://127.0.0.1:27017/db_loko";

mongoose.connect(URL_MONGODB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Database Connected to", URL_MONGODB);
  })
  .catch((error) => {
    console.error("Database Connection Error:", error);
  });

module.exports = mongoose;
