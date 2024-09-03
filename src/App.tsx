import React from 'react';
import Component, { ClassComponent, FunctionComponent } from './component/Component';
import './App.css';
import CurlyBraces from './component/CurlyBraces';
import Properties from './component_manage/Properties';
import ConditionalRender from './component_manage/ConditionalRender';
import Example2 from './component_manage/example/Example2';
import ListRender from './component_manage/example/ListRender';
import EventComponent from './interaction/EventComponent';
import StateComponent from './interaction/StateComponent';
import ForwordingComponent from './interaction/ForwordingComponent';
import HookComponent1 from './hook/HookComponent1';
import HookComponent2 from './hook/HookComponent2';
import CustomHook from './hook/CustomHook';
import { Routes, Route, Outlet, useLocation } from 'react-router';
import QueryString from './router/QueryString';
import PathVariable from './router/PathVariable';
import PathMove from './router/PathMove';
import Zustand from './zustand/Zustand';
import ReactCookie from './react-cookie/ReactCookie';

// react-router 패키지:
// - react의 SPA(Single Page Application)에서 라우팅을 구현하기 위한 라우팅 어플리케이션
// - 웹 페이지에서 다양한 경로에 따른 뷰를 관리할 수 있도록 도와줌
// - 웹 애플리케이션 내에서 URL 이동이 있을 때 블라우저를 새로고침 하지 않음 (서버로 새로운 요청을 보내지 않음)
// - 웹 애플리케이션 내에서 네비게이션 역할을 수행

// - npm install react-router- react-router-dom
// - root 경로에 있는 index.tsx의 root.render() 안에 <App /> 컴포넌트를 <BrowserRouter> 컴포넌트로 묶어야 함
// - <BrowserRouter>: URL을 사용하여 브라우저 주소 표시줄에 현재 위치를 저장하고 탐색할 수 있도록 하는 컴포넌트

// - 특정 URL 패턴에 대해서 컴포넌트를 각각 다르게 렌더링하고자 한다면 App.tsx에 <Routes> 컴포넌트와 <Route> 컴포넌트를 사용하여 경로에 따라서 컴포넌트를 렌더링할 수 있음

// <Routes>: <Route> 컴포넌트로 URL에 따른 컴포넌트 렌더링을 할 수 있도록 하는 컴포넌트
// <Route>: URL 패턴에 따라서 렌더링하고자 하는 컴포넌트를 지정하는 컴포넌트
// - path 속성: URL 패턴을 지정
// - element 속성: 렌더링할 컴포넌트 지정
// - index 속성: 현재 경로의 기본 라우터로 지정

function Layout() {

  // useLocation:
  // - 현재 경로에 대한 객체를 반환하는 react-router 축 함수
  // - pathname: 현재 path
  const { pathname } = useLocation();

  // <Outlet>: 부모 <Route>에 해당 컴포넌트가 element로 등록되었을 때
  //           자식 <Route>의 element가 해당 위치에 렌더링되도록 하는 컴포넌트

  return (
    <div>
      <div style={{height: '100px', backgroundColor: 'salmon'}}>{pathname}</div>
      <Outlet />    {/* 하위 태그의 다른 Route와 함께 보여줌 */}
      <div style={{height: '100px', backgroundColor: 'lightblue'}}></div>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route index element={<h1>기본 페이지</h1>} />
      <Route path='/component' element={<Layout />}>
        <Route index element={<Component />} />
        <Route path='function-component' element={<FunctionComponent />} />    {/* 상위 태그에 path가 지정되어 있으니 '/'를 붙이지 않아도 됨 */}
        <Route path='curly-braces' element={<CurlyBraces />} />
      </Route>
      <Route path='/router'>
        <Route path='query-string' element={<QueryString />} />     {/* http://localhost:3000/router/query-string?name=홍길동&age=23 */}
        <Route path='path-variable/:name' element={<PathVariable />} />     {/* http://localhost:3000/router/path-variable/홍길동 */}
        <Route path='path-move' element={<PathMove />} />
      </Route>
      <Route path='/zustand' element={<Zustand />} />
      <Route path='/react-cookie' element={<ReactCookie />} />
      <Route path='*' element={<h1>404 에러 발생</h1>} />     {/* 지정하지 않은 모든 경로에 대한 처리 */}

      {/* <Properties /> */}
      {/* <ConditionalRender /> */}
      {/* <Example2 /> */}
      {/* <ListRender /> */}
      {/* <EventComponent /> */}
      {/* <StateComponent /> */}
      {/* <ForwordingComponent /> */}
      {/* <HookComponent1 /> */}
      {/* <HookComponent2 /> */}
      {/* <CustomHook /> */}
    </ Routes>
  );
}

export default App;


{/*
리액트:
-> 자바스크립트로 구성되어 있음
-> 따라서 화면에 데이터를 뿌리려면 '렌더링'이라는 작업이 필요
    렌더링하는 기준: 속성과 상태에 따라 바뀜
- 속성은 매개변수로 수행, 상태는 useState 훅 함수를 만들어 수행
- 상태는 set~ 이라는 상태변경함수로만 변경 가능
*/}