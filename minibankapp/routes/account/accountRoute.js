"use strict";

const express = require("express");
const path = require("path");
const accountRouter = express.Router();
const accountDAO = require("../../dao/AccountDAO");
const Account = require("../../model/Account");

const accountsArray = accountDAO.getAccounts();
accountRouter.get("/", (req, res) => {
  res.render("account.pug", { accounts: accountsArray });
});

accountRouter.post("/add", (req, res, next) => {
  accountDAO.addAccount(
    new Account(
      req.body.txtAccountNo,
      req.body.txtCustomerName,
      req.body.ddlAccountType
    )
  );
  res.redirect("back");
});

module.exports = accountRouter;
