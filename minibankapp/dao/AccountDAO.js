const Account = require("../model/Account");
const dbConnectionMngr = require("../db/dbConnectionMngr");
const mongoAccount = require("../model/mongoAccount");

const accountDAO = (function () {
  let accounts = [];

  // const connection = dbConnectionMngr.getConnection();
  const getAccounts = function () {
    accounts.push(new Account("01-111-1111", "Checking", "Anna Smith"));
    accounts.push(new Account("01-111-1112", "Savings", "Papa Jones"));
    accounts.push(new Account("01-111-1113", "Loan", "John Doe"));
    return accounts;

    // const connection = await dbConnectionMngr.getConnection();
    // console.log("-> ", connection);
    // return accounts;
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
