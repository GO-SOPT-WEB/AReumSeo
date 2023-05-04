**💟 웹 최적화**

웹 최적화란, 최고의 웹 성능을 구현하기 위한 최적화 조건을 만드는 것이다.

웹 애플리케이션은 환경에 따라 같은 데이터를 이용해도 속도가 달라진다. 예를 들어 같은 웹 사이트를 이용하더라도 PC에서의 속도와 태블릿에서의 속도, windows 상에서의 속도와 ios 상에서의 속도가 다를 수 있다는 것이다. 또한, 사용자가 느끼는 성능향상은 상당히 주관적이기도 하다.

성능 최적화는 단순히 각종 비용을 줄이는 측면에서 볼 수도 있다. 프로그램은 리소스를 소모하며 동작하고, 처리해야 할 작업이 크고 복잡할 수록 더 많은 리소스를 소모하게 되며, 이는 성능 저하로 이어진다.

따라서 웹 프론트엔드 개발자는 성능 개발을 위해 최소한의 데이터로 가장 빠른 시간 안에 사용자가 만족할 만한 최적의 화면을 띄워야한다.

**💟 웹 최적화가 필요한 이유!**

웹 최적화가 필요한 이유는 사용자 경험, 사용자 이탈률, 수익과 관련이 있다.

최적화가 되지 않은 웹 페이지는 화면 로딩 시간이 길어질 수 밖에 없고, 이는 사용자 이탈률을 증가시킨다. 나 또한 그렇다. 웹 사이트의 로딩 시간이 길어지면 몇 초 사이에 다른 웹 사이트를 찾아 나선다. 이처럼 웹 사이트의 첫 페이지는 사용자 경험에 영향을 미치고, 사용자 경험은 서비스의 인상과 브랜드 가치에 영향을 미칠 수 밖에 없는 것이다.

반대로 생각하면, 최적화가 잘 된 웹 페이지는 화면 로딩 시간이 짧게 소요되고, 이는 사용자 이탈률을 감소시킨다. 웹 사이트의 이용자가 많아질 수록 회원 가입, 상품 구매, 다운로드 등의 행위를 한 방문자의 비율은 증가한다. 결과적으로 이탈률 감소와 전환율 증가는 수익증대로 이어지게 된다.

따라서 서비스 성능 향상을 위해서라 웹 최적화는 반드시 필요하다고 할 수 있다.

**💟 웹 최적화를 하기 위해 어떤 개발을 해야 할까?**

1️⃣ HTML 마크업 최적화

➡️태그의 중첩 최소화 -> 구성 단순화

➡️공백, 주석 등을 제거하여 사용

```
/* 최적화 전 - 불필요한 태그, 공백, 주석 사용 */
<html>
  <head>
    ...
  </head>

  <body>

    <div>

            <div>
<!-- blar blar blar --><p>hello</p>
            </div>

    </div>
  </body>
</html>
```

```
/* 최적화 후 - 간결한 마크업 사용 */
<html>
  <head>
    ...
  </head>
  <body>
    <p>hello</p>
  </body>
</html>
```

2️⃣ JS(Java Script) 최적화

➡️강제 동기 레이아웃: DOM 조작이 없는데도 레이아웃 과정을 강제로 일으키는 것

➡️강제 동기 레이아웃 발생 -> JS 실행 시간 증가

➡️강제 동기 레이아웃이 발생할 수 있는 코드를 최대한 지양해야 한다

강제 동기 레이아웃 발생 가능 코드

```
var boxTemp1 = box1.offsetHeight
  console.log(boxTemp1);
  var boxTemp2 = box2.offsetHeight
  console.log(boxTemp2);
  var boxTemp3 = box3.offsetHeight
  console.log(boxTemp3);
  var boxTemp4 = box4.offsetHeight
  console.log(boxTemp4);
  var boxTemp5 = box5.offsetHeight
  console.log(boxTemp5);
  var boxTemp6 = box6.offsetHeight
  console.log(boxTemp6)
```

강제 동기 레이아웃 개선 코드

```
var boxTemp1 = box1.offsetHeight
  var boxTemp2 = box2.offsetHeight
  var boxTemp3 = box3.offsetHeight
  var boxTemp4 = box4.offsetHeight
  var boxTemp5 = box5.offsetHeight
  var boxTemp6 = box6.offsetHeight
  console.log(boxTemp1);
  console.log(boxTemp2);
  console.log(boxTemp3);
  console.log(boxTemp4);
  console.log(boxTemp5);
  console.log(boxTemp6);
```

3️⃣ 이미지 최적화

➡️ img 지연로딩 활용

➡️ loading: 이미지를 브라우저 화면에 지연/ 병렬 로딩 가능

➡️ auto: 디폴트 값/ loading 속성을 쓰지 않은 것과 같음

➡️ lazy: 화면에 보이는 부분 먼저 출력, 화면 바깥쪽 이미지 로딩 X

➡️ eager: 화면 위치에 관계없이 페이지가 로딩 되자마자 이미지 로드

```
 <img src="item.jpg" loading="lazy" alt>
```

4️⃣사용하지 않는 CSS 제거

➡️Unused css는 구글 크롬 라이트 하우스를 통해 확인 가능

5️⃣ 애니매이션 최적화

➡️ 애니메이션 구현 시, css를 통해 구현하는 것이 성능면에서 이득이다.

➡️ transform은 합성만 발생시키는 속성이기 때문에, 애니메이션에서 사용 시 렌더링 속도를 향상시킬 수 있다.

**💟 웹 최적화를 위한 개발을 꼭 해야 할까?**

구글 자료 조사에 따르면, 페이지가 3초 안에 로딩되지 않을 경우 53%의 사용자가 떠나고 로딩 시간이 길어질 수록 그에 따른 이탈률은 더욱 증가한다고 한다. 이커머스와 같은 서비스의 경우, 페이지에 여러 상품과 광고 및 수 많은 이미지를 처리 해야한다. 이와 더불어 글로벌 서비스를 생각한다면 느린 인터넷 환경에도 대비 해야하고, 여러 사물을 통한 접속에도 대비해야 한다. 이러한 과정에서 웹 최적화가 되어있지 않다면 어떻게 될까? 사용자에게는 더 이상 해당 웹 사이트를 사용할 이유가 사라질 것이다.

IT 기능의 상향 평준화로 인해 단순히 사용자에게 기능을 제공하는 것에서 그치는 것이 아닌, 사용자에게 기분 좋은 경험을 선사해주는 것까지 웹 사이트의 역할이 되었다고 생각한다. 사용자 친화적인 웹을 구현하기 위해 최적화에 더 신경을 써야겠다는 생각이 든다!