// array를 구현할 때 인덱스가 어디있는지가 중요한데 linkedlist는 전혀 다른 스타일.
class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class SinglyLinkedList {
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
    this.head = new Node(value, this.head); // head는 새로 들어온 노드를 가리키게 됨
  }

  append(value) {
    // 두가지 케이스로 나눠줘야 함. 비어있는 경우와 비어있지 않는 경우
    // 왜? 비어있는 경우에 어펜드를 하면 헤드가 바뀜. 그렇지 않는 경우는 헤드가 바뀌지 않기 때문.
    //  doubly와 달리 이건 이전꺼와 현재꺼 2가지 모두 추적해야 함.
    let curr = this.head;
    let prev = null;

    if (curr === null) {
      // 비어있는 경우(예외상황) -> 프리펜드와 동일
      this.head = new Node(value, null);
      return;
    }

    while (curr !== null) {
      // 비어있지 않는 경우 : 끝까지 찾아가야 함.
      prev = curr;
      curr = curr.next;
    }

    prev.next = new Node(value, null);
  }
  // setHead 이해 안감
  setHead(index) {
    // 몇 번째 헤드가 인덱스가 될지 입력을 받음.
    let curr = this.head;

    for (let i = 0; i < index; i++) {
      // 거기까지 찾아가서 인덱스 횟수만큼 따라가고
      if (curr === null) {
        // 예외 : 중간에 끝나는 경우. 데이터가 4밖에 없는데 7번을 헤드로 하면 안되니까.
        return false;
      }
      curr = curr.next; // 예외상황 외에는 넥스트를 계속 따라감
    }

    this.head = curr; // 따라간 결과를 헤드가 물어주기만 하면 끝남
    return true;
  }

  access(index) {
    // 셋헤드의 접근하는 부분을 그대로 사용하면 됨.
    let curr = this.head;

    for (let i = 0; i < index; i++) {
      if (curr === null) {
        return undefined;
      }
      curr = curr.next;
    }

    return curr.value; // 밸류 말고 커렌트를 리턴하게 해서 재사용하게 만들어도 괜찮음.
  }

  insert(index, value) {
    // 두가지 경우로 나눔. 0번에 넣는 경우 헤드가 바뀜. 0번은 프리펜드와 같아서 프리펜드를 call했음.
    if (index === 0) {
      this.prepend(value);
      return true;
    }

    let curr = this.head; // 그 외에는 입력하고자 하는 곳까지 따라감.
    let prev = null;

    for (let i = 0; i < index; i++) {
      if (curr === null) {
        return false;
      }
      prev = curr;
      curr = curr.next;
    }

    prev.next = new Node(value, curr);
    return true;
  }

  remove(index) {
    /* 1/2. 처음꺼(0번 인덱스)를 제거하는 경우 -> 헤드가 바뀜 */
    if (index === 0) {
      /* 헤드가 실제 무엇인가를 가리키고 있는 경우 */
      if (this.head !== null) {
        // 예를 들어 node가 4->2이 있다고 가정하고 4를 삭제할 경우, this.head(4)를 this.head.next(2)가 되게 하면 4는 자연스럽게 빠지고 head가 2를 가리키게 됨.
        this.head = this.head.next;
        return true;
      } else {
        return false; /* 헤드가 아무것도 가리키지 않을 경우 */
      }
    }
    /* 2/2. 다른 위치에 있는 것을 제거하는 경우. 인덱스만큼 찾아감. */
    let curr = this.head;
    let prev = null;

    for (let i = 0; i < index; i++) {
      if (curr === null) {
        return false;
      }
      prev = curr;
      curr = curr.next;
    }

    prev.next = curr.next;
  }

  print() {
    // 취향껏 출력
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

myList = new SinglyLinkedList(); // SinglyLinkedList { head: null }
myList.print(); // []

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
