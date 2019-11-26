const helpers = require('../helpers');
const ArrayWrapper = require('.');

const arr = [1, 2, 3, 4, 5];
const inputArray = new ArrayWrapper(arr);

// // TESTING: array.map()
helpers.print({
  arrMap: () => inputArray.map(item => Number(item) + 1),
  arrMapIndex: () => inputArray.map((item, index) => `Index: ${index} - ${Number(item) + Number(index)}`),
});

// // TESTING: array.forEach()
helpers.print({
  'simpleForEach': () => inputArray.forEach(item => console.log(Number(item) + 1)),
  'indexForEach': () => inputArray.forEach((item, index) => console.log(`Index: ${index} - `, Number(item) + Number(index))),
});

// // TESTING: array.reduce()
helpers.print({
  arrReduceNumber: () => inputArray.reduce((acc, item) => acc + Number(item), 0),
  arrReduceString: () => inputArray.reduce((acc, item) => acc + item.toString(), ''),
  arrReduceObject: () => inputArray.reduce((acc, item) => {
    acc[item.toString() + '---ABCABC'] = `New prop - ${item}`;

    return acc;
  }, {}),
});

// // TESTING: array.filter()
helpers.print({
  arrFilter: () => inputArray.filter(item => Number(item) > 3),
  arrFilterVoid: () => inputArray.filter(item => Number(item) > 99),
})

// TESTING: array.find()
helpers.print({
  arrFind: () => inputArray.find(item => item > 2),
  arrFindVoid: () => inputArray.find(item => item > 99),
});

// // TESTING: array.every()
helpers.print({
  arrEvery: () => inputArray.every(item => item > 0),
  arrEveryVoid: () => inputArray.every(item => item > 99),
});

// // TESTING: array.fill()
helpers.print({
  arrFill: () => inputArray.fill('abc', 1, 3),
  arrFillNegative: () => inputArray.fill('abc', -1, 5),
  arrFillInvalidInterval: () => inputArray.fill('abc', -1, -6),
});

// // TESTING: array.includes()
helpers.print({
  arrIncludes: () => inputArray.includes(2),
  arrIncludesStart: () => inputArray.includes(5, 2),
  arrIncludesFalse: () => inputArray.includes('abc'),
});
