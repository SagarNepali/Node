"use strict";

const mongoose = require("mongoose");

const config = require("config");
const dbConfig = config.get("MiniBankingApp.dbConfig.dbName");

const dbConnectionMngr = (function (dbConfig) {
  /**
   * Makes and returns a Database connection pool using the given configuration
   */
  const getConnection = function () {
    mongoose
      .connect(dbConfig)
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
