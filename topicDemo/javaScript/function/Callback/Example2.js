function mainFunction(callback) {
  console.log("Performing operation...");
  setTimeout(function () {
    callback("Operation complete");
  }, 1000);
}
function callbackFunction(result) {
  console.log("Result: " + result);
}
mainFunction(callbackFunction);

//===============================

