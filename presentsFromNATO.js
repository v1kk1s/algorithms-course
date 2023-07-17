/*
  Input legend:
  javelin - x
  NLAW - y
  bayraktar - z
  total weights of presents - w
  gifts [10, 25, 15]

  x + y + z = w
  w - x - y = z
  10x + 25y + 15z = w
  z = (w - 10x - 25y)/15
*/

const getFormattedInput = () => {
  const x = +process.argv[2];
  const y = +process.argv[3];
  const z = +process.argv[4];
  const w = +process.argv[5];

  return [x, y, z, w];
};

const getNATOPresentsSlow = (x, y, z, w) => {
  let combinations1 = 0;

  for (let xk = 0; xk*x <= w; ++xk) {
    for (let yk = 0; yk*y <= w; ++yk) {
      for (let zk = 0; zk*z <= w; ++zk) {
        if (zk*z + xk*x + yk*y === w) {
          combinations1 = combinations1 + 1;
        }
      }
    }
  }

  return combinations1;
};

const getNATOPresents = (x, y, z, w) => {
  let combinations = 0;

  for (let xk = 0; xk*x <= w; ++xk) { // let xk = 0; xk <= 100; ++xk
    for (let yk = 0; yk*y <= w; ++yk) { // let yk = 0; yk <= 100; ++yk
      let zk = (w - xk*x - yk*y) / z;
      if (zk % 1 === 0 && zk >= 0) { // для всіх цілих і більших нуля
        combinations = combinations + 1;
      }
    }
  }

  return combinations;
};

const getNATOPresentsFromLecture = (x, y, z, w) => {
  let combinations = 0;

  for (let xk = 0; xk*x <=w; xk++) {
    for (let yk = 0; yk*y <= w; yk++) {
      let needW = w - xk*x - yk*y;
      if (needW % z === 0 && needW >= 0) {
        combinations = combinations + 1;
      }
    }
  }

  return combinations;
};

const stressTest = () => {
  // const formattedInput = getFormattedInput();

  while (true) {
    const weight = Math.round(Math.random()*1000);
    const randomInput = [
      Math.round(Math.random()*100) || 1,
      Math.round(Math.random()*100) || 1,
      Math.round(Math.random()*100) || 1,
      weight || 1,
    ];
    const slowResult =  getNATOPresentsSlow(...randomInput);
    const fastResult =  getNATOPresents(...randomInput);
    const lectureWayResult =  getNATOPresentsFromLecture(...randomInput);
    // console.log(randomInput, slowResult !== fastResult || slowResult !== lectureWayResult, slowResult, fastResult, lectureWayResult);

    if (slowResult !== fastResult || slowResult !== lectureWayResult) {
      console.log('Error found on dataset:', randomInput);
      console.log('Expected', slowResult, 'Received', fastResult, 'Lecture', lectureWayResult);
      return;
    }
  }

};

stressTest();