class Node {
  constructor(value, prev, next) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}

class LinkedQueue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  isEmpty() {
    if (this.head === null) {
      // 텅 비어있는 경우임
      return true;
    } else {
      return false;
    }
  }

  put(value) {
    // 어차피 리어쪽에서 데이터를 넣어주기 때문에 프론트는 신경 쓸 필요 없음
    if (this.head === null) {
      this.head = new Node(value, null, null); // 앞 뒤가 모두 null인 노드 하나를 생성
      this.tail = this.head; // 프론트와 테일 모두 새로 생성된 노드를 가리키면 됨.
    } else {
      // 비어있지 않은 경우
      this.tail = new Node(value, this.tail, null);
      this.tail.prev.next = this.tail;
    }
  }

  get() {
    let value = undefined;
    if (this.head === null) {
      // 1. 빈 경우
      return undefined;
    } else if (this.head === this.tail) {
      // 2. 데이터가 1개밖에 없는 경우->프론트뿐 아니라 리어도 바뀌어야 하기 때문에 특별
      value = this.head.value;
      this.head = null;
      this.rear = null;
    } else {
      // 3. 데이터가 여러개 있을 경우->리어 신경 안쓰고 프론트만 신경쓰면 됨
      value = this.head.value;
      this.head = this.head.next;
      this.head.prev = null;
    }
    return value;
  }

  print() {
    // SLL처럼 생각하면 됨
    let curr = this.head;

    if (curr === null) {
      console.log("[]");
      return;
    }

    let s = "";
    while (curr !== null) {
      s += `${curr.value} `;
      curr = curr.next;
    }
    console.log(`[${s}]`);
  }
}

queue = new LinkedQueue();
queue.print();

queue.put(1);
queue.put(2);
queue.put(3);
queue.put(4);
queue.put(5);
queue.put(6);
queue.print();

console.log(queue.get());
console.log(queue.get());
console.log(queue.get());
console.log(queue.get());
queue.print();

queue.put(4);
queue.put(5);
queue.put(6);
queue.print();

console.log(queue.get());
console.log(queue.get());
console.log(queue.get());
queue.print();
