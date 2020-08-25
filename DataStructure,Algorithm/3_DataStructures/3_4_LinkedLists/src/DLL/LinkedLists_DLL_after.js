class Node {
  constructor(value, prev, next) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
  }

  isEmpty() {
    if (this.head === null) {
      return true;
    } else {
      return false;
    }
  }

  prepend(value) {
    if (this.head === null) {
      this.head = new Node(value, null, null);
      return;
    }
    // 새로 생성된 Node객체(예를 들어 1st 노드)가 this.head가 됨. Node생성자 함수의 3번째 인자 this.head(=next)의 의미는 새로 생성된 Node(1st)의 next가 기존의 this.head가 가리키고 있던 node(1st에서 2nd로 된)를 가리키라는 의미
    this.head = new Node(value, null, this.head);
    // 새로 생성된 1st Node의 next = 2nd Node
    // 2nd Node의 prev는 this.head인 새로 생성된 1st Node를 가리킨다
    this.head.next.prev = this.head;
  }

  append(value) {
    if (this.head === null) {
      this.head = new Node(value, null, null);
      return;
    }

    let curr = this.head;
    while (curr.next !== null) {
      curr = curr.next;
    }

    curr = new Node(value, curr, null);
    curr.prev.next = curr;
  }

  setHead(index) {
    let curr = this.head;
    for (let i = 0; i < index; i++) {
      curr = curr.next;
      if (curr === null) {
        return false;
      }
    }
    curr.prev = null;
    this.head = curr;
  }

  access(index) {
    let curr = this.head;
    for (let i = 0; i < index; i++) {
      curr = curr.next;
      if (curr === null) {
        return undefined;
      }
    }
    return curr.value;
  }

  insert(index, value) {
    if (index === 0) {
      this.head = new Node(value, null, this.head);
    }
    let curr = this.head;
    for (let i = 0; i < index; i++) {
      curr = curr.next;
      if (curr === null) {
        return false;
      }
    }
    curr = new Node(value, curr, curr.next);
    curr.prev.next = curr;
    curr.next.prev = curr;
  }

  remove(index) {
    if (index === 0) {
      this.head = this.head.next;
      this.head.prev = null;
      return true;
    }
    let curr = this.head;
    for (let i = 0; i < index; i++) {
      curr = curr.next;
      if (curr === null) {
        return false;
      }
    }
    curr.prev.next = curr.next;
    curr.next.prev = curr.prev;
  }

  print() {
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

myList = new DoublyLinkedList();
myList.print();

for (let i = 0; i < 10; i++) {
  myList.append(i + 1);
}
myList.print();

for (let i = 0; i < 10; i++) {
  myList.prepend(i + 1);
}
myList.print();

const value = myList.access(3);
console.log(`myList.access(3) = ${value}`);

myList.insert(8, 128);
myList.print();

myList.remove(4);
myList.print();

myList.setHead(10);
myList.print();
