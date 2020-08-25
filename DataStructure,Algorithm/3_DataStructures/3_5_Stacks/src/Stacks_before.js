class Stack {
    constructor(capacity) {
        this.capacity = capacity
        this.top = 0;
        this.array = new Array(capacity);
    }

    push(value) {
        if (this.top === this.capacity) {
            console.error('stack overflow');
            return false;
        }
        this.array[this.top++] = value;
        return true;
    }

    pop() {

    }

    peek() {

    }

    isEmpty() {

    }
}