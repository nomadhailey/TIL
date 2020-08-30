interface User {
  name: string;
}
interface Action {
  do(): void;
}
// intersection 타입
function createUserAction(u: User, a: Action) {
  return { ...u, ...a };
}

const U = createUserAction({ name: "hailey" }, { do() {} });

// union 타입1) 파라미터_원시값
function compare(x: string | number, y: string | number) {
  // 타입 가드 정의
  if (typeof x === "number" && typeof y === "number") {
    return x === y ? 0 : x > y ? 1 : -1;
  }
  if (typeof x === "string" && typeof y === "string") {
    return x.localeCompare(y);
  }
}

// union 타입2) 파라미터_interface타입
// 타입가드 정의(v is Action) : is를 통해 v라는 파라미터에 do가 있으면 v는 Action이다
// return은 boolean타입으로 해줘야 함
function isAction(v: User | Action): v is Action {
  return (<Action>v).do !== undefined;
}

function Process(v: User | Action) {
  if (isAction(v)) {
    v.do();
  } else {
    console.log(v.name);
  }
}
