let car = {
  make: "Toyota",
  model: "Corolla",
  year: 2020,
  displayInfo: function () {
    console.log(
      `This ${this.make} ${this.model} was manufactured in ${this.year}`
    );
  },
};

car.displayInfo();
