## 3. Chapter 01. TypeScript 시작하기 - 02. TypeScript 컴파일러

* 설치

```bash
npm install typescript
```

* 컴파일(ts->js)

```bash
tsc # typescript 실행 -> js로 컴파일
tsc hello.ts
```

* 옵션

```bash
tsc hello.ts --target es6 #ES6로 컴파일
tsc hello.ts --lib es5,es2015.promise,es2015.iterable,dom #라이브러리 옵션에서 es6의 promise를 쓰겠다
```



## Chapter 01. TypeScript 시작하기 - 03. TypeScript 컴파일러 설정파일

* tsconfig.json

  프로젝트의 최상단 폴더에 위치하며, 파일을 생성하여 아래와 같이 입력

  ```json
  // tsconfig.json
  
  {
    "include": ["src/**/*.ts"],
    "exclude": ["node_modules"],
    "compilerOptions": {
      "module": "commonjs",
      "rootDir": "src",
      "outDir": "dist",
      "target": "es5",
      "sourceMap":true,// 원본인 typescript의 소스 내용을 보고 싶은 경우
      "removeComments": true,
      "noImplicitAny": true // type을 설정하지 않은 경우 any로 주어지는 것을 방지하여 타입 설정하지 않은 실수를 방지함
    }
  }
  
  ```

  

## 05. Chapter 01. TypeScript 시작하기 - 04. 변수선언

* **함수 레벨 스코프 vs. 블록 레벨 스코프**

```typescript
function outer() {
  if (true) {
    var score = 0;
  }
  for (var i = 0; i < 3; i++) {
    setTimeout(function () {
      console.log("var i :", i); // 3 3 3
    }, 100);
  }
  for (let i = 0; i < 3; i++) {
    setTimeout(function () {
      console.log("let i : ", i); // 0 1 2
    }, 100);
  }
  console.log("score", score); // 0
}
outer();
```



## 06. Chapter 01. TypeScript 시작하기 - 05. 기본타입

* **tuple** : 배열 안에 들어갈 요소의 '개수'와 '타입'을 미리 정의

```typescript
let tuple1 : [number, string]; // 1개의 숫자타입, 1개의 문자 타입으로 총 2개의 변수만 넣을 수 있음
tuple1 = [1, hello];

let tuple2 : [number, number, number];
tuple2  = [1, 2, 3];
```