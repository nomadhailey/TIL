### 기본타입, 배열, 튜플

```typescript
# 숫자 배열 선언
let arr : number[] = [1, 2, 3];
let arr : Array<number> = [1, 2, 3]; // 이건 주로 제네릭 사용 시

# 다양한 요소 배열 선언
let arr : (string | number | boolean)[] = [true, 2, '3']
# Tuple
let arr : [boolean, number, string] = [true, 2, '3'] // 위의 코드보다 좀 더 엄격하게 배열의 length가 3임을 명시
let arr : [boolean, 2, string] = [true, 2, '3'] // arr[1]에는 무조건 2만 들어갈 수 있게(더 엄격하게)
```

### 상수, enum, 함수, 객체타입

```typescript
# 상수 선언
let arr = [true, 2, '3'] as const; // 상수처럼 쓰고 싶은 경우. readonly가 되어서 수정할 수가 없음
let str = 'hello' as const; // let으로 선언되었어도 값을 못 바꿈. str의 타입은 'hello'가 됨

# enum
enum Color = { Red, Green, Blue}
let c: Color = Color.Green;
// 위 두 줄의 코드에 의해 아래가 성립될 수 있음
Color[0] === 'Red';
Color['Red'] === 0;
```

### never, any, 타입캐스팅

```typescript
# never_주로 배열을 잘못 만든 경우 never 에러 발생 
const arr2[] =[];
arr2.push(3); // Argument of type '3' is not assignable to parameter of type 'never'. => 실수로 타입을 빈 배열로 만들었을 때

# any : 다른 사람이 d.ts 파일에서 잘못 만든 타입을 써야할 경우 혹은 타입 정의할 때 너무 복잡해서 못 만들거 같은 경우

# as unknown_남들이 만든 타입을 강제로 바꾸는 경우
const hello:number;
(hello as unknown as string).substr(1, 2); // 첫 번째 방법
(<string><unknown>hello>.substr(1, 2); // 두 번째 방법
// 아래와 같이 Dom element를 number타입으로 강제로 바꿀 수도 있음
const div = document.createElement('div');
const a = div as unknown as number;
```