/*
https://codeforces.com/problemset/problem/580/B?locale=en

n - number of friends
d - min
a - company [[ammount_of_money, friendship_factor ], ...]

find: total friendship_factor of a friend present.
difference in amount of money should be less than d
*/

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
  inputString += inputStdin;
});

process.stdin.on('end', _ => {
  inputString = inputString.trim().split('\n').map(string => {
    return string.trim();
  });

  getCompany();
});

const formatInput = () => {
  let formatted = [];

  for (let i = 0; i < inputString.length; i++) {
    let line = inputString[i].split(" ");
    formatted.push([...line]);
  }

  return { n: +formatted[0][0], d: +formatted[0][1], a: [...formatted.slice(1, formatted.length)].map((i) => [+i[0], +i[1]]) };
};

const getCompany = () => {
  const { n, d, a } = formatInput();
  const aSorted = a.sort((i, j) => i[0] >= j[0] ? 1 : -1);
  let l = 0;
  let result = 0;
  let currentFactor = 0;

  for (let r = 0; r < n; r++) {
    currentFactor += aSorted[r][1];

    while (aSorted[r][0] - aSorted[l][0] >= d) {
      currentFactor -= aSorted[l][1];
      l++;
    }

    if (currentFactor > result) result = currentFactor;
  }

  console.log(result);
  return result;
};

// const n = 4;
// const d = 5;
// const a = [[75, 5], [0, 100], [150, 20], [75, 1]];
// // [ [ 0, 100 ], [ 75, 5 ], [ 75, 1 ], [ 150, 20 ] ]

// const n = 5;
// const d = 100;
// const a = [[0, 7], [11, 32], [99, 10], [46, 8], [87, 54]];
// // [ [ 0, 100 ], [ 75, 5 ], [ 75, 1 ], [ 150, 20 ] ]

// const n = 4;
// const d = 2;
// const a = [[34, 9], [36, 8], [37, 10], [35, 98]];
// answer: 107

// getCompany(n, d, a);