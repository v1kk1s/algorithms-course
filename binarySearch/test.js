const MAXL = -1;
const MAXR = 1000 + 16;
const MAXN = 1000 + 16;
const EXP = 1e-9;

let n;
let A;
const F = new Array(MAXN);

function ok(x) {
  F[2] = x;
  for (let i = 3; i <= n; i++) {
    F[i] = 2 * F[i - 1] + 2 - F[i - 2];
    if (F[i] < 0) {
      return false;
    }
  }
  B = F[n];
  return true;
}

function main() {
  n = 692;
  A = 532.81;
  F[1] = A;
  let l = MAXL;
  let r = MAXR;
  let mid;
  for (let i = 0; i < 100; i++) {
    mid = (l + r) / 2.0;
    if (ok(mid)) {
      r = mid;
    } else {
      l = mid;
    }
  }
  console.log(B.toFixed(6));
}

main();
