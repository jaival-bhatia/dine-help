const jwt = require("jsonwebtoken");

exports.generateToken = (id) => {
  return jwt.sign({ id }, "secretkey", { expiresIn: "30d" });
};
