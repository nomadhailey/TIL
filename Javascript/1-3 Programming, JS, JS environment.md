#**1. 프로그래밍**

* 자바스크립트는 컴파일러가 없고 인터프리터가 있음.

* 컴파일러 언어(번역) vs 인터프리터 언어(동시 통역. 한 줄 한 줄씩 컴퓨터에게 통역해줌)
  * 컴파일을 하고 나면 실행 파일이 생김(단 한 번만 걸림). 그런데 인터프리터 언어는 실행 파일이 생기지 않음. 대신 항상 소스코드를 가지고 통역을 해줘야 함(매번 해줘야 함). ->따라서 컴파일이 더 빠름. 만약 단 한번만이라고 하면 인터프리터가 더 빠를 수 있음.

# **2.자바스크립트란?**

##1.자바스크립트의 탄생

* ECMA(에크마) : 유럽에 컴퓨터 관련 표준화 담당하는 단체 -> ECMAScript 라는 이름으로 나오게 됨

#**3.자바스크립트 성장의 역사**

##**3.1 Ajax**

* XMLHttpRequest : 웹페이지 상에서 html의 조각을 서버가 클라이언트에게 줘서 클라이언트가  자바 스크립트로 만들어서 갈아 끼워넣는.(잘 바뀌지 않는 헤더, 푸터 등은 놔두고)->속도 향상->이걸 처음으로 실현한 것이 구글맵

##3.4 Node.js

* 예전에는 js를 실행시키려면 브라우저를 꼭 실행시켜야 했음. 그런데 js를 백엔드에도 쓰고 싶고 냉장고 등의 임베드 기술에도 쓰고 싶다는 욕구->이를 위해서는 js를 브라우저에서 독립시켜야 함->node.js라는 환경을 깔면 어디서든지(브라우저가 없어도) js가 돌아간다->프론트엔드에서 나아가 범용적인 언어로 사용할 수 있게 된 것. 또한 v8로 인해 속도까지 빨라짐->이렇게 된 게 5~6년밖에 안됨->개발자들이 대체적으로 젊음

##4.JavaScript와 ECMAScript

* 브라우저에서 동작하는 JS가 있고 node.js에서 동작하는 JS가 있는데 이 두 개의 JS는 다름.

  예를 들어 alert 함수는 브라우저에서만 동작하고 node.js에는 없음.

  즉 JS도 환경에 따라 차이가 있음.(클라이언트 사이드 JS vs. 서버사이드 JS)

  우리가 흔히 JS라고 하면 클라이언트 사이드 JS. 왜? 프론트엔드라고 하면 브라우저에서 동작하는 JS가 중요하니까!

  가장 기본적인 것들(변수 등)이 core에 들어있음.

##5. 자바스크립트의 특징

* 자바스크립트는 컴파일러가 없고 인터프리터가 있음.

* 컴파일러 언어(번역) vs 인터프리터 언어(동시 통역. 한 줄 한 줄씩 컴퓨터에게 통역해줌)
  * 컴파일을 하고 나면 실행 파일이 생김(단 한 번만 걸림). 그런데 인터프리터 언어는 실행 파일이 생기지 않음. 대신 항상 소스코드를 가지고 통역을 해줘야 함(매번 해줘야 함). ->따라서 컴파일이 더 빠름. 만약 단 한번만이라고 하면 인터프리터가 더 빠를 수 있음.
  * v8 자바스크립트 엔진은 크롬에 있음

* c언어는 절차형, 명령형 언어. 자바는 클래스 기반 객체지향형 언어. 자바스크립트는 멀티 패러다임 언어(여러가지 방법론을 다양하게 지원. 대신 클래스 기반 아니고 프로토 타입 객체지향형 언어. 따라서 어떤 부분은 명령형, 어떤 부분은 함수형, 어떤 부분은 프로토타입 기반)->JS의 장점이지만 학습상에서는 단점. 왜? 3개 타입 다 배워야 하니까

#**3.자바스크립트 개발 환경과 실행 방법**

##1.자바스크립트 실행 환경

* 회사를 가면 node.js가 아닌 브라우저 환경에서 코드를 실행하게 될 것.
* DOM : HTML, CSS의 파싱 결과->따라서 브라우저에서 동작. NODE.JS는 DOM API를 모름. 따라서 어느 것이 브라우저에서 동작하는지 어느 것이 NODE.JS에서 동작하는지 알아야 함.

##3.Node.js

* 브라우저에도 console이 있고 node.js에도 콘솔이 있음
* code runner : node.js에서 실행하는 것. ECMAScript와 node.js에서만 실행 가능한 게 보여짐. 즉 alert 같은 것은 실행해도 동작 x


#**4.변수**

##1.변수란 무엇인가? 왜 필요한가?

* 각 셀의 크기는 8비트이며 8비트가 가질 수 있는 경우의 수는 2의 8승으로 256가지수.

* ASCII : 아스키 코드는 8비트를 가질 수 있으며, 즉 256개 미만을 가질 수 있음.

* '10+20' : 10과 20을 더해라

  'var a=10+20' : 10과 20을 더해라 + 그 결과값이 있는 위치를 a라고 하는 이름이 기억해라

  -> 변수를 사용하는 이유 : 그 변수에 할당되어 있는 값을 또 쓰겠다는 의미!

  ​	한 번만 쓰고 버린다면 변수에 담을 필요없이 바로 console.log(10+20)으로 쓰면 됨

  -> 즉 <u>'변수'란 하나의 값을 기억하기 위해서 확보한 메모리 공간 또는 그 메모리 공간을 기억하는 이름</u>

  -> var a에서 a는 변수가 아닌 '변수 이름', ''식별자''

  -> 그런데 왜 주소를 기억하면 되지 왜 이름을 기억할까? 각 사용자의 컴퓨터가 다르므로 메모리주소 또한 사용자 컴퓨터마다 다름. 따라서 메모리 주소를 써줄 수가 없음.

  -> 10과 20에도 다시 접근하고 싶다면? 10과 20도 변수로 다시 할당해야 함

   * var result = 10 + 20;

     ->10은 값, 20도 값, 10+20은 표현식. 표현식은 값과 동치(지금 현재는 형태가 다르지만 언젠가 같은 값으로 수렴한다.)

     ->변수에는 값 뿐만 아니라 표현식도 할당할 수 있다. 즉 변수에 할당할 수 있는 것은 값이 될 수 있는 모든 것을 할당할 수 있다. 이 말은 표현식이 아닌 것은 할당할 수 없다는 것.

     표현식이 아닌 것은?

     -> 변수를 만든다=메모리 공간을 확보한다

  * var x=1; (컴퓨터는 아래와 같이 두 개의 식으로 이해함)

    1) var x; -> 변수 선언

    2) x=1; -> 변수 값