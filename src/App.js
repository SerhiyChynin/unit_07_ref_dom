import './App.css';

import Child from './Child';
import Test from './Test';
import Test2 from './Test2';

import React, { useState } from 'react';

function App() {

  //Ref
  const refRange = React.createRef();
  const refDiv = React.createRef();
  // const refF = React.createRef();
  const refC = React.createRef();
  
  //State
  const [s1, setS1] = useState(50);
  let a = 50;

  function changeHandler(event) {
    a = event.target.value;
    console.log(a)
    setS1(a)
  }

  function changeHandler2() {
    let elem = refRange.current.value;
    console.log(elem)
    let div = refDiv.current;
    console.log(div.innerHTML)
    div.innerHTML = 'Hello Baby!';
    div.style.background = 'orange';
    refC.current.go();
  }

  return (
    <>
      <div>
        <input type="range" onChange={changeHandler} />
      </div>
      <div>
        <input type="range" ref={refRange} />
      </div>
      <div>
        <div ref={refDiv}>some text</div>
      </div>
      <div>
        <button onClick={changeHandler2}>Push</button>
      </div>
      <Child p1={s1} />
      {/* <Test ref={refF} /> */}
      <Test2 ref={refC}/>
    </>
  );
}

export default App;
