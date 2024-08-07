let city = "";
let country = "India";
let continent = "Asea";
console.log(city || country || continent || "Unknown");
//========
let user = {
  isAuthenticated: false,
  username: "",
};

user.username = user.isAuthenticated || "Karan";

console.log("Username:", user.username); 
