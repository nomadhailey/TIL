class CircularQueue {
  constructor(capacity) {
    this.capacity = capacity;
    this.front = 0;
    this.rear = 0;
    this.isFull = false; // LinearQueue에서 없었던 코드문. constructor의 나머지 코드는 linearQueue와 동일
    this.array = new Array(capacity);
  }

  put(value) {
    if (this.isFull === false) {
      // 가득차지 않은 경우
      this.array[this.rear++] = value;
      this.rear %= this.capacity; // 리어가 맨 끝에 왔을 때 다시 앞으로 갈 수 있도록
      if (this.rear === this.front) {
        // 프론트와 리어가 같은 경우는 비어있거나 가득차있거나
        this.isFull = true; // put을 했는데 비어있는 경우는 없기 떄문에 가득 차 있는 것
      }
      return true;
    } else {
      // 가득찬 경우
      return false;
    }
  }

  get() {
    // 프론트, 리어가 같지 않은 경우(가득차지도 비어있지도 않은 상태) 혹은 꽉 차 있는 상태->이 경우에만 데이터를 받아올 수 있음
    if (this.front !== this.rear || this.isFull === true) {
      const value = this.array[this.front++];
      this.front %= this.capacity;
      this.isFull = false; // 꽉 찬 상태든 아니든 isFull을 false로 바꾼다
      return value;
    } else {
      return undefined;
    }
  }

  peek() {
    if (this.front !== this.rear || this.isFull === true) {
      return this.array[this.front];
    } else {
      return undefined;
    }
  }

  print() {
    let s = "";
    let endIdx = this.rear;
    // 빈 경우
    if (this.rear === this.front && this.isFull === false) {
      console.log("[]");
      return;
    }
    // 예를 들어 capacity 11(인덱스 0~인덱스 10)인 큐에서 리어(인덱스1)가 프론트(인덱스4)보다 더 앞에 있는 경우-> 이 경우 데이터는 rear->front 사이(인덱스 1~3)에 없고, front->rear(인덱스4~0) 사이에 있기 때문에 front->rear 사이의 데이터를 프린트하기 위해 endInx가 필요함
    if (this.rear <= this.front) {
      // endIdx=rear이므로 현재 endIdx는 인덱스1. 여기에 capacity 11만큼 더해주면 endIdx = 1 ->12가 됨.=> 상태를 잠시 선형인것처럼 인덱스가 계속 증가되는 형태로 만들어서 계산을 편하게
      endIdx += this.capacity;
    }
    for (let i = this.front; i < endIdx; i++) {
      // this.front = 4, endIdx = 12 -> this.front~endIdx까지
      s += `${this.array[i % this.capacity]} `; // 위의 if문에서 계산 편의를 위해 인덱스값을 임의로 바꿔놓은 것을 다시 돌려주는 작업
    }
    console.log(`[${s}]`);
  }
}

queue = new CircularQueue(5);
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
