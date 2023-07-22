class DynamicArray {
  constructor(capacity) {
    this.capacity = capacity; // об`єм
    this.size = 0; // заповненість
    this.array = new Array(this.capacity);
  }
  
  get (index) {
    this.validateIndex(index);
    return this.array[index];
  }
  set (index, value) {
    this.validateIndex(index);
    return this.array[index] = value;
  }
  pushBack (value) {
    if (this.size < this.capacity) {
      this.array[this.size] = value;
    } else {
      this.capacity = this.capacity * 2;
      const newArray = new Array(this.capacity);
      newArray.push(...this.array);
      newArray[this.size] = value;
      this.array = newArray;
    }
    this.size += 1;
  }

  popBack () {
    if (!this.size) return;

    // amortized time complexity O(1*)
    if(this.size < this.capacity % 4) {
      this.capacity = this.capacity % 2;
      const newArray = new Array(this.capacity);
      newArray.push(...this.array);
      this.array = newArray;
    }

    this.size -= 1;
    this.array[this.size] = null;
  }

  validateIndex (index) {
    if (index >= 0 && index > this.size) throw new Error('index out of range');
  }
}

const testArray = new DynamicArray(8);

testArray.pushBack(0);
testArray.pushBack(1);
testArray.pushBack(2);
testArray.pushBack(3);

console.log(testArray.get(1));

testArray.set(0, 1);
testArray.set(1, 2);
testArray.set(2, 3);

testArray.popBack();

console.log(testArray);