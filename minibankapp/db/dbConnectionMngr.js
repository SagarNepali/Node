"use strict";

const mongoose = require("mongoose");

/**
 * Makes and returns a Database connection pool using the given configuration
 */
const getConnection = async () => {
  try {
    const con = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = getConnection;
