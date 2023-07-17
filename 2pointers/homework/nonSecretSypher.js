/*
https://codeforces.com/problemset/problem/190/D?locale=en
дешифруємо шифр з такими параметрами:
n - к-сть елементів в масиві
a = [....] - масив плюсових значень
k - min к-сть однакових чисел в підмасиві, яка має бути
num - к-сть однакових чисел [L, R]

Знайти і вивести:
m - к-сть підмасивів, в яких k і більше однакових чисел

good: num >= k -> к-сть однакових чисел на відрізку більше рівне k

add(x):
  cnt[x] += 1;

remove:
  cnt[x] -= 1
*/

const n = 4;
const k = 2;
const a = [1, 2, 1, 2];
// (1,2,1), (2,1,2) and (1,2,1,2).

// const n = 3;
// const k = 1;
// const a = [1, 1, 1];
// // (1), (1), (1), (1,1), (1,1) and (1,1,1).

// const n = 5;
// const k = 3;
// const a = [1, 2, 1, 1, 3];
// // (1,2,1,1,3), (1,2,1,1)

const decipher = (n, k, a) => {
  let numOfSubArrays = 0;
  let counters = [0];
  let frequentCnt = 0;
  let l = 0;

  for (let r = 0; r < n; r++) {
    counters[a[r]] =  counters[a[r]] ? counters[a[r]] + 1 : 1;

    if (counters[a[r]] === k) {
      frequentCnt++;
    }

    while (frequentCnt > 0 && counters[a[l]] - 1 >= k) {
      if (counters[a[l]] === k) {
        frequentCnt--;
      }
      counters[a[l]] -= 1;
      l++;
    }

    console.log(counters);
    if (counters.includes(k)) {
      numOfSubArrays++;
    }
  }

  console.log(numOfSubArrays, 'numOfSubArrays');
  return numOfSubArrays;
};

decipher(n, k, a);

