const salad = ["🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑"];

const saladCloned = [...salad];
console.log(saladCloned);

//===========================
const [tomato, mushroom, ...rest] = ["🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑"];

console.log(tomato);
console.log(mushroom);
console.log(rest);
