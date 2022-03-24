"use strict";

const express = require("express");
const path = require("path");
const accountRouter = express.Router();
const accountDAO = require("../../dao/AccountDAO");
const Account = require("../../model/Account");
const accountController = require("../../controller/accountController");

accountRouter.get("/", async (req, res) => {
  res.render("account.pug", { accounts: await accountController.findAll() });
});

accountRouter.post("/add", (req, res, next) => {
  accountDAO.addAccount(
    new Account(
      req.body.txtAccountNo,
      req.body.ddlAccountType,
      req.body.txtCustomerName
    )
  );
  res.redirect("back");
});

//API
accountRouter.post("/api/accounts", accountController.create);
accountRouter.get("/api/accounts", accountController.find);
accountRouter.put("/api/accounts/:id", accountController.update);
accountRouter.delete("/api/accounts", accountController.delete);

module.exports = accountRouter;
