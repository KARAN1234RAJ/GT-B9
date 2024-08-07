let isLoggedIn = true;
let message = isLoggedIn ? "Welcome back, User!" : "Please log in.";
console.log(message);

//=============================
let hasCoupon = false;
let price = 100;
let finalPrice = hasCoupon ? price * 0.9 : price;
console.log(finalPrice);

//=============================
let userRole = "admin";
let dashboard = userRole === "admin" ? "Admin Dashboard" : "User Dashboard";
console.log(dashboard);

//=============================
let isDarkMode = true;
let theme = isDarkMode ? "dark-theme" : "light-theme";
console.log(theme);

//=============================
let userInput = null;
let defaultValue = "Default Text";
let displayText =
  userInput !== null && userInput !== undefined ? userInput : defaultValue;
console.log(displayText);

//=============================
let isLoading = true;
let content = isLoading ? "Loading..." : "Data Loaded";
console.log(content);

//=============================
let isEmailValid = false;
let validationMessage = isEmailValid
  ? "Email is valid."
  : "Please enter a valid email.";
console.log(validationMessage);

//=============================
let customSettings = null;
let defaultSettings = { theme: "light", fontSize: 14 };
let settings = customSettings ? customSettings : defaultSettings;
console.log(settings);

//=============================
let isSubscribed = false;
let buttonLabel = isSubscribed ? "Unsubscribe" : "Subscribe";
console.log(buttonLabel);

//=============================
let userAge = 20;
let accessMessage = userAge >= 18 ? "Access granted" : "Access denied";
console.log(accessMessage);
