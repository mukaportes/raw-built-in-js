const ArrayWrapper = require('./array');

const arr = [1, 2, 3, 4, 5];
const inputArray = new ArrayWrapper(arr);

// TESTING: array.map()
const arrMap = inputArray.map(item => Number(item) + 1);
const arrMapIndex = inputArray.map((item, index) => `Index: ${index} - ${Number(item) + Number(index)}`);
const arrMapVoid = inputArray.map();

console.log('arrMap', arrMap);
console.log('arrMapIndex', arrMapIndex);
console.log('arrMapVoid', arrMapVoid);

// TESTING: array.forEach()
inputArray.forEach(item => console.log(Number(item) + 1));
inputArray.forEach((item, index) => console.log(`Index: ${index} - `, Number(item) + Number(index)));

