/*
потрібно знайти найдовший підвідрізок масиву a, який менший за дану суму s
вивести його довжину
*/
const slow = (a, s) => {
  let maxLength = 0;
  const n = a.length;

  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++ ) {
      let currArray = a.slice(i, j);
      let currLength = currArray.length;
      let currSum = currArray.reduce((sum, el) => sum + el, 0);

      if (currSum <= s && currLength > maxLength) {
        maxLength = currLength;
      }
    }
  }

  // console.log(maxLength);
  return maxLength;
};

const fast = (a, s) => {
  let maxLength = 0;
  let currSum = 0;
  let l = 0;

  for (let r = 0; r < a.length; r++) {
    let currLength = a.slice(l, r).length;
    currSum += a[r];

    maxLength = Math.max(maxLength, currLength);
  }
  //[ 5, 5, 1, 6, 1 ] 10 2
  // l = 0, r = 0
  // l = 0, r = 1
  // l = 0, r = 2


  // console.log(maxLength);
  return maxLength;
};

const stressTest = () => {
  while (true) {
    const a = [];
    const n = 5; // num of elements in array
    const s = Math.round(Math.random()*10);

    for (let i = 0; i < n; i++) {
      a.push(Math.round(Math.random()*10));
    }

    const slowResult = slow(a, s);
    const fastResult = fast(a, s);

    if (slowResult !== fastResult) {
      console.log(`Error happened on dataset: [${a}]`);
      console.log(`Expected: ${slowResult}, got: ${fastResult}`);
      return;
    }
  }
};

stressTest();