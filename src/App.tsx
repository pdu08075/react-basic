import React from 'react';
import Component, { ClassComponent, FunctionComponent } from './component/Component';
import './App.css';
import CurlyBraces from './component/CurlyBraces';
import Properties from './component_manage/Properties';
import ConditionalRender from './component_manage/ConditionalRender';

function App() {
  return (
    <>
      {/* <Component/> */}
      {/* <ClassComponent/> */}
      {/* <FunctionComponent/> */}
      {/* <CurlyBraces></CurlyBraces> */}
      {/* <Properties /> */}
      <ConditionalRender />
    </>
  );
}

export default App;
