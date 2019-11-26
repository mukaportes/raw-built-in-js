module.exports = function (inputArray = []) {
  this.map = function (iterateeFn = () => { }) {
    const formattedArray = [];

    for (let counter = 0; counter < inputArray.length; counter += 1) {
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
    for (let counter = 0; counter < inputArray.length; counter += 1) {
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

    for (let counter = 0; counter < inputArray.length; counter += 1) {
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

    for (let counter = 0; counter < inputArray.length; counter += 1) {
      const item = inputArray[counter];

      if (filterFn(item)) filteredArray.push(item);
    }

    return filteredArray;
  };

  this.find = function(findFn = () => false) {
    let itemFound;

    for (let counter = 0; counter < inputArray.length; counter += 1) {
      const item = inputArray[counter];

      if (findFn(item)) {
        itemFound = item;

        break;
      }
    }

    return itemFound;
  }

  this.every = function(conditionFn = () => true) {
    let allItemsMeetCondition = true;

    for (let counter = 0; counter < inputArray.length; counter += 1) {
      const item = inputArray[counter];
      
      if (!conditionFn(item)) {
        allItemsMeetCondition = false;

        break;
      }
    }

    return allItemsMeetCondition;
  }

  this.fill = function(defaultValue, startIndex = 0, endIndex = inputArray.length) {
    if ((endIndex - startIndex) <= 0) return inputArray;

    let start = startIndex < 0 ? startIndex + inputArray.length : startIndex;
    let end = endIndex < 0 ? endIndex + inputArray.length : endIndex;

    const inputArrayClone = [...inputArray];

    for (let counter = Number(start); counter < Number(end); counter += 1) {
      inputArrayClone[counter] = defaultValue;
    }

    return inputArrayClone;
  }
}
