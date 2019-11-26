const ArrayWrapper = require('./array');

const arr = [1, 2, 3, 4, 5];
const inputArray = new ArrayWrapper(arr);

// // TESTING: array.map()
// const arrMap = inputArray.map(item => Number(item) + 1);
// const arrMapIndex = inputArray.map((item, index) => `Index: ${index} - ${Number(item) + Number(index)}`);
// const arrMapVoid = inputArray.map();

// console.log('arrMap', arrMap);
// console.log('arrMapIndex', arrMapIndex);
// console.log('arrMapVoid', arrMapVoid);

// // TESTING: array.forEach()
// inputArray.forEach(item => console.log(Number(item) + 1));
// inputArray.forEach((item, index) => console.log(`Index: ${index} - `, Number(item) + Number(index)));

// // TESTING: array.reduce()
// const arrReduceNumber = inputArray.reduce((acc, item) => acc + Number(item), 0);
// const arrReduceString = inputArray.reduce((acc, item) => acc + item.toString(), '');
// const arrReduceObject = inputArray.reduce((acc, item) => {
//   acc[item.toString() + '---ABCABC'] = `New prop - ${item}`;

//   return acc;
// }, {});

// console.log('arrReduceNumber', arrReduceNumber);
// console.log('arrReduceString', arrReduceString);
// console.log('arrReduceObject', arrReduceObject);

// TESTING: array.filter()
const arrFilter = inputArray.filter(item => Number(item) > 3);
const arrFilterVoid = inputArray.filter(item => Number(item) > 99);

console.log('arrFilter', arrFilter);
console.log('arrFilterVoid', arrFilterVoid);