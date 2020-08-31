# package, version

### 1. 패키지와 모듈

### 1) 패키지

패키지는 package.json 으로 설명되는 파일 또는 디렉토리 입니다.

패키지는 npm 레지스트리에 공개되기 위해 반드시 package.json 파일을 가지고 있어야합니다.

### 2) 모듈

모듈은 node.js의 require() 함수로 로드될 수 있는 node_modules 디렉토리안의 파일 또는 디렉토리입니다.

주의: 모듈은 package.json 파일을 가질 필요가 없습니다. 모든 모듈들이 패키지는 아닙니다. package.json을 가진 모듈만이 패키지입니다.

모듈이 패키지 보다 조금 더 큰 개념

###2. 시맨틱 버저닝

* 버전은 . dot을 기준으로 3영역 [Major, minor, patch] 로 구분됩니다.

* 규칙

  ![](C:\Users\haeri\Desktop\development\TIL\node.js\images\semantic versioning.png)

### 3. 캐럿(^)

해당 패캐지의 마이너, 패치 변경을 허용하겠다는 의미입니다.



[참고자료] https://velog.io/@skyepodium/package.json