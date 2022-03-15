"use strict";
module.exports = class Account {
  constructor(accountNo, accountType, customerName) {
    this.accountNo = accountNo;
    this.accountType = accountType;
    this.customerName = customerName;
  }
};
