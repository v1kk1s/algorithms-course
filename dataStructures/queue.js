class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

export class Queue {
  constructor() {
    this.head = new Node();
    this.tail = new Node();

    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  push = (value) => {
    // adds to the end of the queue
    // [h] -> [currentLast] -> [N] -> [t]
    const node = new Node(value);
    const currentLast = this.tail.prev;
    this.tail.prev = node;
    node.prev = currentLast;
    node.next = this.tail;
    currentLast.next = node;
  };
  pop = () => {
    // removes from the beginning of the queue
    // [h] -> [N] -> [] -> [t]
    const node = this.head.next;
    const prev = node.prev;
    const next = node.next;
    prev.next = next;
    next.prev = prev;
    return node.value;
  };
}

// const queue = new Queue();
// queue.push(3);
// queue.push(4);
// queue.push(5);
//
// console.log(queue.pop(), 'pop');
// console.log(queue, 'queue');