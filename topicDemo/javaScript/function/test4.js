(function (text) {
  console.log(text);
})("Hi all! Welcome to our page.");
//=======================================

for (var i = 1; i <= 5; i++) {
  (function (count) {
    setTimeout(function () {
      console.log(`Counted till ${count} after ${count} seconds`);
    }, 1000 * i);
  })(i);
}

//===========================================

for (var i = 1; i <= 5; i++) {
  setTimeout(function () {
    console.log(`Counted till ${i} after ${i} seconds`);
  }, 1000 * i);
}
