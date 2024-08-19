import React from 'react';
import Component, { ClassComponent, FunctionComponent } from './component/Component';
import './App.css';

function App() {
  return (
    <div className="App">
      <Component/>
      <ClassComponent/>
      <FunctionComponent/>
    </div>
  );
}

export default App;
