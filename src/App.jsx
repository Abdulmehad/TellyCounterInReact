import { useState } from 'react'
import './App.css'

function App() {

  let [counter,setcounter]=useState(5) //this is hook

  //let counter= 5;
  function addvalue(){
    if(counter<21)
    setcounter(counter+1);
  else{
    window.alert("Counter can't go above 20");
    document.getElementById('inc').focus();
  }
  }
const decreasevalue=()=>{
  if(counter>0){
    setcounter(counter-1);
  }
  else{
    window.alert("Counter can't go below 0");
    document.getElementById('dec').focus();
  }
}

  

  return (
    <>
  <h1>Counter in React</h1>
  <h2>Counter Value :{counter}</h2>
  <button id='inc' onClick={addvalue}>Increase Value</button>
  <br /><br />
  <button id='dec' onClick={decreasevalue}>Decrease Value</button>
  <br />
  <footer>This counter willl not go below 0
    and it can maximum go to the value of 20
  </footer>
    </>
  )
}

export default App
