const { default: mongoose } = require("mongoose");

module.exports = (mongoose) => {
  const Account = mongoose.model(
    "account",
    mongoose.Schema(
      {
        accountNo: String,
        accountType: String,
        customerName: String,
      },
      { timestamps: true }
    )
  );
  return Account;
};
