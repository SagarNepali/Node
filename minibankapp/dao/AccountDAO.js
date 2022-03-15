const Account = require("../model/Account");

const accountDAO = (function () {
  let accounts = [];
  const getAccounts = function () {
    accounts.push(new Account("01-111-1111", "Checking", "Anna Smith"));

    accounts.push(new Account("01-111-1112", "Savings", "Papa Jones"));

    accounts.push(new Account("01-111-1113", "Loan", "John Doe"));
    console.log(accounts);
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
