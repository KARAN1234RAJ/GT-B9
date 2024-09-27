const isLoggedIn = (req, res,next) => {
  console.log("user logged in");
  next();
};

const isValidUser = (req, res,next) => {
  console.log("User is valid");
  next();

};

module.exports = {
  isLoggedIn,
  isValidUser,
};
