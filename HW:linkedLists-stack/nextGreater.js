// https://leetcode.com/problems/next-greater-element-i/description/
import { Stack } from '../dataStructures/stack.js';

const getNextGreaterElement = (nums1, nums2) => {
  const result = [];
  const stack = new Stack();
  const nextGreaterMap = [];

  for (let i = nums2.length - 1; i >= 0; i--) {
    if(nums2[i] === 250) {
      console.log(stack, stack.tail.prev.value);
    }

    // monotonous stack
    while (stack.tail.prev.value < nums2[i]) {
      stack.pop();
    }
    nextGreaterMap[nums2[i]] = stack.tail.prev.value || -1;
    stack.push(nums2[i]);
  }

  for (let j = 0; j < nums1.length; j++) {
    result[j] = nextGreaterMap[nums1[j]];
  }

  return result;
};

console.log(getNextGreaterElement([4,1,2], [1,3,4,2])); // Answer: [-1,3,-1]
console.log(getNextGreaterElement([2,4], [1,2,3,4])); // Answer: [3,-1]

// 250 -> 253
// const nums1 = [54,250,27,109,140,147,25,96,105,30,207,241,8,217,40,0,35,221,191,83,132,9,144,12,91,175,65,170,227,253,];
// const nums2 = [54,250,27,109,140,147,25,96,105,30,207,241,8,217,40,0,35,221,191,83,132,9,144,12,91,175,65,170,227,253,];
// getNextGreaterElement(nums1, nums2);