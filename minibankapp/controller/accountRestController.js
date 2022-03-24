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
