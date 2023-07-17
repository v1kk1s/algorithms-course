// https://leetcode.com/problems/container-with-most-water/

const getMostWater = (a) => {
  let result = 0;
  let l = 0;
  let r = a.length - 1;
  let currentVolume = 0;

  while (l < r) {
    currentVolume = Math.min(a[r], a[l]) * (r - l);
    result = Math.max(result, currentVolume);

    if (a[l] < a[r]) {
      l++
    } else {
      r--;
    }
  }

  // for (let r = a.length - 1; r >= 0; r--) {
  //   currentVolume = Math.min(a[r], a[l]) * (r - l);
  //
  //   console.log(currentVolume, l, r, a[l], a[r]);
  //   while (currentVolume < Math.min(a[r], a[l + 1]) * (r - l - 1)) {
  //     currentVolume =  Math.min(a[r], a[l + 1]) * (r - l - 1);
  //     l++;
  //   }
  //
  //   // console.log(currentVolume, l, r, a[l], a[r]);
  //   if (currentVolume > result) {
  //     result = currentVolume;
  //   }
  // }

  console.log(result, 'result');
  return result;
};

// getMostWater([2,3,4,5,18,17,6]); // 17
// getMostWater([1,8,6,2,5,4,8,3,7]); // 49
getMostWater([1,2,1]); // 2

