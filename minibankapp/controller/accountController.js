const accountDAO = require("../dao/AccountDAO");
const Account = require("../model/Account");
const mongoAccount = require("../model/mongoAccount");

const accountController = (() => {
  const getAccounts = async function (req, res) {
    try {
      const accounts = await accountDAO.getAccounts();
      return accounts;
    } catch (error) {
      res.status(500);
      res.render("50x", { error: error });
    }
  };

  const addNewAccount = async function (req, res) {
    const account = new Account(
      req.body.accountNo,
      req.body.accountType,
      req.body.customerName
    );
    try {
      const result = await accountDAO.addAccount(account);
      return result;
    } catch (error) {
      res.status(500);
      res.render("50x", { error: error });
    }
  };

  return {
    getAccounts: getAccounts,
    addNewAccount: addNewAccount,
  };
})();

module.exports = accountController;
