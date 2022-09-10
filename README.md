# npm 보다 효율적인 yarn
### `npm install yarn`
# 싱글페이지 이지만 자원을 구분하기 위한 라우터
### `npm install react-router-dom --save`
# REST를 비동기로 주고 받기 위한 기능
### `npm install axios --save`


# [MUI](https://mui.com/material-ui/getting-started/overview/) 버전 오류 해결
> 1. 로컬에 있어도 일단 다운로드
>
> ### `npm install --force`
> 2. peerDependencies 무시
>
> ### `npm install --legacy-peer-deps`
> 3. 모든 곳에서 legacy 동작, 권장하진 않음
>
> ### `npm config set legacy-peer-deps true`
>
> 4. yarn 다시 설치
>
> ### `yarn install`
>
> 5. MUI 설치
>
> ### `npm install @mui/material @emotion/react @emotion/styled`


# react-dom/client 에러 해결
> - 해당 모듈은 18 버전 에서만 동작
> - 다운그레이드 할 경우 에러 발생
>
> ```react
> import ReactDOM from 'react-dom/client'; // react v18 버전용
> import ReactDOM from 'react-dom';  // react v17 버전용
> 
> // react v 18 버전 용
> const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
> root.render(
> 	<React.StrictMode>
> 		<App />
> 	</React.StrictMode>
> );
> 
> // react v 17 버전용
> ReactDOM.render(
>   <React.StrictMode>
>         <App />
>   </React.StrictMode>,
>   document.getElementById('root')
> );
> ```
>
> - 17버전 으로 동작