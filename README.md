# 프레임워크 없이 만드는 spa
리액트의 작동 방식을 학습하기 위해 Javascript로 SPA를 구현하고, 그 과정을 기록했습니다.

## 🏗️ 핵심 개발 내용
- 가상 DOM 및 렌더링 시스템 개발  </br>
  React의 핵심 개념을 이해하고 실습하기 위해, 프레임워크 없이 가상 DOM 및 렌더링 시스템을 직접 구현했습니다. </br>
이 과정에서 createDOM, createElement, render 함수를 개발하여, </br>
JSX 구문과 유사한 방식으로 UI 컴포넌트를 만들고 DOM에 렌더링하는 과정을 구현했습니다.

- WebPack과 Babel 세팅 </br>
  개발 환경을 구성하고 JSX 구문에 직접 구현한 createElement 함수가 작동할 수 있도록 Babel을 설정했습니다.

- TypeScript 환경 설정 </br>
tsconfig에서 JSXFactory 옵션을 사용해 JSX 구문을 컴파일 할 때 직접 구현한 createElement 함수를 사용하도록 설정했습니다.

- 라우팅 기능 개발 </br>
History API: 페이지를 새로고침하지 않고도 URL을 변경할 수 있도록 구현했습니다. </br>
URL 경로 분석 및 매칭:  URL 경로와 정의된 라우트를 비교해 매칭시키는 기능을 구현했습니다 </br>
커스텀 훅 구현: 라우트 관련 정보에 쉽게 접근 할 수 있도록 useParams 와 useLocation 을 구현했습니다.

- Mock Service Worker 사용 </br>
msw를 사용해 API Mocking을 구현했습니다.
실제 서버가 없는 상황에서도 API 요청 및 응답을 시뮬레이션했습니다.


## 👩‍💻 개발 과정에서의 고민

[1. html 렌더링 (어떻게 추상화 해야 편하게 렌더링 할 수 있을까?)](https://github.com/365support/vanilla-spa/wiki/1.-HTML-%EB%A0%8C%EB%8D%94%EB%A7%81) </br>
[2. 새로고침없는 라우팅 처리 (History API, Hash Router 어떤 걸 사용할까?)
](https://github.com/365support/vanilla-spa/wiki/2.-%EC%83%88%EB%A1%9C%EA%B3%A0%EC%B9%A8%EC%97%86%EB%8A%94-%EB%9D%BC%EC%9A%B0%ED%8C%85)</br>
[3. api 요청 (api 없이 사용 할 수 있는 방법은?)
](https://github.com/365support/vanilla-spa/wiki/3.-api-%EC%9A%94%EC%B2%AD)</br>
[4. 리렌더링 (좋은 설계란 뭘까?)
](https://github.com/365support/vanilla-spa/wiki/4.-%EB%A6%AC%EB%A0%8C%EB%8D%94%EB%A7%81)</br>
[5. 폴더 구조, 결합도 낮추기 (기능들을 라이브러리로 배포한다면..?)](https://github.com/365support/vanilla-spa/wiki/5.-%ED%8F%B4%EB%8D%94%EA%B5%AC%EC%A1%B0--%E2%80%A2-%EA%B2%B0%ED%95%A9%EB%8F%84-%EB%82%AE%EC%B6%94%EA%B8%B0)


## 📂 프로젝트 구조
```
📦react
 ┗ 📜render.ts
📦react-router-dom
 ┣ 📜Link.tsx
 ┗ 📜index.ts
📦src
 ┣ 📂api
 ┃ ┣ 📜article.ts
 ┃ ┗ 📜index.ts
 ┣ 📂components
 ┃ ┣ 📂Layout
 ┃ ┃ ┗ 📜Header.tsx
 ┃ ┣ 📂Post
 ┃ ┃ ┣ 📜PostCard.tsx
 ┃ ┃ ┣ 📜PostContent.tsx
 ┃ ┃ ┗ 📜PostList.tsx
 ┃ ┗ 📜Error.tsx
 ┣ 📂constants
 ┣ 📂mock
 ┃ ┣ 📜browser.ts
 ┃ ┗ 📜handlers.ts
 ┣ 📂routes
 ┃ ┗ 📜routes.ts
 ┣ 📂utils
 ┣ 📜index.tsx
 ┗ 📜main.tsx
```


## ⚙️ 패키지 설치 및 실행
```js
yarn install
yarn start
```

## 🛠️ 개발 환경 구성

- Bundler: webpack </br>
- API Mocking: MSW
