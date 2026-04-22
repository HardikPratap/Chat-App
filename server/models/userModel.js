// name
// email
// password
// pic
// timestamp

const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    pic: { type: String, require: true, default: "none" },
  },
  {
    timestamps: true,
  },
);

const User = mongoose.model("User", userSchema);
module.exports = User;
