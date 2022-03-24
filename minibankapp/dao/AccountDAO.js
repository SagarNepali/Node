const Account = require("../model/Account");
const AccountModel = require("../model/mongoAccount");

exports.getAccounts = async () => {
  await AccountModel.find().then((data) => {
    return data;
  });
};
