// var로 정의한 변수는 outer 함수의 하나의 렉시컬 환경만 생성합니다. 그리고 let i = 1, 2, 3으로 재할당이 계속적으로 이루어 지지만 setTimeout의 콜백함수는 비동기적으로 작동하기 때문에 해당 for문이 완료된 상태에서 3개의 함수가 태스크큐 -> 콜스택으로 옮겨지면서 console이 찍히는데 그 때의 i 값은 하나의 렉시컬 환경에 최종적으로 재할당된 값이 3이기 때문에 333으로 찍힙니다..
// let으로 정의한 변수는 for문 내에서 i = 1 , 2, 3 일 때의 각각의 렉시컬 환경(3개)을 생성하고, 위와 동일하게 setTimeout의 콜백함수가 for문이 완료된 후 태스크 큐 -> 콜스택으로 옮겨지면서 실행되지만 각각의 렉시컬 환경에는 i = 1 / i = 2 / i = 3 이라는 정보를 기억하고 있기떄문에 123으로 찍힙니다.

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

var funcs = [];

for (var i = 0; i < 3; i++) {
  funcs[i] = function () {
    return i;
  }; // ①
} // funcs[f, f, f]

for (var j = 0; j < funcs.length; j++) {
  console.log(funcs[j]()); // 3 3 3
}
