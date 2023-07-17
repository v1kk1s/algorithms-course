const a1 = [-1, 0, 4, 5, 3, 99];
const a2 = [0, 4, -1, 44];

/*
Змержити 2 масиви так, щоб 1 вийшов відсортований масив
*/

const mergeHeavy = (a1, a2) => {
  const result = [];

  while (a1.length || a2.length) {
    // also work as with sentinels: min element in [] is Infinity
    const minA1 = Math.min(...a1);
    const minA2 = Math.min(...a2);

    if (minA1 < minA2) {
      result.push(minA1);
      a1.splice(a1.indexOf(minA1), 1);
    } else {
      result.push(minA2);
      a2.splice(a2.indexOf(minA2), 1);
    }
  }

  console.log(result);
  return result;
};

const mergeWithPointers = (a1, a2) => {
  const a1Sorted = a1.sort((a, b) => a - b); // n*logn
  const a2Sorted = a2.sort((a, b) => a - b); // n*logn
  const result = [];

  let i = 0;
  let j = 0;
  const n = a2Sorted.length;

  while (i < a1Sorted.length || j < n) { // n
    if (a1Sorted[i] < a2Sorted[j] || j === n) {
      result.push(a1Sorted[i]);
      i += 1;
    } else {
      result.push(a2Sorted[j]);
      j += 1;
    }
  }

  console.log(result);
  return result;
};

mergeWithPointers(a1, a2);
mergeHeavy(a1, a2);