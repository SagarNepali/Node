"use strict";
module.exports = class Account {
  #accountNo;
  #accountType;
  #customerName;

  constructor(accountNo, accountType, customerName) {
    this.accountNo = accountNo;
    this.accountType = accountType;
    this.customerName = customerName;
  }

  getAccountNo() {
    return this.#accountNo;
  }

  setAccountNo(accountNo) {
    this.#accountNo = accountNo;
  }

  getAccountType() {
    return this.#accountType;
  }

  setAccountType(accountType) {
    this.#accountType = accountType;
  }

  getCustomerName() {
    return this.#customerName;
  }

  setCustomerName(customerName) {
    this.#customerName = this.customerName;
  }
};
