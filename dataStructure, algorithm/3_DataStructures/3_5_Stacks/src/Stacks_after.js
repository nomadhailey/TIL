class Stack {
    constructor(capacity) {
        this.capacity = capacity
        this.top = 0; // top은 새로운 데이터가 들어오면 어디로 가야하는지 위치를 알려줌. 인덱스로.
        this.array = new Array(capacity); //Stack { capacity: 4, top: 0, array: [ <4 empty items> ] }
    }

    push(value) {
        if (this.top === this.capacity) {
            console.error('stack overflow');
            return false;
        }
        // 현재 탑의 값에 밸류를 넣고 탑에 1을 증가시킴
        this.array[this.top++] = value; // this.top++ : 0 , value : 1
        console.log(this.array); // [ 1, <3 empty items> ]
        return true;
    }

    pop() {
        if (this.top === 0) {
            console.error('stack underflow');
            return undefined;
        }
        return this.array[--this.top]; // 탑은 마지막것을 가리키는 게 아닌 들어올 것을 가리킴. 먼저 빼고 나서 출력해야 
    }

    peek() {
        if (this.top === 0) { // 코드의 재사용성을 위해 isEmpty를 사용해도 됨
            return undefined; // 언더플로우라고 출력해도 됨.
        }
        return this.array[this.top - 1];
    }

    isEmpty() {
        if (this.top === 0) {
            return true;
        }
        else {
            return false;
        }
    }

    print() {
        let s = '';
        for (let i = 0; i < this.top; i++) {
            s += `${this.array[i]} `;
        }
        console.log(`[${s}]`);
    }
}

stack = new Stack(4); // Stack { capacity: 4, top: 0, array: [ <4 empty items> ] }
stack.push(1); // true
stack.pop();
console.log('stack.pop()',stack.pop());
// console.log('stack', stack);
// stack.push(2); // true
// stack.push(3); // false
// stack.push(4); // false
// stack.print(); // undefined

// stack.push(5);
// stack.print();

// console.log(stack.pop());
// console.log(stack.pop());
// stack.print();

// console.log(stack.peek());
// stack.print();

// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());
// stack.print();