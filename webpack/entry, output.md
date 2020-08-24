# 11. 웹팩의 기본구조 소개 (entry, output), 예제 A

* Entry : 모듈의 의존 관계를 이해하기 위한 시작점을 설정

* Output : 웹팩이 생성하는 번들 파일에 대한 정보를 설정

* 웹팩 설치

  ```bash
  #package.json 설치
  npm init - y
  
  # wbpack과 webpack-cli를 설치
  # webpack-cli : 웹팩을 실행할 수 있는 명령어들을 지원해주는 패키지 -> 설치하면 루트 폴더에 node_modules 폴더가 설치됨
  npm install webpack webpack-cli --save-dev
  ```

  

* npx : 설치된 패키지를 기준으로 node_moudules안에서 실행 파일을 찾아 실행하게 해주는 역할을 함

  * node_modules > .bin : 이 폴더에 있는 모듈들은 패키지들을 실행해주는 역할을 함. 이 경로로 직접 접근하여 웹팩을 실행할 수도 있으나, npx라는 간단한 명령어를 사용하여 실행할 수도 있음

* 웹팩을 실행하기 위해서는 다음과 같은 과정을 거쳐야 정상적으로 실행할 수 있음

  1) 루트에 dist 폴더, src 폴더 생성(dist폴더 안에 entrypoint로 main.js가 자동생성됨)

  2) index.js 파일을 src폴더로 옮김

  3) 1~2의 과정을 거친 후, 터미널에 `npx webpack`을 입력했을 때 readline으로 인한 오류가 발생할 경우(readline이라고 하는 노드의 내장모듈을 인식하지 못하기 때문에 발생하는 에러. 즉 웹팩이 모듈의 의존관계를 해석할 때 index.js파일에 있는 readline 모듈이 노드환경에서 제공해주는 내장모듈이라고 인식하지 못함.->웹팩이 실행되고 있는 환경이 노드라고 인식시켜주면 해결됨 -> 이를 위해 'target'이라는 키를 설정해줘야 함. 'target'은 웹팩이 어떤 환경에서 실행되는지 웹팩에게 알려주는 역할->readline을 내장모듈로 사용하는 환경인 노드라는 값을 타겟에 적용 -> 커맨드라인에서 키를 추가하는 방법은 `--키이름=값`->`npx webpack --target=node`

* __dirname, path

  ```javascript
  //pathTest.js
  
  // __dirname은 이 변수를 사용하는 파일의 절대경로를 담고 있음
  // path module(노드 내장 모듈) : 파일 경로를 쉽게 조작할 수 있게 도와주는 기능이 있음
  const path = require("path");
  console.log(__dirname); // C:\Users\haeri\Desktop\development\Webpack
  
  // resolve 메소드 : 파라미터마다 문자열 값을 넣어주면 그 사이에 슬래쉬를 적용시켜서 경로를 조합해줌
  const pathTest = path.resolve(__dirname, "abc");
  console.log(pathTest); // C:\Users\haeri\Desktop\development\Webpack\abc
  ```



# **12. 웹팩의 기본구조 (entry, output) 예제 B**

* ```javascript
  // 루트에 Webpack.config.js 파일 직접 생성 후 아래와 같이 작성. 
  // 웹팩에 대한 설정 내용 작성
  
  // output은 파일이 생성되는 경로를 작성해줘야 하기 때문에 상대경로가 아닌 절대경로로 작성해주어야 함. 노드 환경에서 제공되는 __dirname이라는 변수를 이용해 파일 경로를 만들 것. __dirname은 이 변수를 사용하는 파일의 절대경로를 담고 있음
  // path module(노드 내장 모듈) : 파일 경로를 쉽게 조작할 수 있게 도와주는 기능이 있음
  const path = require("path");
  module.exports = {
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js",
    },
    target: "node", // 타겟키를 지정하지 않으면 브라우저 환경을 의미하는 웹이라는 값이 기본적으로 지정됨
  };
  
  ```

  * 위의 코드를 작성 후 커맨드 라인에 `npx webpack` 입력 -> dist폴더에 bundle.js 생성됨