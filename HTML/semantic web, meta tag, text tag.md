# semantic web

 **시맨틱 태그란 브라우저, 검색엔진, 개발자 모두에게 콘텐츠의 의미를 명확히 설명하는 역할을 한다**

**시맨틱 웹이란 웹에 존재하는 수많은 웹페이지들에 메타데이터(Metadata)를 부여하여, 기존의 잡다한 데이터 집합이었던 웹페이지를 ‘의미’와 ‘관련성’을 가지는 거대한 데이터베이스로 구축하고자 하는 발상이다.**

HTML 요소는 non-semantic 요소, semantic 요소로 구분할 수 있다.

- non-semantic 요소

  div, span 등이 있으며 이들 태그는 content에 대하여 어떤 설명도 하지 않는다.

- semantic 요소

  form, table, img 등이 있으며 이들 태그는 content의 의미를 명확히 설명한다,

# meta tag

SEO(검색엔진 최적화)를 위해 검색엔진이 사용할 keywords을 정의한다.

```html
<meta name="keywords" content="HTML, CSS, XML, XHTML, JavaScript">
```

웹페이지의 설명을 정의한다.

```html
<meta name="description" content="Web tutorials on HTML and CSS">
```

웹페이지의 저자를 명기한다.

```html
<meta name="author" content="John Doe">
```

웹페이지를 30초 마다 Refresh한다.

```html
<meta http-equiv="refresh" content="30">
```

# text tag

## `<b>` vs. `<strong>`

둘 다 bold체를 지정하지만, `<b>`는 의미론적(semantic) 중요성이 없고, `<strong>`은 의미론적 중요성을 갖기 때문에 웹표준을 준수하고자 한다면 `<strong>`을 사용하는 것이 바람직 cf)`<em>` 또한 의미론적 중요성을 가짐



