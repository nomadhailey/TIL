# 리덕스 모듈

* 리덕스 모듈이란 다음 항목들이 모두 들어있는 자바스크립트 파일을 의미합니다.
  - 액션 타입
  - 액션 생성함수
  - 리듀서
* Ducks 패턴 : 리듀서와 액션 관련 코드들을 하나의 파일에 몰아서 작성

![](C:\Users\haeri\Desktop\development\TIL\React\images\redux.png)

###1) 모듈 만들기

* modules/counter.js

### 2) 루트 리듀서 만들기

* modules/index.js

### 3) 리덕스 스토어 만들기

* index.js

### 4) 프레젠테이셔널 컴포넌트

리덕스 스토어에 직접적으로 접근하지 않고 필요한 값 또는 함수를 props 로만 받아와서 사용하는 컴포넌트

* components/Counter.js
* components/Todos.js
  * 3개 컴포넌트 : TodoItem, TodoList, Todos

### 5) 컨테이너 컴포넌트

리덕스 스토어의 상태를 조회하거나, 액션을 디스패치 할 수 있는 컴포넌트

* containers/CounterContainer.js
* containers/TodosContainer.js 
* useSelector : 리덕스 스토어의 상태를 조회하는 Hook
* useDispatch : 리덕스 스토어의 dispatch 를 함수에서 사용 할 수 있게 해주는 Hook