## 3. Chapter 01. TypeScript 시작하기 - 02. TypeScript 컴파일러

* Typescript 컴파일러 : node.js의 프로그램이므로 node.js가 동작하는 곳에서만 사용 가능
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
  * 라이브러리 옵션(--lib) : 전역이나 타입 스크립트에서 쓰는 타입들이 어디까지가 기본적으로 제공되어지는지 컴파일러에게 말해줄 수 있음.
  * 모듈 옵션(--module) : commonjs, es6모듈 등 설정해 줄 수 있음

```bash
tsc hello.ts --target es6 #ES6로 컴파일
tsc hello.ts --lib es5,es2015.promise,es2015.iterable,dom #라이브러리 옵션에서 es6의 promise를 쓰겠다
tsc hello.ts --target es6 --lib es2015,dom --module commonjs #타겟은 es6지만 모듈은 commonjs로 설정
```

=> 하지만 위와 같이 매번 명령어로 설정하는 것보다 컴파일러 설정파일에 설정해서 간단하게 실행할 수 있음

## Chapter 01. TypeScript 시작하기 - 03. TypeScript 컴파일러 설정파일

* tsconfig.json

  프로젝트의 최상단 폴더에 위치하며, 파일을 생성하여 아래와 같이 입력

  ```json
  // tsconfig.json
  
  {
    "include": ["src/**/*.ts"],
      // 다른 노드 모듈들을 설치하게 되면 node_moduls라는 폴더에 노드 패키지들이 들어가는데 이 패키지들은 타입스크립트 컴파일러 대상에서 제외하겠다 
    "exclude": ["node_modules"],
    "compilerOptions": {
      "module": "commonjs",
      "rootDir": "src",
      "outDir": "dist",
      "target": "es5",
      "sourceMap":true,// 컴파일 이전의 원본인 typescript의 소스 내용을 보고 싶은 경우
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

