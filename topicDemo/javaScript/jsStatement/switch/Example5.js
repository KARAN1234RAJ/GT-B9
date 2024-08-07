function groceryPrice(exp) {
  switch (exp) {
    case "Cookies":
    case "Milk":
    case "Fruits":
      console.log("It costs 100 rupees");
      break;
    case "Corn Flakes":
      console.log("Corn Flakes cost 150 rupees");
    default:
      console.log(exp + " is not available right now");
  }
}

groceryPrice("Cookies");

groceryPrice("Fruits");

groceryPrice("Corn Flakes");
