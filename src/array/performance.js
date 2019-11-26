const helpers = require('../helpers');
const ArrayWrapper = require('.');

const arr = [1, 2, 3, 4, 5];
const inputArray = new ArrayWrapper(arr);

// // TESTING: array.map()
helpers.printTime({
  arrMap: () => inputArray.map(item => Number(item) + 1),
  arrMapIndex: () => inputArray.map((item, index) => `Index: ${index} - ${Number(item) + Number(index)}`),
  nativeArrMap: () => arr.map(item => Number(item) + 1),
  nativeArrMapIndex: () => arr.map((item, index) => `Index: ${index} - ${Number(item) + Number(index)}`),
});

// // TESTING: array.forEach()
helpers.printTime({
  'simpleForEach': () => inputArray.forEach(item => console.log(Number(item) + 1)),
  'indexForEach': () => inputArray.forEach((item, index) => console.log(`Index: ${index} - `, Number(item) + Number(index))),
  'nativeSimpleForEach': () => arr.forEach(item => console.log(Number(item) + 1)),
  'nativeIndexForEach': () => arr.forEach((item, index) => console.log(`Index: ${index} - `, Number(item) + Number(index))),
});

// // TESTING: array.reduce()
helpers.printTime({
  arrReduceNumber: () => inputArray.reduce((acc, item) => acc + Number(item), 0),
  arrReduceString: () => inputArray.reduce((acc, item) => acc + item.toString(), ''),
  arrReduceObject: () => inputArray.reduce((acc, item) => {
    acc[item.toString() + '---ABCABC'] = `New prop - ${item}`;

    return acc;
  }, {}),
  nativeArrReduceNumber: () => arr.reduce((acc, item) => acc + Number(item), 0),
  nativeArrReduceString: () => arr.reduce((acc, item) => acc + item.toString(), ''),
  nativeArrReduceObject: () => arr.reduce((acc, item) => {
    acc[item.toString() + '---ABCABC'] = `New prop - ${item}`;

    return acc;
  }, {}),
});

// // TESTING: array.filter()
helpers.printTime({
  arrFilter: () => inputArray.filter(item => Number(item) > 3),
  arrFilterVoid: () => inputArray.filter(item => Number(item) > 99),
  nativeArrFilter: () => inputArray.filter(item => Number(item) > 3),
  nativeArrFilterVoid: () => inputArray.filter(item => Number(item) > 99),
})

// TESTING: array.find()
helpers.printTime({
  arrFind: () => inputArray.find(item => item > 2),
  arrFindVoid: () => inputArray.find(item => item > 99),
  nativeArrFind: () => inputArray.find(item => item > 2),
  nativeArrFindVoid: () => inputArray.find(item => item > 99),
});

// // TESTING: array.every()
helpers.printTime({
  arrEvery: () => inputArray.every(item => item > 0),
  arrEveryVoid: () => inputArray.every(item => item > 99),
  nativeArrEvery: () => inputArray.every(item => item > 0),
  nativeArrEveryVoid: () => inputArray.every(item => item > 99),
});

// // TESTING: array.fill()
helpers.printTime({
  arrFill: () => inputArray.fill('abc', 1, 3),
  arrFillNegative: () => inputArray.fill('abc', -1, 5),
  arrFillInvalidInterval: () => inputArray.fill('abc', -1, -6),
  nativeArrFill: () => inputArray.fill('abc', 1, 3),
  nativeArrFillNegative: () => inputArray.fill('abc', -1, 5),
  nativeArrFillInvalidInterval: () => inputArray.fill('abc', -1, -6),
});

// // TESTING: array.includes()
helpers.printTime({
  arrIncludes: () => inputArray.includes(2),
  arrIncludesStart: () => inputArray.includes(5, 2),
  arrIncludesFalse: () => inputArray.includes('abc'),
  nativeArrIncludes: () => inputArray.includes(2),
  nativeArrIncludesStart: () => inputArray.includes(5, 2),
  nativeArrIncludesFalse: () => inputArray.includes('abc'),
});
