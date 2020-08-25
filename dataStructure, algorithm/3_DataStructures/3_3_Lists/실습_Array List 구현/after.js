class ArrayList {
    constructor(capacity) {
        this.capacity = capacity; // 8
        this.array = new Int32Array(capacity); // Int32Array(8) [0, 0, 0, 0, 0, 0, 0, 0]
        this.length = 0;
    }
    
    isEmpty() {
        if (this.length === 0) {
            return true;
        }
        else {
            return false;
        }
    }

    prepend(value) {
        console.log(value); // 1 2 3 4 5 6 7 8 9 10
        if (this.length === this.capacity) { // 길이가 c만큼 찬 상태면->예외상황
            console.log(this.capacity); // 16 ???????????????????????????????????
            this.capacity *= 2; // 32
            const newArray = new Int32Array(this.capacity); // Int32Array(32) [0, 0, ,,, 0] <- 0 x 32개의 배열 생성
            for (let i = 0; i < this.length; i++) { // i < 32
                newArray[i + 1] = this.array[i];    //프리펜드 해줘야 하므로 첫 칸을 비워줘야 함.             
            }
            console.log(this.array); //??????? Int32Array(16) [6, 5, 4, 3, 2, 1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
            console.log(newArray); // Int32Array(32) [0, 6, 5, 4, 3, 2, 1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0, 0, 0, 0, 0 ]
            this.array = newArray;
        }
        else {
            for (let i = this.length - 1; i >= 0; i--) {
                this.array[i + 1] = this.array[i]; // 꽉 차지 않은 경우는 그냥 한 칸씩만 밀어주면 됨. 중요한 건 this.length-1로 뒤에서부터 해줘야 함.
            }
            console.log(this.array); //Int32Array(16) [6, 5, 4,  3, 2, 1, 1, 2, 3,  4, 5, 6, 7, 8,9, 10]
        }

        this.array[0] = value;
        this.length++;
        console.log('this.array',this.array);
    }

    append(value) {
        if (this.length === this.capacity) {
            this.capacity *= 2;
            const newArray = new Int32Array(this.capacity);
            
            for (let i = 0; i < this.length; i++) {
                newArray[i] = this.array[i]; // 뒤로 하나씩 밀 필요가 없으므로 같은 곳에 집어넣음
            }

            this.array = newArray;
        }

        this.array[this.length] = value;
        this.length++;
    }

    setHead(index) {
        if (index > this.length) {
            return false;
        }

        this.array = this.array.subarray(index, this.capacity) 
        this.length = this.length - index; // 이 줄과 아래 두 줄은 l과 c가 바뀜. 중간에 삽입하면 앞에를 사용할 수 없게 되기 떄문에 l과 c가 줄어드는 현상 발생
        this.capacity = this.capacity - index;

        return true;
    }

    access(index) {
        if (index > this.length) { // 예외처리 -> length바깥으로 넘어가면 undefined. 왜 구현? array에는 쓰레기값이 capacity 안에 들어있음. 이 쓰레기값을 가져오는 것을 방지하기 위해 
            return undefined;
        }
        return this.array[index];
    }

    insert(index, value) {
        if (index > this.length) { // 예외처리 : 바깥에 넣으면 안됨. 왜냐면 리스트는 어레이와 달리 시퀀스가 있기 때문에 시퀀스 앞에 뒤에 중간밖에 없음. 그걸 넘쳐서 입력하려고 하면 안됨.
            return false;
        }

        if (this.length === this.capacity) {
            this.capacity *= 2;
            const newArray = new Int32Array(this.capacity);
            
            for (let i = 0; i < index; i++) {
                newArray[i] = this.array[i];
            }

            for (let i = index + 1; i < this.length; i++) { // 하나씩 밀어넣음
                newArray[i + 1] = this.array[i];
            }
            
            this.array = newArray;
        }
        else {
            for (let i = this.length - 1; i >= index; i--) {
                this.array[i + 1] = this.array[i];
            }
        }

        this.array[index] = value; // 이 세줄은 빈 자리에 원하는 것을 넣어줌
        this.length++;

        return true;
    }

    remove(index) { // capacity와 연관 없음. 꽉 차도 어차피 줄어드는 것이기 때문에
        if (index > this.length) {
            return false;
        }

        for (let i = index; i < this.length - 1; i++) { // 뒤에 있는 것을 하나씩 앞으로 밀어줌.
            this.array[i] = this.array[i + 1];
        }
        this.length--;

        return true;
    }

    print() { // 취향껏 프린트
        let s = '';
        for (let i = 0; i < this.length; i++) {
            s += `${this.array[i]} `;
        }
        console.log(`[${s}]`);
    }
}
// 테스트 코드
myList = new ArrayList(8);
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
