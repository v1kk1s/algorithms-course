/*
Prev version
const int N = 4096;
byte [,] image = new byte[N, N]; // двумірний масив розміру 4096*4096
public bool isDark() {
  count = 0
  for (int j = 0; j < N; ++j) {
    for (int i = 0; i < N; ++i) {
      if (image[i, j] >= 128) {
        count += 1; }
    } }
  return count < N * N / 2;
}*/

const isDark = (img) => {
  let flatMatrix = [];
  for (let i = 0; i < img[0].length; i++) {
    flatMatrix = [...flatMatrix, ...img[i]];
  }

  const sort = flatMatrix.sort((a, b) => a - b);

  console.log(sort[sort.length / 2] >= 128);
};

isDark([[5, 200, 78, 20], [129, 300, 1, 150], [300, 0, 150, 30], [300, 0, 150, 30]]);
