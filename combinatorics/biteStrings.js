const getMaxBiteStrings = (input) => {
  const strings = input.split('\n');
  const [, zeroes, ones] = strings.splice(0, 1)[0].split(' ');
  let maxStrCount = 0;

  const generateOptions = (zeroesLeft, onesLeft, strings, strCount) => {
    for (let i = 0; i < strings.length; i++) {
      let str = strings[i];
      let strsLeft = strings.slice(1, strings.length);
      let zeroes = str.match(new RegExp('0', 'g'))?.length || 0;
      let ones = str.match(new RegExp('1', 'g'))?.length || 0;

      if (zeroesLeft - zeroes >= 0 || onesLeft - ones >= 0 && strsLeft?.length && str.length) {
        maxStrCount = Math.max(strCount + 1, maxStrCount);
        generateOptions(zeroesLeft - zeroes, onesLeft - ones, strsLeft, strCount + 1);
      }
    }
  };

  generateOptions(zeroes, ones, strings, 0);
  console.log(maxStrCount);
  return maxStrCount;
};

const testCase1 = `3 3 1
1
00
100`;
// answer: 2

const testCase2 = `3 2 4
00
110
101`;
// answer: 2

getMaxBiteStrings(testCase1);