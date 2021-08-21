
import {useState} from 'react';
import './App.css';

function App() {
  let[num,setNum]=useState(5)
  const increment=()=>
  {
      alert("It will add a number");
      setNum(num+1)
  }
  const decrement=()=>
  {
     alert("It will deduct a number");
      setNum(num-1)       
  }

  return (
    <div>
      <div id="main_container">
        <p>SECOND PROJECT</p>
        <div id="display">
            <h1>{num}</h1>
        </div> 
        <div id="btn_collection">
            <button id="button1"onClick={increment}>ADD</button>
            <button id="button2"onClick={decrement}>SUB</button>
        </div>    
     </div>
    </div>
  );
}

export default App;
