# setInterval, setTimeout

<u>200919_coInstagram 클론 코딩 프로젝트</u>



```typescript
// components/LoginPhoneImage
// before(내가 짠 코드)
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
    // let rotateId: number = setInterval(() => {}); 
    // 위와 같이 타입을 정의해도 오류는 안나지만 굳이 이렇게 길게 타입정의할 필요가 없음.
      let rotateId: number;
    if (index < imgArray.length) {
      rotateId = setInterval(() => setIndex(index + 1), 5000);
    } else {
      // index가 5가 되면 이 else문이 실행되서 5가 찍히자마자 바로 0이 찍히는 문제 발생. 그 외에 1~4는 5초마다 순차적으로 찍힘
      setInterval(setIndex(0), 5000); //위와 같은 문제가 발생하는 이유는 setInterval에서 setIndex를 콜백함수로 준 것이 아니라 바로 호출해서임.
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



```typescript
// after_제대로 작동하는 코드
  useEffect(() => {
    const rotateId = setInterval(() => setIndex(index < imgArray.length - 1 ? index + 1 : 0), 5000);

    return function cleanup() {
      clearInterval(rotateId);
    };
  }, [index]);
```