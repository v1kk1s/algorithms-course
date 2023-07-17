/*
void sinx(int N, int terms, float[] x, float[] result) {
  for (int i = 0; i < N; i++) {
    float value = x[i];
    float numer = x[i] * x[i] * x[i]; use value
    int denom = 6; // 3! - look up factorials????
    int sign = -1;
    for (int j = 1; j <= terms; j++) {
      value += sign * numer / denom;
      numer *= x[i] * x[i];
      denom *= (2*j+2) * (2*j+3);
      sign *= -1;
    }
    result[i] = value;
  }
}*/

const precomputeFactorials = (n) => {
  const factorials = {};
  let factorial = 1;

  for (let i = 1; i <= n; i++) {
    factorial *= i;
    factorials[i] = factorial;
  }

  return factorials;
}

const sinx = (N, terms, x) => {
  const result = [];
  const factorials = precomputeFactorials(2 * terms + 1);

  for (let i = 0; i < N; i++) {
    let value = x[i];
    let valueSquared = x[i] * x[i];
    let numer = value;
    let denom = 1; // factorial
    let sign = -1;

    for (let j = 1; j <= terms; j++) {
      value += sign * numer / denom;
      numer *= valueSquared;
      denom *= factorials[2 * j] * factorials[2 * j + 1]
      sign *= -1;
    }
    result[i] = value;
  }

  console.log(result, 'result');
}

sinx(5, 10, [0.5, 1.0, 1.5, 2.0, 2.5]);

/*
1. result можна перенести всередину, а не отримувати в вхідних параметрах
2. винести x[i] * x[i] в окрему змінну і перевикоистовувати її
3. обрахувати факторіал з який використовується в denom до запуску
*/
