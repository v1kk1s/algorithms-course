/*
https://www.hackerrank.com/contests/projector-algo-base-7-hw-2-123/challenges/raskin-bobbins

n - flavors
m - dollars for ice cream
t - number of trips
GET: ids of flavours so guys can spend entire amount of money

2 - t number of trips

4 - m dollars
5 - n flavours
1 4 5 3 2
// Answer: 1 4

4 - m dollars
4 - n flavours
2 2 4 3
*/

const getIceCream = (m, n, a) => {
  const result = [];
  const aMapped = [...a].map((el, index) => [el, index + 1]);
  const aSorted = [...aMapped].sort(([i], [j]) => i > j ? 1 : - 1);

  let l = 0;
  let r = aSorted.length - 1;
  let currentSum = 0;

  while (l < r) {
    currentSum = aSorted[l][0] + aSorted[r][0];

    if (currentSum === m) {
      result.push(Math.min(aSorted[l][1], aSorted[r][1]), Math.max(aSorted[l][1], aSorted[r][1]));
    }

    if (currentSum < m) {
      l++
    } else {
      r--;
    }
  }

  console.log(...result);
  return result;
};

// const m = 4;
// const n = 5;
// const a = [1, 4, 5, 3, 2];
// [1, 4]

// const m = 2 * Math.pow(10, 5);
// const n = Math.pow(10, 5);
// const a = new Array(Math.pow(10, 5));
// // [1, 2]
//
// getIceCream(m, n, a);

// [ '2', '4', '5', '1 4 5 3 2', '4', '4', '2 2 4 3' ]
const getFormattedInput = (input) => {
  // const d = input.split('\n');
  let d = [ '4', '4', '5', '1 4 5 3 2', '4', '4', '2 2 4 3', '4', '4', '2 2 4 3', '4', '4', '2 2 4 3' ];
  const totalCalls = +d[0];
  d = d.slice(1, d.length)
  let calls = 0;

  while (calls < totalCalls) {
    let m = +d[3*calls];
    let n = +d[3*calls + 1];
    let a = d[3*calls + 2] ? d[3*calls + 2].split(' ').map((e) => +e) : [];
    getIceCream(m, n, a);
    calls++;
  };
};

getFormattedInput();
