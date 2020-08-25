class LinearQueue {
  constructor(capacity) {
    this.capacity = capacity;
    this.front = 0;
    this.rear = 0;
    this.array = new Array(capacity);
  }

  put(value) {
    if (this.rear === this.capacity) {
      console.error("queue overflow");
      return false;
    }

    this.array[this.rear++] = value; // 리어 자리에 자료를 넣고(선할당) 리어를 하나 증가시켜서 다음 것을 가리키는 형태(후증가)
    return true;
  }

  get() {
    if (this.front === this.rear) {
      console.error("queue underflow");
      return undefined; // 가져올 게 없다는 의미로서 undefined를 리턴하겠다
    }
    return this.array[this.front++];
  }

  peek() {
    if (this.front === this.rear) {
      return undefined;
    }
    return this.array[this.front];
  }

  print() {
    // 그냥 어레이에 있는 내용을 출력하는 형태
    let s = "";
    for (let i = this.front; i < this.rear; i++) {
      s += `${this.array[i]} `;
    }
    console.log("`[${s}]`", `[${s}]`);
  }
}

queue = new LinearQueue(5); // LinearQueue { capacity: 5, front: 0, rear: 0, array: [ <5 empty items> ] }
queue.print(); // [] -> [1 2 3 ]

console.log("put(1)", queue.put(1)); // 1
console.log("put(1)", queue.put(2)); // 2
console.log("put(1)", queue.put(3)); // 3
console.log(queue.print()); // undefined

// console.log(queue.get()); // 1
// console.log(queue.get()); // 2
// console.log(queue.get()); // 3
// console.log(queue.get()); // queue underflow
// queue.print(); // undefined

// queue.put(4);
// queue.put(5);
// queue.put(6);
// queue.print(); // [ 4 5]

// console.log(queue.get()); // 4
// console.log("구분선");
// console.log(queue.get()); // 5
// // queue underflow 발생
// console.log(queue.get()); // undefined
// queue.print(); // []
