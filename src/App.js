import logo from './logo.svg';
import './App.css';

function App() {

  function changeHandler(event) {
    let a = event.target.value;
    console.log(a)
  }

  return (
    <>
      <div>
        <input type="range" onChange={changeHandler} />
    </div>
    </>
  );
}

export default App;
