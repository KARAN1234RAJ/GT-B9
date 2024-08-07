fetch("https://api.example.com/user")
  .then((response) => response.json())
  .then((data) => {
    // Safely access nested properties
    let city = data?.profile?.address?.city;
    console.log(city); // Output: city value or undefined if not available
  })
  .catch((error) => console.error("Error fetching user data:", error));
