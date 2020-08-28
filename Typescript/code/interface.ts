// 인터페이스를 통해 하나의 타입을 정의. 인터페이스에는 주로 행위(메소드)를 정의
// 인터페이스는 실제 구현체(바디 블록)가 없고 해당 타입이 어떤 행위를 하는지만을 기술
interface TV {
  turnOn(): boolean;
  turnOff(): void;
}

const mytv: TV = {
  turnOn() {
    return true;
  },
  turnOff() {},
};

function tryTurnOn(tv: TV) {
  tv.turnOn();
}
tryTurnOn(mytv);

// 타입스크립트의 인터페이스를 가장 많이 사용하는 방식 중 하나는, 행위를 작성하지 않고 이 인터페이스가 가져야 할 속성만 기술하는 것
interface Cell {
  // 행위만 없이 속성만 정의
  row: number;
  col: number;
  piece?: Piece;
}

interface Piece {
  move(from: Cell, to: Cell): boolean; // 잘 옮겨졌는지 여부를 boolean타입으로 반환
}

function createBoard() {
  const cells: Cell[] = []; // 보드가 가져야 할 cell들에 대해서 배열로 가지고 있음
  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 3; col++) {
      cells.push({
        row,
        col,
      });
    }
  }
  return cells;
}

const board = createBoard();
board[0].piece = {
  move(from: Cell, to: Cell) {
    return true;
  },
};

// 회원가입
interface Signup {
  email: string;
  id: string;
  password: string;
}
function ajaxSignup(data: Signup) {}
ajaxSignup({
  email: "hello",
  id: "hi",
  password: "password",
});
