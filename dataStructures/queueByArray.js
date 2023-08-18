// first in, first out, via Array
export class QueueByArray {
  constructor(n) {
    this.queue = [];
    this.headIndex = 0;
    this.tailIndex = 0;
    this.maxSize = n;
  }

  enqueue = (value) => {
    if (this.queue.length !== this.maxSize) {
      this.queue[this.tailIndex] = value;
    }
    this.tailIndex = (this.tailIndex + 1) % this.maxSize;
  };
  dequeue = () => {
    if (!this.queue.length) return;
    const prevHeadValue = this.queue[this.headIndex];
    this.headIndex = (this.headIndex + 1) % this.maxSize;
    return prevHeadValue;
  };
}