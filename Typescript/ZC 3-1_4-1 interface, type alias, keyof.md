### interface특성과 type alias

```typescript
# 인터페이스 내에서 각 타입 선언 마무리는 세미콜론, 콤마, 혹은 아무것도 안 붙이는 것 모두 가능
# 인터페이스는 아래와 같이 동일한 이름으로 중복 선언 가능 => 합쳐짐 (하지만 type alias의 경우 나눠서 쓸 수 없음. 즉 중복 선언 불가=>하나로 써줘야 함)
interface RSP {
    readonly ROCK : '0'
}
interface RSP {
    readonly SCISSORS : '-142px'
    readonly PAPER : '-284px'
}
```

#### interface vs. type alias

* type alias가 더 넓은 범위
* interface : 주로 객체에 씀

#### keyof

```typescript
interface RSP {
    readonly ROCK : '0'
    readonly SCISSORS : '-142px'
    readonly PAPER : '-284px'    
}
function computerChoice(imgCoords:"0" | "-142px" | "-284px") : "ROCK | SCISSORS | PAPER" {.....   }
// 위의 코드는 keyof를 활용하여 중복을 최소화 할 수 있음
function computerChoice(imgCoords: RSP[keyof RSP]) : keyof RSP {.....   }
```

```typescript
interface Example {
    a: 3,
    b: 7,
    [key:string] : number // 뭐가 들어올지 모르는 경우(객체의 인터페이스가 확실하지 않을 때 여유를 두는 방법 => 하지만 엄격한 방법이 아니기 때문에 불가피한 상황이 아닌 경우에는 지양해서 사용)
}
```

```typescript
// error : Property 'style' does not exist on type 'Element.'
document.querySelector('#computer').style.background = ...
// 위의 코드를 아래와 같이 타입 캐스팅해서 HTMLElement의 범위를 좁혀줌.(HTMLElement에는 style 프로퍼티가 없지만 HTMLDivElement에는 style프로퍼티가 정의되어 있음)
(document.querySelector('#computer') as HTMLDivElement).style.background = ...
```