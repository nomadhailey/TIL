# 16. Ch 03. 고급타입 - 02. 타입 별칭

### type alias

* 인터페이스와 비슷하나, 인터페이스와 달리 타입에 이름을 붙일 수 있음



# 17. Ch 03. 고급타입 - 03. 인덱스타입

### 인덱스 타입

* 속성이 따로 정해져 있지 않고 동적으로 처리해야 할 때
* Props 인터페이스에 string 타입의 key 의 타입은 string 입니다. index type은 [ key : string | number ] 둘중 하나의 타입만 가능하며 만약 index type이 아닌 name 처럼 고정된 데이터를 적용 할 경우 name은 반드시 필요하고 key type의 key는 문자,숫자가 사용 가능하며 데이터는 string type인 값만 저장 가능 합니다. 할당된 index type 은 접근방식이 동적인 것을 확인 할 수 있습니다. p.abc는 실제 없는 key 지만 접근하여도 에러는 발생하지 않습니다.

* keyof 키워드는 Props의 타입에 존재하는 type들을 union 타입으로 할당한다. 즉 Props에서 사용 가능한 type은 string, number다 index type은 string 또는 number의 타입을 사용할 수 있기때문에 자동으로 key : string | number 타입으로 적용된다 vs code 를 사용하시면 let keys 변수에 마우스를 올리면 가이드 해줄 것이다.

```typescript
interface Props {
    name : string
    [key: string] : string;
}

const p: Props = {
    name : 'dog',
    a : 'a',
    b : 'b',
    c : 'c',
    0 : '3',
    1 : 'd',
    2 : 'e'
}

p[0];
p['a'];
p.a;
p.name;
p.abc;
p.ddd;


let keys : keyof Props;
```

* 출처 : https://dog-developers.tistory.com/200

# 18. Ch 04. 실습 - 01. Parcel과 모듈

* parcel-bundler 설치

  ```bash
  npm init -y
  npm i parcel-bundler -D
  ```

  ```json
  // package.json
  
  "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1",
      "dev" : "parcel index.html" // 프로젝트를 번들링할 때 시작이 되는 엔트리 포인트를 지정해줘야 함(index.html)
    }, 
  ```

