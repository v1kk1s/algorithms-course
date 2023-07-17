/*
https://codeforces.com/problemset/problem/279/B?locale=en

t free minutes
n books from the library
a - array with time per book

find the max number of books, tip can read
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

  getNumberOfBooks();
});

const formatInput = () => {
  let formatted = [];

  for (let i = 0; i < inputString.length; i++) {
    let line = inputString[i].split(" ");
    formatted.push(...line);
  }

  return { n: +formatted[0], t: +formatted[1], a: [...formatted.slice(2, formatted.length)].map((i) => +i) };
};
const getNumberOfBooks = () => {
  const {n, t, a} = formatInput();
  let maxBookNum = 0;
  let currentBookNum = 0;
  let l = 0;
  let currentReadingTime = 0;

  for (let r = 0; r < n; r++) {
    currentReadingTime += a[r];
    currentBookNum += 1;

    while (currentReadingTime > t) {
      currentReadingTime -= a[l];
      currentBookNum -= 1;
      l++;
    }

    if (currentBookNum > maxBookNum) maxBookNum = currentBookNum;
  }

  console.log(maxBookNum);
  return maxBookNum;
};

// const n = 1;
// const t = 3;
// const a = [5];
// // answer: 0
//
// getNumberOfBooks(n, t, a);