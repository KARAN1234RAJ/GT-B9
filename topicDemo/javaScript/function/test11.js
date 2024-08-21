let second = 0;
let minute = 0;
let hour = 0;

let timer = setInterval(() => {
  second++;
  console.log("second: ", second);
  if (second === 60) {
    second = 0;
    minute++;
    console.log("minute: ", minute);
    if (minute === 60) {
      minute = 0;
      hour++;
      console.log(hour);
    }
  }
}, 1000);
