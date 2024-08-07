let productCategory = "electronics";
let discount;

switch (productCategory) {
  case "electronics":
    discount = 10;
    break;
  case "clothing":
    discount = 20;
    break;
  case "books":
    discount = 15;
    break;
  default:
    discount = 0;
}

console.log(`Discount: ${discount}%`);
