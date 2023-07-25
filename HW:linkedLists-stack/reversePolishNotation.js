// https://www.codechef.com/problems/ONP

class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class ReversePolishNotation {
  constructor() {
    this.head = new Node();
    this.tail = new Node();
    this.head.next = this.tail;
    this.tail.prev = this.head;

    this.predecenceMap = {
      '^': 3,
      '*': 2,
      '/': 2,
      '-': 1,
      '+': 1,
    };
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

  getRPN = (string) => {
    let rpn = '';
    const input = string.split('');

    input.forEach((i) => {
      const isOperator = /^([-+/*^])/.test(i);
      const isParenthesis = /^([)(])/.test(i);

      if (isOperator) {
        const prevOperator = this.tail.prev.value;
        if (this.predecenceMap[prevOperator] >= this.predecenceMap[i]) {
          rpn += this.pop();
        }
        this.push(i);
      } else if (isParenthesis) {
        if (i === '(') {
          this.push(i);
        }
        if (i === ')') {
          while (this.tail.prev.value !== '(') {
            rpn += this.pop();
          }
          this.pop();
        }
      } else { // is number
        rpn += i;
      }
    });

    if (this.head.next !== this.tail) { // operations left in stack
      while (this.head.next !== this.tail) {
        rpn += this.pop();
      }
    }

    return rpn;
  };
}

const formatInput = (input) => {
  let d = input.split('\n');
  const totalCalls = +d[0];
  d = d.slice(1, d.length)
  let calls = 0;

  while (calls < totalCalls) {
    let string = d[calls];
    const rpn = new ReversePolishNotation();
    console.log(rpn.getRPN(string));
    calls++;
  }
};

formatInput(`3
(a+(b*c))
((a+b)*(z+x))
((a+t)*((b+(a+c))^(c+d)))
`);

// Test cases:
// const rpn = new ReversePolishNotation();
// console.log(rpn.getRPN('(a+(b*c))') === 'abc*+', 'abc*+'); // Answer: abc*+
// console.log(rpn.getRPN('((a+b)*(z+x))') === 'ab+zx+*', 'ab+zx+*'); // Answer: ab+zx+*
// console.log(rpn.getRPN('((a+t)*((b+(a+c))^(c+d)))') === 'at+bac++cd+^*', 'at+bac++cd+^*'); // Answer: ab+zx+*
// console.log(rpn.getRPN('a*b-(c-d)+e') === 'ab*cd--e+', 'ab*cd--e+'); // Answer: ab*cd--e+