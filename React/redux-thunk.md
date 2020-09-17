# redux-thunk

* 액션 객체가 아닌 함수를 디스패치할 수 있음

  즉, thunk 함수 안에서는 액션을 dispatch 할 수 있고 getState를 사용하여 현재 상태를 조회할 수도 있음

* 프로미스를 다루는 리덕스 모듈을 다룰 땐 다음과 같은 사항을 고려해야합니다.

  1. 프로미스가 시작, 성공, 실패했을때 다른 액션을 디스패치해야합니다.

  2. 각 프로미스마다 thunk 함수를 만들어주어야 합니다.

  3. 리듀서에서 액션에 따라 로딩중, 결과, 에러 상태를 변경해주어야 합니다.