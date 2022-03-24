const accountDAO = require("../dao/AccountDAO");
const AccountModel = require("../model/mongoAccount");

exports.findAll = async () => {
  const data = await AccountModel.find();
  return data;
};

exports.create = async (acc) => {
  //new account from request body
  const account = new AccountModel({
    accountNo: acc.accountNo,
    accountType: acc.accountType,
    customerName: acc.customerName,
  });

  //saving to db
  account
    .save(account)
    .then((data) => {
      return "200";
    })
    .catch((err) => {
      res.status(500).send({ message: err.message || "Something went wroong" });
    });
};
