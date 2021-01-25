## Promise

#### Promise와 callback의 차이점은 무엇이며 각각의 장단점에 대해 설명

둘 다 자바스크립트에서 비동기 처리를 위해 사용하는 패턴.

Callback 같은 경우 함수의 처리 순서를 보장하기 위해서 함수를 중첩하게 사용되는 경우가 발생해 1) 콜백헬 및 2)에러처리가 힘들다는 단점이 있다. 그래서 나온게 Promise이며 ES6부터 정식 채택되어 사용중이다. 프로미스는 전통적인 콜백 패턴이 가진 단점을 보완하며 비동기 처리 시점을 명확하게 표현할 수 있는 장점이 있다.

promise는 비동기 처리에 성공하면 resolve메소드를 호출해서 비동기 처리 결과를 후속처리 메소드로 전달한다.
비동기 처리에 실패하면 reject메소드를 호출해서 에러메시지를 후속처리 메소드로 전달한다.
후속처리메소드는 then과 catch가 있다. 둘다 Promise를 반환한다.
then 을 가지고 메소드 체이닝을 통하여서 콜백헬 문제를 해결 할 수 있다.