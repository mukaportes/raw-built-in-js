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

  this.reduce = function (accumulatorFn = () => { }, accumulator) {
    let accumulatorCopy;

    // NOTE: used arguments so I wouldnt need to know the 2nd arg data type to create its clone
    ([fnCopy, accumulatorCopy] = [...arguments]);
    const arrayLength = inputArray.length;

    for (let counter = 0; counter < arrayLength; counter += 1) {
      const item = inputArray[counter];

      if (accumulatorFn.length === 2) {
        accumulatorCopy = accumulatorFn(accumulatorCopy, item);
      } else if (accumulatorFn.length === 3) {
        accumulatorCopy = accumulatorFn(accumulatorCopy, item, counter);
      } else if (accumulatorFn.length === 4) {
        accumulatorCopy = accumulatorFn(accumulatorCopy, item, counter, inputArray);
      }
    }

    return accumulatorCopy;
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
}
