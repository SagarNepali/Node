"use strict";

const mongoose = require("mongoose");
const dbConfig = require("./dbconfig");
const dbConnectionMngr = (function (dbConfig) {
  /**
   * Makes and returns a Database connection pool using the given configuration
   */
  const getConnection = async function () {
    await mongoose
      .connect(
        "mongodb+srv://nepalisagar:uzl299wBM5D57IqA@freecluster.nzmza.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
      )
      .then(() => {
        console.log("Database connected");
      })
      .catch((err) => {
        console.log("Error; ", err);
      });
  };
  return {
    getConnection: getConnection,
  };
})(dbConfig);

module.exports = dbConnectionMngr;
