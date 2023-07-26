class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

export class Stack {
  constructor() {
    this.head = new Node();
    this.tail = new Node();

    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  push = (value) => {
    // adds to the end of the stack
    // [h] -> [currentLast] -> [N] -> [t]
    const node = new Node(value);
    const currentLast = this.tail.prev;
    this.tail.prev = node;
    node.prev = currentLast;
    node.next = this.tail;
    currentLast.next = node;
  };
  pop = () => {
    // removes from the end of the stack
    // [h] -> [] -> [N] -> [t]
    const node = this.tail.prev;
    const prev = node.prev;
    const next = node.next;
    prev.next = next;
    next.prev = prev;
    return node.value;
  };
}

const stack = new Stack();
stack.push(3);
stack.push(4);
stack.push(5);
//
// console.log(stack.pop(), 'pop');
// console.log(stack.pop(), 'pop');
// console.log(stack, 'stack');