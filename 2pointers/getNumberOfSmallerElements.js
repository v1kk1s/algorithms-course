const a = [0, 10, 100, 300];
const b = [1, 101, 300];

/*
Для кожного елементу масиву b, знайти к-сть елементів
масиву а, які менші за нього.
*/

const getNumberOfElements = (a, b) => {
  const result = [];
  let i = 0;
  let j = 0;

  while (i < a.length || j < b.length) { // O(n)
    if (a[i] < b[j] || j === b.length) {
      i += 1;
    } else {
      result.push(i);
      j += 1;
    }
  }

  console.log(result);
  return result;
};

const getNumberOfElementsWithLoops = (a, b) => {
  const result = [];
  let i = 0;

  for (let j = 0; j < b.length; j++) { // O(n)
    while (i < a.length && a[i] < b[j]) {
      i += 1;
    }
    result.push(i);
  }


  console.log(result);
  return result;
};

getNumberOfElements(a, b);
getNumberOfElementsWithLoops(a, b);

