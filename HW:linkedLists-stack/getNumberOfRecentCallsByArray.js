// https://leetcode.com/problems/number-of-recent-calls/

// import { Queue } from '../dataStructures/queue.js';
import { QueueByArray as Queue } from '../dataStructures/queueByArray.js';

const RecentCounter = function() {
  this.queue = new Queue(3000);
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
  const startTime = t - 3000;
  this.queue.enqueue(t);

  while (this.queue.queue[this.queue.headIndex] < startTime) {
    this.queue.dequeue();
  }

  console.log(Math.abs(this.queue.tailIndex - this.queue.headIndex));
  return Math.abs(this.queue.tailIndex - this.queue.headIndex);
};

const obj = new RecentCounter()
obj.ping(1);
obj.ping(100);
obj.ping(3001);
obj.ping(3002);
// 1, 2, 3, 3

// const obj = new RecentCounter()
// obj.ping(642);
// obj.ping(1849);
// obj.ping(4921);
// obj.ping(5936);
// obj.ping(5957);
// 1,2,1,2,3