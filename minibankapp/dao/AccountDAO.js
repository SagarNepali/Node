const Account = require("../model/Account");
const AccountModel = require("../model/mongoAccount");

exports.getAccounts = async () => {
  let accounts = [];
  await AccountModel.find().then((data) => {
    accounts = data;
  });
  return accounts;
};

exports.saveAccount = async (account) => {
  account
    .save(account)
    .then((data) => {
      return "200";
    })
    .catch((err) => {
      res.status(500).send({ message: err.message || "Something went wroong" });
    });
};

exports.update = async (id) => {
  let model = await this.findById(id);
  let cust = model.customerName.toUpperCase();
  model.customerName = cust;
  await AccountModel.findByIdAndUpdate(id, model, {
    useFindAndModify: true,
  }).then((data) => {
    return model;
  });
};

exports.findById = async (id) => {
  let acc;
  await AccountModel.findById(id).then((data) => {
    acc = data;
  });
  return acc;
};

exports.delete = async (id) => {
  await AccountModel.findByIdAndDelete(id).then((data) => data);
};
