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

function App() {
  return (
    <>
      {/* <Component/> */}
      {/* <ClassComponent/> */}
      {/* <FunctionComponent/> */}
      {/* <CurlyBraces></CurlyBraces> */}
      {/* <Properties /> */}
      {/* <ConditionalRender /> */}
      {/* <Example2 /> */}
      {/* <ListRender /> */}
      {/* <EventComponent /> */}
      {/* <StateComponent /> */}
      <ForwordingComponent />

    </>
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