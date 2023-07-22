// Linked list - список
// [] -> [] -> [] -> []
// node - вузол

class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}
class LinkedList {
  constructor(value) {
    this.size = 1;
    this.sentinel = new Node(42, null); // node is always present, in case of empty lists
    this.sentinel.next = new Node(value, null);
  }

  insertFirst = (value) => {
    this.sentinel.next = new Node(value, this.sentinel.next);
    this.size += 1;
  };

  insertLast = (value) => {
    let crawler = this.sentinel;
    while (crawler.next) {
      crawler = crawler.next;
    }

    crawler.next = new Node(value, null);
    this.size += 1;
  };
}

const ll = new LinkedList(0);
ll.insertLast(5);
ll.insertFirst(1);

console.log(ll.sentinel);
