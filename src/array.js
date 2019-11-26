module.exports = function (inputArray = []) {
  this.map = function (iterateeFn = () => { }) {
    const formattedArray = [];
    const arrayLength = inputArray.length;

    for (let counter = 0; counter < arrayLength; counter += 1) {
      const currentItem = inputArray[counter];
      let itemFnApplied;

      // NOTE: runs methods with index if iterateeFn has >1 args
      if (iterateeFn.length > 1) {
        itemFnApplied = iterateeFn(currentItem, counter);
      } else {
        itemFnApplied = iterateeFn(currentItem);
      }

      formattedArray.push(itemFnApplied || null);
    }

    return formattedArray;
  }

  this.forEach = function (iterateeFn = () => { }) {
    const arrayLength = inputArray.length;

    for (let counter = 0; counter < arrayLength; counter += 1) {
      const currentItem = inputArray[counter];

      // NOTE: runs methods with index if iterateeFn has >1 args
      if (iterateeFn.length > 1) {
        iterateeFn(currentItem, counter);
      } else {
        iterateeFn(currentItem);
      }
    }
  }

  this.reduce = function (accumulatorFn = () => { }) {
    // NOTE: used arguments so I wouldnt need to know the 2nd arg data type to create its clone
    ([fnCopy, accumulator] = [...arguments]);
    const arrayLength = inputArray.length;

    for (let counter = 0; counter < arrayLength; counter += 1) {
      const item = inputArray[counter];

      if (accumulatorFn.length === 2) {
        accumulator = accumulatorFn(accumulator, item);
      } else if (accumulatorFn.length === 3) {
        accumulator = accumulatorFn(accumulator, item, counter);
      } else if (accumulatorFn.length === 4) {
        accumulator = accumulatorFn(accumulator, item, counter, inputArray);
      }
    }

    return accumulator;
  }

  this.filter = function(filterFn = () => true) {
    const filteredArray = [];
    const arrayLength = inputArray.length;

    for (let counter = 0; counter < arrayLength; counter += 1) {
      const item = inputArray[counter];

      if (filterFn(item)) filteredArray.push(item);
    }

    return filteredArray;
  };

  this.find = function(findFn = () => false) {
    let itemFound;
    const arrayLength = inputArray.length;

    for (let counter = 0; counter < arrayLength; counter += 1) {
      const item = inputArray[counter];

      if (findFn(item)) {
        itemFound = item;

        break;
      }
    }

    return itemFound;
  }
}
