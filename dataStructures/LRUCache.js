// least recently used -> linked list with cache

// what do we need?
// search
// delete last
// insert first
class Node {
  constructor(key, value, prev, next) {
    this.key = key;
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}

class LRUCache {
  constructor(capacity) {
    this.head = new Node();
    this.tail = new Node();
    this.map = new Map();
    this.capacity = capacity;

    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  get = (key) => {
    let result = -1;
    const existingNode = this.map.get(key);

    if (existingNode) {
      this.remove(existingNode);
      this.add(existingNode);
      result = existingNode.value;
    }

    return result;
  };

  put = (key, value) => {
    const existingNode = this.map.get(key);
    if (existingNode) {
      this.remove(existingNode);
      existingNode.value = value;
      this.add(existingNode);
      return;
    }

    if (this.map.size === this.capacity) {
      this.map.delete(this.tail.prev.key);
      this.remove(this.tail.prev);
    }

    const node = new Node(key, value);
    this.add(node);
    this.map.set(key, node);
  };

  add = (node) => {
    const currentFirst = this.head.next;
    this.head.next = node;
    node.prev = this.head;
    node.next = currentFirst;
    currentFirst.prev = node;
  };

  remove = (node) => {
    const prev = node.prev;
    const next = node.next;
    prev.next = next;
    next.prev = prev;
  };
}

const cache = new LRUCache(3);
cache.put(0, 0);
cache.put(1, 1);
cache.put(2, 2);
cache.get(0);
cache.put(5, 5);


console.log(cache);
