let data = {
  user: {
    profile: {
      name: "Karan",
      contacts: [
        { type: "email", value: "Karan@example.com" },
        { type: "phone", value: "123-456-7890" },
      ],
    },
  },
};

// Accessing nested properties
let email = data?.user?.profile?.contacts?.[0]?.value;
console.log(email); 

// Safely calling a method
let getEmail = data?.user?.getEmail?.();
console.log(getEmail);

// Accessing a non-existent property
let address = data?.user?.profile?.address?.city;
console.log(address); 
