const accountDAO = require("../dao/AccountDAO");
const AccountModel = require("../model/mongoAccount");

exports.findAll = async () => {
  let accs = [];
  await accountDAO.getAccounts().then((data) => {
    accs = data;
  });
  return accs;
};

exports.create = async (acc) => {
  //new account from request body
  const account = new AccountModel({
    accountNo: acc.accountNo,
    accountType: acc.accountType,
    customerName: acc.customerName,
  });
  await accountDAO.saveAccount(account);
};

exports.update = async (id) => {
  await accountDAO.update(id);
};

exports.delete = async (id) => {
  await accountDAO.delete(id);
};
