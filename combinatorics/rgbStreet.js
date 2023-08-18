// https://www.hackerrank.com/contests/projector-algo-base-7-hw-4-yfff/challenges/rgb-street

function getMinPaintJobCost(input) {
  const args = input.split('\n');
  const N = +args.splice(0, 1)[0];
  const costs = args.map((str) => str.split(' ').map((el) => +el));
  const costDictionary = new Array(N);

  for(let i = 0; i < N; i++) {
    costDictionary[i] = new Array(3);
    for(let j = 0; j < 3; j++)
    {
      costDictionary[i][j] = 0;
    }
  }

  // Base Case
  costDictionary[0][0] = costs[0][0];
  costDictionary[0][1] = costs[0][1];
  costDictionary[0][2] = costs[0][2];

  for(let i = 1; i < N; i++) {
    // red
    costDictionary[i][0] = Math.min(costDictionary[i - 1][1], costDictionary[i - 1][2]) + costs[i][0];

    // blue
    costDictionary[i][1] = Math.min(costDictionary[i - 1][0], costDictionary[i - 1][2]) + costs[i][1];

    // green
    costDictionary[i][2] = Math.min(costDictionary[i - 1][0], costDictionary[i - 1][1]) + costs[i][2];
  }

  console.log(Math.min(costDictionary[N - 1][0], Math.min(costDictionary[N - 1][1],costDictionary[N - 1][2])));
}

const testCase1 = `3
1 100 100
100 1 100
100 100 1`;
// Answer: 3

const testCase2 = `3
26 40 83
49 60 57
13 89 99`;
// Answer: 96

getMinPaintJobCost(testCase1);