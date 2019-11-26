const arrayWrapper = require('./array');

const arr = [1, 2, 3, 4, 5];
const arrMap = new arrayWrapper(arr).map(item => Number(item) + 1);
const arrMapVoid = new arrayWrapper(arr).map();

console.log('arrMap', arrMap);
console.log('arrMapVoid', arrMapVoid);