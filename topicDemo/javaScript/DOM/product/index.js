const productCart = document.getElementById("productCart");
console.log(productCart);
// Data Fetching
let api = "https://fakestoreapi.com/products";

fetch(api).then((resp) =>
  resp.json().then((data) => {
    console.log(data);

    data.map((product) => {
      let card = document.createElement("div");
      card.className = "product";
      console.log(card);
      card.innerHTML=`
      <h5>${product.title}</h5>
      <img src="${product.image}" alt="${product.title}">
      <span>Price: $${product.price}</span>
      <span>Rating: ${product.rating.rate}</span>`

      productCart.appendChild(card)

      
    });
  })
);
