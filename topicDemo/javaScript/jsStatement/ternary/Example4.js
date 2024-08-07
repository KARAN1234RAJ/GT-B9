var AQI = 340;
var result;
if (AQI > 300) {
  result = "Air Quality is BAD";
} else if (AQI > 200) {
  result = "Air Quality is NORMAL";
} else if (AQI > 100) {
  result = "Air Quality is GOOD";
} else {
  result = "Air Quality is EXCELLENT";
}
console.log(result);

//===============================
var result =
  AQI > 300
    ? "Air Quality is BAD"
    : AQI > 200
    ? "Air Quality is NORMAL"
    : AQI > 100
    ? "Air Quality is GOOD"
    : "Air Quality is EXCELLENT";

    console.log(result);
    
