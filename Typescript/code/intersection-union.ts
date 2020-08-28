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

// union 타입
function compare(x: string | number, y: string | number) {
  if (typeof x === "number" && typeof y === "number") {
    return x === y ? 0 : x > y ? 1 : -1;
  }
  if (typeof x === "string" && typeof y === "string") {
    return x.localeCompare(y);
  }
}

// 타입 가드 정의
function isAction(v: User | Action): v is Action {
  return (<Action>v).do !== undefined; // v라는 파라미터에 do가 있으면 v는 Action이다
}

function Process(v: User | Action) {
  if (isAction(v)) {
    v.do();
  } else {
    console.log(v.name);
  }
}
