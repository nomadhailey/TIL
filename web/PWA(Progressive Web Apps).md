# PWA(Progressive Web Apps)

### PWA란 무엇인가?

웹은 웹인데 점진적으로 앱 수준으로 근접해가는 웹이라는 개념의 아이디어.

> 비록 웹이지만 데스크톱이나 모바일에서 설치가 가능하고 앱과 유사한 사용자 환경을 제공해주며 하이브리드앱(Hybrid App)과 비교했을 때 보다 간편하게 설치와 개발을 할 수 있고 무엇보다 검색이 가능합니다. 앱과 유사한 경험을 지원하기 위해 푸쉬알림(Push Notification), 설치(Install), 오프라인 실행(Offline Access) 등의 기능도 지원합니다.
>
> PWA에 대한 설명에서 가장 자주 등장하는 단어는 'App like'와 'Natively' 이지만 링크(URL)로 공유가 가능한 웹 페이지입니다. 즉, PWA는 다음 그림과 같이 앱(App)이 가지고 있는 높은 품질(Capability)과 웹(Web)의 넓은 도달 범위(Reach)를 결합한 개발 형태입니다.

### PWA 장점

- **반응형(Responsive)** 기기에 따라 레이아웃을 자동으로 조정하는 등 다양한 플랫폼과 여러 기기에서 동일한 사용자 경험(UX)을 제공해줍니다.
- **연결 독립적(Reliable)** 로컬 기기의 캐시를 활용하여 오프라인이나 불안한 네트워크에서도 실행할 수 있습니다.
- **재참여 가능(Engageble)** 브라우저가 닫혀 있더라도 푸쉬 알람(Push Notification)을 보낼 수 있어서 재방문율을 높여줍니다.
- **안전성(Safe)** HTTPS 통신으로 제공되므로 기존 웹 대비 안전합니다.
- **설치 가능한 경험 제공(Installable)** 앱스토어를 찾지 않아도 브라우저에서 바로 빠르고 간단히 홈스크린에 앱을 둘 수 있습니다.
- **검색을 통해 발견 가능(Search)** 구글, 네이버 등 포털 검색 결과에 노출됩니다.
- **링크 연결 가능** 링크(URL)를 통해 손쉽게 공유할 수 있습니다.
- **즉각적인 업데이트**
- **경량**

### PWA의 한계

- 로딩 속도와 성능이 다소 떨어집니다.
- 일부 플랫폼에 제한이 있습니다.
- 크롬, 오페라, 파이어폭스에서는 동작하지만, 사파리 브라우저에서 지원되지 않습니다.
- 아이폰에서 푸시알림을 보낼 수 없고 Siri와 통합할 수 없는 등 일부 기기에서 기본 기능에 제한이 있습니다.
- 지오 펜싱, 지문 스캐닝, NFC, Bluetooth 및 고급 카메라 기능과 같은 장치 기본 기능을 지원하지 못합니다.
- PWA를 사용하려면 인터넷에 액세스해야 하므로 배터리 수명을 더 빨리 소모합니다.

### 채택 기술

- **웹 메니페스트(Web App Manifest)** 브라우저가 웹 앱을 설치할 때 그리고 홈 화면에서 웹 앱을 적절히 표현하는 데 필요한 정보 등을 담고 있습니다.
- **서비스 워커(Service Worker)** 브라우저가 백그라운드에서 실행하는 스크립트로, 웹페이지와는 별개로 작동하며, 푸시 알림(Push Notification, Android Chrome 한정) 및 백그라운드 동기화(Background Sync, Android Chrome 한정)와 같은 기능 등 웹페이지 또는 사용자 상호작용이 필요하지 않은 기능에 대해 지원합니다.
- **반응형 웹(Responsive Web)** 현재 사용되는 대부분의 반응형 웹 기술들을 사용합니다.

### 도입 사례

앱을 다운로드하지 않고 웹주소를 클릭해 앱과 유사한 서비스를 이용하게 해주는 PWA 장점을 살려 여행, 유통, 뉴스 분야에 활용도가 높을 것으로 보입니다. 핀터레스트(Pinterest), 알리바바(Alibaba), 트위터 라이트(Twitter Lite) 등 PWA 도입으로 접속 시간은 상승하고, 이탈률은 감소하는 등 유의미한 결과를 얻는 많은 사례를 볼 수 있습니다.

- **핀터레스트(Pinterest)**

- - 평균 접속 시간이 40% 증가하였고 사용자 생성 광고 수익이 44% 증가, 핵심 사용자 참여율이 60% 증가하였다고 보고하고 있습니다.
  - 안드로이드 및 아이폰 앱과 비교하면 9.6MB 및 56MB에 비해 150KB로 매우 가볍습니다.
    ![img](https://www.insilicogen.com/blog/attach/1/1282654307.png)

[Flag. 5] PWA Pinterest

([https://hackernoon.com/progressive-web-apps-the-future-of-mobile-web-app-development-f29257b0dea2](https://hackernoon.com/progressive-web-apps-the-future-of-mobile-web-app-development-f29257b0dea2 fbclid=IwAR3IvJyDZ7fGbM2YeUBIHvMqWd0utfoiqKaU5YhAnsXGLbm4FFEIb1AGth4)

[fbclid=IwAR3IvJyDZ7fGbM2YeUBIHvMqWd0utfoiqKaU5YhAnsXGLbm4FFEIb1AGth4](https://hackernoon.com/progressive-web-apps-the-future-of-mobile-web-app-development-f29257b0dea2 fbclid=IwAR3IvJyDZ7fGbM2YeUBIHvMqWd0utfoiqKaU5YhAnsXGLbm4FFEIb1AGth4))

- **그 외 PWA 도입 사례들**

- - [http://progressivewebapproom.com](http://progressivewebapproom.com/)
  - (PWA examples) 2020 PWA 웹 앱의 12가지 대표 사이트, https://www.simicart.com/blog/progressive-web-apps-examples/

참고: https://www.insilicogen.com/blog/350

