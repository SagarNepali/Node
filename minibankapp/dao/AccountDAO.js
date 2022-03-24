const Account = require("../model/Account");
const AccountModel = require("../model/mongoAccount");

const accountDAO = (function () {
  // const connection = dbConnectionMngr.getConnection();
  const getAccounts = async () => {
    let accounts = [];
    await AccountModel.find()
      .then((data) => {
        accounts = data;
      })
      .catch((err) => {
        console.log(err);
      });
    return accounts;
  };

  const addAccount = (account) => {
    accounts.push(account);
  };

  return {
    getAccounts: getAccounts,
    addAccount: addAccount,
  };
})();

module.exports = accountDAO;
