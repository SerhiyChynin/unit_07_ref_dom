import './App.css';
import Child from './Child';
import React, { useState } from 'react';

function App() {
  const [s1, setS1] = useState(50);
  let a = 50;
  function changeHandler(event) {
    a = event.target.value;
    console.log(a)
    setS1(a)
  }

  return (
    <>
      <div>
        <input type="range" onChange={changeHandler} />
      </div>
      <Child p1={s1} />
    </>
  );
}

export default App;
