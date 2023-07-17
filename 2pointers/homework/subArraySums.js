const readline = require('readline');
/*
https://cses.fi/problemset/task/1660
n - array length
x - sum required
*/

const getInput = () => {
  const input = [];

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.prompt();

  rl.on('line', function (cmd) {
    input.push(cmd);
  });

  rl.on('close', function (cmd) {
    const line1 = input[0].split(' ');
    const line2 = input[1].split(' ').map(el => +el);

    getSubArraySum(+line1[0], +line1[1], line2);
    process.exit(0);
  });

  return input;
};

const getSubArraySum = (n, x, a) => {
  let l = 0;
  let result = 0;
  let currentSum = 0;

  for (let r = 0; r < n; r++) {
    currentSum += a[r];

    while (currentSum - a[l] >= x) {
      currentSum -= a[l];
      l++;
    }

    if (currentSum === x) result++;
  }

  console.log(result);
  return result;
};

getInput();