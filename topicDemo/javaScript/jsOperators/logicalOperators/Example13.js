let user = null;
let defaultUser = "Guest";

let username = user ?? defaultUser;
console.log(username);

user = "Karan";
username = user ?? defaultUser;
console.log(username);
