// n - к-сть точок на площині (2 < n < 101)
// arr - масив з точками

const getFormattedCoordinates = () => {
  const n = process.argv[2];
  const coords = process.argv.slice(3, process.argv.length);
  const result = [];

  // validation is not required
  // if (!coords.length % 2 || coords.length / 2 !== Number(n)) {
  //   console.log(`Check input of your coordinates!
  //     Desired format is: number of pairs and coordinates separated by space
  //   `);
  //   return result;
  // }

  const chunkSize = 2;
  for (let i = 0; i < coords.length; i += chunkSize) {
    const chunk = coords.slice(i, i + chunkSize);
    result.push(chunk);
  }

  return result;
};

const getTrianglePerimeter = () => {
  let result = 0;
  const coordinates = getFormattedCoordinates();
  const coordinatesLength = coordinates.length;

  for (let i = 0; i < coordinatesLength; i++) {
    for (let j = 0; j < coordinatesLength; j++) {
      for (let k = 0; k < coordinatesLength; k++) {
        const c1 = coordinates[i];
        const c2 = coordinates[j];
        const c3 = coordinates[k];

        const side1 = Math.pow((c1[0] - c2[0]), 2) + Math.pow((c1[1] - c2[1]), 2)
        const side2 = Math.pow((c2[0] - c3[0]), 2) + Math.pow((c2[1] - c3[1]), 2)
        const side3 = Math.pow((c3[0] - c1[0]), 2) + Math.pow((c1[1] - c1[1]), 2)

        const perimeter = Math.sqrt(side1) + Math.sqrt(side2) + Math.sqrt(side3);

        if (perimeter > result) result = perimeter;
      }
    }
  }

  console.log(result.toPrecision(15));
  return result;
};

getTrianglePerimeter();
