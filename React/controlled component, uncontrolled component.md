# controlled component vs. uncontrolled component

### uncontrolled component : 'pull' the value

* DOM 자체에서 상태가 다루어짐

* Uncontrolled Component는 전통적인 HTML form input과 유사하다.

  ```javascript
  class Form extends React.Component {
    handleSubmitClick = () => {
      const name = this._name.value;
      // do something with name..
    }
  
    render() {
      return (
        <div>
          <input type="text" ref={input => this._name = input} />
          <button onClick={this.handleSubmitClick}>Sign up</button>
        </div>
      );
    }
  ```

  * 위 코드는 DOM에 의해서 자체적으로 유저가 상호작용한 정보가 담겨있다.

  - 따라서 React Component가 DOM이 관리하는 정보를 알기 위해서는 실제 DOM에 접근할 수 있는 방법이 필요한데, 그것이 바로 `<input>` 태그 내부에 부여된 `ref`이다.
  - `ref` prop에 넘겨진 콜백함수는 componentDidMount() 또는 componentDidUpdate() 직전에 호출된다.
  - 따라서 componentDidMount()가 실행되는 시점에는 DOM에서 ref를 통해서 받아온 정보에 대한 참조를 저장할 수 있다.
  - 그리고 최종적으로 `handleSubmitClick` 메소드가 버튼 클릭으로 실행될 때 해당 참조에 대한 정보를 컴포넌트 내부에 저장한 후 추가적인 작업을 할 수 있다.
  - 실질적으로는 React Component가 HTML 엘리먼트에서 정보를 *PULL*하여 사용하는 방식이다.
  - 컴포넌트 내부에서 실시간으로 user 정보를 관리하는 것이 아니기 때문에 실시간으로 작업을 처리할 때(ex. 입력이 완료되기 전까지 버튼을 숨기는 등의 행위)에는 부적합한 방식이다.

### controlled component  : 'push' the value

* React 컴포넌트에서 상태를 다룸
* **Form element의 value를 component의 prop으로 설정하고 이를 활용**하면 "Controlled Component"이다!
* 반면 Controlled Component는 현재 HTML 엘리먼트에 들어온 정보를 prop으로 state를 변경시키고, 변경된 state를 기반으로 HTML 엘리먼트의 value를 변경시키는 방식이다.
* DOM의 정보를 컴포넌트 내부에 state로 저장하고 state를 기반으로 HTML 엘리먼트를 다시 re-rendering시키기 때문에 이 방식이 더 React스러운 방식이라고 할 수 있다. 

```javascript
class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
    };
  }

  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.name}
          onChange={this.handleNameChange}
        />
      </div>
    );
  }
}
```

 위 코드가 돌아가는 방식을 살펴보자면..

- user가 정보를 input 태그에 입력하면 onChange 메소드가 실행되면서 Component 컴포넌트의 내부 state의 값을 유저가 입력한 값으로 변경시킨다.

- state가 update되면서 컴포넌트가 re-rendering되는데, re-rendering 시에 input 태그의 value에 현재 변경된 state를 부여한다.

- user 입력을 state로 저장 => re-rendering => user 입력을 value로 주어 실시간으로 화면에 반영

- 이 방식을 통해 React Component에 내장된 state를 기반으로 작동하도록 HTML form 태그를 변경시켜, this.state.name이라는 '신뢰 가능한 단일 소스'를 기반으로 컴포넌트가 작동되도록 변경하였다.

- user 정보를 기반으로 state를 변경시킨 후, 다시 해당 state를 input 태그의 value로 설정하고 있기 때문에 uncontrolled component와 달리 데이터를 *'PUSH'*하는 방식이라 할 수 있다.

- 이 방식을 취하면 react가 내부적으로 관리하는 state와 유저가 입력하는 정보 간의 sync가 맞기 때문에 uncontrolled component에서는 불가능했던 실시간 작업 처리가 가능해진다. 실시간으로 field validation을 체크하거나, 조건에 따라 submit button을 disabling하는 등 실시간으로 user에게 정보를 일러줘야 할 때에 사용하기 좋다.

  * 출처 : https://soldonii.tistory.com/145

- HTML 엘리멘트 중 자체적으로 특정 data를 가지는 엘리먼트들이 있다. 바로 `<form>` 태그의 엘리먼트들이다.(`<input>`, `<textarea>`, `<select>` 등) * 

  이들은 user가 DOM에서 어떤 정보를 입력하거나 선택할 경우, 해당 정보를 HTML 엘리먼트가 직접 보관하게 되는데, 이는리액트의 핵심 설계원리인 **'신뢰 가능한 단일 소스' 원칙에 위배** *

  따라서 이를 해결하기 위해서 React에서 Controlled 컴포넌트의 개념이 나온 것이다.

  물론 ref가 필요한 상황이 있습니다. 항상 모든 컴포넌트들이 실시간으로 연동되어야 하는 건 아니니, 특정한 장소에서 특정한 이벤트 상황에서 input값을 가져와서 사용할 수도 있습니다. 하지만 리엑트 공식문서에선 Ref를 남용하지 않길 권장합니다. 공식문서에서 추천하는 사용해도 괜찮은 상황은 다음과 같습니다

* Ref를 사용해야 할 때

  Ref의 바람직한 사용 사례는 다음과 같습니다.

  * 포커스, 텍스트 선택영역, 혹은 미디어의 재생을 관리할 때.
  * 애니메이션을 직접적으로 실행시킬 때.
  * 서드 파티 DOM 라이브러리를 React와 같이 사용할 때.

  선언적으로 해결될 수 있는 문제에서는 ref 사용을 지양하세요.

* 참고 : https://goshakkk.name/controlled-vs-uncontrolled-inputs-react/

