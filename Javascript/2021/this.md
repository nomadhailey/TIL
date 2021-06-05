# this

* this는 자신이 속한 객체 또는 자신이 생성할 인스턴스를 가리키는 자기 참조 변수

* this는 자바스크립트 엔진에 의해 암묵적으로 생성되며, 코드 어디서든 참조할 수 있다.

* 함수를 호출하면 arguments객체와 this가 암묵적으로 함수 내부에 전달된다. 함수 내부에서 arguments객체를 지역 변수처럼 사용할 수 있는 것처럼 this도 지역 변수처럼 사용할 수 있다. 단, this가 가리키는 값, 즉 this 바인딩은 '함수 호출 방식'에 의해 동적으로 결정된다.

* this는 객체의 프로퍼티나 메서드를 참조하기 위한 자기 참조 변수이므로 일반적으로 객체의 메서드 내부 또는 생성자 함수 내부에서만 의미가 있다. 따라서 strict mode가 적용된 일반 함수 내부의 this에는 undefined가 바인딩된다. 일반 함수 내부에서 this를 사용할 필요가 없기 대문

* 렉시컬 스코프와 this바인딩은 결정 시기가 다르다.

  : 함수의 상위 스코프를 결정하는 방식인 렉시컬 스코프는 함수 정의가 평가되어 함수 객체가 생성되는 시점에 상위 스코프를 결정. 하지만 this바인딩은 함수 호출 시점에 결정.

* 콜백 함수가 일반 함수로 호출된다면 콜백 함수 내부의 this에도 전역 객체가 바인딩된다. 어더한 함수라도 일반 함수로 호출되면 this에 전역 객체가 바인딩된다.

* 메서드 호출

  : 메서드 내부의 this에는 메서드를 호출한 객체, 즉 메서드를 호출할 때 메서드 이름 앞의 마침표(.) 연산자 앞에 기술한 객체가 바인딩된다. 주의할 것은 메서드 내부의 this는 메서드를 소유한 객체가 아닌 메서드를 호출한 객체에 바인딩된다는 것.

## Function.prototype.apply/call/bind 메서드에 의한 간접 호출

* apply, call 메서드의 본질적인 기능은 함수를 호출하는 것이며, 함수를 호출하면서 첫 번째 인수로 전달한 특정 객체를 호출한 함수의 this에 바인딩한다.

### apply, call 메서드의 활용

#### 유사 배열 객체에 배열 메서드를 적용

* apply, call 메서드의 대표적인 용도는 arguments 객체와 같은 유사 배열 객체에 배열 메서드를 사용하는 경우. 

  Arguments 객체는 배열이 아니기 때문에 Array.prototype.slice와 같은 배열의 메서드를 사용할 수 없으나 apply, call 메서드를 이용하면 가능

* ES6에서는 유사배열객체 또는 순회 가능한 모든 종류의 데이터 타입을 배열로 전환하는 Array.from 메서드를 새로 도입

  ```javascript
  var obj = { 
  	0 : 'a',
  	1 : 'b',
  	2 : 'c',
  	length : 3
  };
  var arr = Array.from(obj);
  console.log(arr); // ['a', 'b', 'c']

#### 여러 인수를 묶어 하나의 배열로 전달하고 싶을 때 - apply 활용

```javascript
var numbers = [10, 20, 3, 16, 45];
var max = Math.max.apply(null, numbers);
var min = Math.min.apply(null, numbers);
console.log(max, min); // 45 3
```

ES6에서는 스프레드 연산자를 이용하면 apply를 적용하는 것보다 더욱 간편하게 작성

```javascript
var numbers = [10, 20, 3, 16, 45];
var max = Math.max(...numbers);
var min = Math.min(...numbers);
console.log(max, min); // 45 3
```

### bind 메서드

* bind 메서드는 apply, call 메서드와 달리 함수를 호출하지 않고 this로 사용할 객체만 전달

  ```javascript
  function getThisBinding () {
    return this;
  }
  // this로 사용할 객체
  const thisArg = { a : 1 };
  
  // bind 메서드는 함수를 호출하지 않는다.
  console.log(getThisBinding.bind(thisArg)); // getThisBinding
  // bind 메서드는 함수를 호출하지는 않으므로 명시적으로 호출해야 한다.
  console.log(getThisBinding.bind(thisArg)()); //{ a : 1 }

* bind 메서드는 메서드의 this와 메서드 내부의 중첩 함수 또는 콜백 함수의 this가 불일치하는 문제를 해결하기 위해 유용하게 사용된다.

  ```javascript
  const person = {
    name : 'park',
    foo(callback) {
      // (1)
      setTimeout(callback, 100);
    }
  };
  person.foo(function() {
    console.log(`Hi! my name is ${this.name}.`); // 2) Hi! my name is .
    // 일반 함수로 호출된 콜백 함수 내부의 this.name은 브라우저 환경에서 window.name과 같다.
    // 브라우저 환경에서 window.name은 브라우저 창의 이름을 나타내는 빌트인 프로퍼티이며 기본값은 ''이다.
    // Node.js 환경에서 this.name은 undefined이다.
  })
  ```

  ```javascript
  const person = {
    name : 'park',
    foo(callback) {
      // bind 메서드로 callback 함수 내부의 this 바인딩을 전달
      setTimeout(callback.bind(this), 100);
    }
  };
  person.foo(function() {
    console.log(`Hi! my name is ${this.name}.`); // 2) Hi! my name is park.
  })
  ```

## 정리 : 함수 호출 방식에 따른 this 바인딩

| 함수 호출 방식                                             | this 바인딩                                                  |
| ---------------------------------------------------------- | ------------------------------------------------------------ |
| 일반 함수 호출                                             | 전역 객체                                                    |
| 메서드 호출                                                | 메서드를 호출한 객체                                         |
| 생성자 함수 호출                                           | 생성자 함수가 (미래에) 생성할 인스턴스                       |
| Function.prototype.apply/call/bind 메서드에 의한 간접 호출 | Function.prototype.apply/call/bind 메서드에 첫 번째 인수로 전달한 객체 |

