/*
https://www.hackerrank.com/contests/projector-algo-base-7-hw-2-123/challenges/garland

бін пошук по відповіді
відповідь - min висота останньої лампочки
залежить монотонно від к-сті лампочок
можем перевірити кандидата на відповідь

a - висота першої лампочки
n - к-сть лампочок

висота всіх лампочок має бути >= 0 (не лежати на землі, може торкатися)

x1 = 15
x2 = (15+b) / 2 - 1 = 6,5 + 0.5x3
// x3 = (6,5 + 0.5x3+x4) / 2 - 1 = 2.25 + 0.25x3 + 0.5b
x3 = b
*/
const canFormGarland = (n, first, candidate, map) => {
  map[1] = first;
  map[2] = candidate;

  for (let i = 3; i <= n; i++) {
    map[i] = 2 * map[i - 1] + 2 - map[i - 2];
    if (map[i] < 0) {
      return false;
    }
  }

  return true;
};

const getLastLampHeight = (n, a) => {
  let bad = -1;
  let good = 1000;
  let heightMap = [];

  // while (good - bad > 0.001) {
  for (let i = 0; i < 100; i++) {
    let candidate = (good + bad) / 2;
    if (canFormGarland(n, a, candidate, heightMap)) {
      good = candidate;
    } else {
      bad = candidate;
    }
  }
  //}

  console.log(parseFloat(heightMap[n].toFixed(6)));
  return heightMap[n];
};

// const n = 8;
// const a = 15;
// // Answer: 9.75

const n = 692;
const a = 532.81;
// Answer: 446113.344348

getLastLampHeight(n, a);

