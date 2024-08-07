let user = {
  profile: {
    name: "Karan Raj",
    address: {
      city: "BodhGaya",
    },
  },
};

// Without optional chaining
// let city =
//   user && user.profile && user.profile.address && user.profile.address.city;
// console.log(city);

let city = user?.profile?.address?.city;
console.log(city); 
