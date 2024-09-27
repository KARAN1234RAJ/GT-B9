const isLoggedIn = (req, res, next) => {
  console.log("From Login");
  next();
};

const isValidUser = (req, res, next) => {
  console.log("From Valid User");
  next();
};

module.exports = {
  isLoggedIn,
  isValidUser,
};
