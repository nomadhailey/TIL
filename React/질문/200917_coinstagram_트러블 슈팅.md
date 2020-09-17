# 이미지 무한 반복 및 fade-in, fade-out 처리

```typescript
// components/LoginPhoneImage

export default function LoginPhoneImage() {
const imgArray = [
  randomImage_0,
  randomImage_1,
  randomImage_2,
  randomImage_3,
  randomImage_4,
];
  const [index, setIndex] = useState(0); // 반복할 그림들을 배열로 넣어서 배열의 인덱스를 useState로 관리
  const selectedImg = imgArray[index];

  useEffect(() => {
    let rotateId: number = setInterval(() => {}); // 질문 1) 구글링 해봐도 setInterval type정의를 못 찾겠던데 setInterval 타입 정의는 이런 식으로 하면 되나요?(현재까지 오류는 안남)
    if (index < imgArray.length) {
      rotateId = setInterval(() => setIndex(index + 1), 5000);
    } else {
      // 질문 2) index가 5가 되면 이 else문이 실행되서 5가 아닌 0 이 찍혀야 할 것 같은데, 5가 찍히자마자 바로 0이 찍힘. 그 외에 1~4는 5초마다 순차적으로 찍힘. 이 때문인지 4->0으로 교체되는 순간 찰나이지만 검은색 배경이 
      setInterval(setIndex(0), 5000); 
    }
      console.log(index);
    return function cleanup() {
      clearInterval(rotateId);
    };
  }, [index]);

  return (
    <StyledDiv>
      <img src={selectedImg} alt="randomImage" className="randomImage" />
    </StyledDiv>
  );
}
```



* 질문 1 & 질문 2 : 위 코드의 주석 참고

* **질문 3)**

  아래 움짤(왼쪽 : 실제 인스타그램, 오른쪽 : 작업중인 코인스타그램)의 왼쪽처럼 fade-in, fade-out효과를 구현하기 위해 transition, animation 등을 사용해 opacity를 조절했으나, 사진이 바뀌는 시점과 opacity가 바뀌는 시점이 싱크가 안맞아서(동일하게 5초를 줘도) 따로 제 갈길 가는 문제 발생->css로 어떻게 구현하면 좋을까요?
  
 <img src="https://github.com/nomadhailey/TIL/blob/master/React/%EC%A7%88%EB%AC%B8/images/phoneImg.gif"></img> 

# 상태 관리

<img src="https://github.com/nomadhailey/TIL/blob/master/React/%EC%A7%88%EB%AC%B8/images/before.JPG"></img>
<img src="https://github.com/nomadhailey/TIL/blob/master/React/%EC%A7%88%EB%AC%B8/images/after.JPG"></img>

* 변경 이유

  * 이전

    * Email, Id, Password, Username 컴포넌트에서 각각 useState로 email, id, password, username  따로 관리 -> common 컴포넌트에 이 4개의 상태값을 전달하면 common 컴포넌트에서 렌더링하는 방식

    * form submit 이벤트는 로그인 컨테이너, 조인 컨테이너 따로 이벤트 정의

    * form submit 이벤트가 발생하면 -> email, id, password, username를 보내 비동기 요청을 진행해야 하는 상황 발생(아래 코드 참고)

      ```typescript
      // LoginContainer  
      const handleSubmit = (e: any) => {
          e.preventDefault();
          if (idCheck && passwordCheck)
            dispatch(signInSagaActionCreator(user_id, user_password));
        };
      ```

    * 그러나 하위 컴포넌트인 Email, Id, Password, Username 컴포넌트 -> 상위 컴포넌트 로그인 컨테이너, 조인 컨테이너로 값을 전달할 수 없음
    * 이로 인해 email, id, password, username 상태를 로그인 컨테이너, 조인 컨테이너에서 각각 정의해서 사용하게 됨 -> 불필요한 중복 발생

    => context API 사용을 고려해봤으나 depth가 깊지 않아 context API 사용이 불필요하다고 생각하여 사용하지 않음

    => 조인 컨테이너에서 email, id, password, username 상태를 정의하고, 이 중 id, password를 로그인 컨테이너가 가져다 쓰는 식으로 하려고 했으나 조인 컨테이너=로그인 컨테이너의 depth가 동일하여 상하관계가 성립이 안되어 전달을 못함
