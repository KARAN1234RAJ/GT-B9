//By literal method
let car = {
  name: "Maruti",
  model: "Swift",
  color: "red",
  price: 550000,
};
console.log(car);
//By constructor method
let bike = new Object();
bike.name = "Pulsar";
bike.model = "Dominar";
bike.color = "red";
bike.price = 200000;

console.log(bike);

console.log(car.name);

console.log(car.color);

console.log(car.price);

console.log(car["name"]);

console.log(car["color"]);

console.log(car["price"]);
