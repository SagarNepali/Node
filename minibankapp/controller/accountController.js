const accountDAO = require("../dao/AccountDAO");
const AccountModel = require("../model/mongoAccount");

// const accountController = (() => {
//   const getAccounts = async function (req, res) {
//     try {
//       const accounts = await accountDAO.getAccounts();
//       console.log("cont", accounts);
//       return accounts;
//     } catch (error) {
//       res.status(500);
//       res.render("50x", { error: error });
//     }
//   };

//   const addNewAccount = async function (req, res) {
//     const account = new Account(
//       req.body.accountNo,
//       req.body.accountType,
//       req.body.customerName
//     );
//     try {
//       const result = await accountDAO.addAccount(account);
//       return result;
//     } catch (error) {
//       res.status(500);
//       res.render("50x", { error: error });
//     }
//   };

//   return {
//     getAccounts: getAccounts,
//     addNewAccount: addNewAccount,
//   };
// })();

//save new account
exports.create = (req, res) => {
  //validate request
  if (!req.body) {
    res.status(400).send({ message: "Content cannot be empty" });
    return;
  }

  //new account from request body
  const account = new AccountModel({
    accountNo: req.body.accountNo,
    accountType: req.body.accountType,
    customerName: req.body.customerName,
  });

  //saving to db
  account
    .save(account)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message || "Something went wroong" });
    });
};

//get all accounts
exports.find = (req, res) => {
  AccountModel.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message || "Something went wroong" });
    });
};

//update an account
exports.update = (req, res) => {};

//deletes an account
exports.delete = (req, res) => {};
