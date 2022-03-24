const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  accountNo: String,
  accountType: String,
  customerName: String,
});

const AccountModel = mongoose.model("account", schema);

module.exports = AccountModel;
