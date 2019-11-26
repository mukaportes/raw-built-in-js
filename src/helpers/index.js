const printTime = (fnDict) => {
  const keys = Object.keys(fnDict);

  for (let counter = 0; counter < keys.length; counter += 1) {
    const currentProp = keys[counter];
    const fn = fnDict[currentProp];

    console.time(currentProp);
    console.log(`Value: `, fn());
    console.timeEnd(currentProp);
  }
};

const print = (fnDict) => {
  const keys = Object.keys(fnDict);
  console.log('keys', keys);

  for (let counter = 0; counter < keys.length; counter += 1) {
    const currentProp = keys[counter];
    const fn = fnDict[currentProp];

    console.log(currentProp, fn());
  }
};

module.exports = {
  print,
  printTime,
};
