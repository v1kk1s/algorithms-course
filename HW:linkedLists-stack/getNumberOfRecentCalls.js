// https://leetcode.com/problems/number-of-recent-calls/

import { Queue } from '../dataStructures/queue.js';

const RecentCounter = function() {
  this.queue = new Queue();
  this.queueLength = 0;
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
  const startTime = t - 3000;
  this.queue.push(t);

  while (this.queue.head.next.value < startTime) {
    this.queue.pop();
  }

  console.log(this.queue.size);
  return this.queue.size;
};

const obj = new RecentCounter()
obj.ping(1);
obj.ping(100);
obj.ping(3001);
obj.ping(3002);