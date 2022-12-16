import './App.css';
import {useState} from 'react'
import React from 'react';


function App() {
    const [count,setCount]=useState(0)
   // const [sqre,setSqre]=useState(0)

    const addCount=()=>{
        setCount(count+1)
        console.log(count);
    }
    const decreaseCount=()=>{
        setCount(count-1)
        console.log(count);
    }
    // const square=()=>{
    //   setSqre(count*count)
    //     console.log(count);
    // }
    const reset=()=>{
      //setSqre(0)
      setCount(0)
        
    }
  return (

    <div >
      <h1>Counter:{count}</h1>
      {/* <h2>square:{sqre}</h2> */}
        <button onClick={addCount}>Increment</button>
        <button onClick={decreaseCount}>Decrement</button>
        {/* <button onClick={square}>square</button> */}
        <button onClick={reset}>Reset</button>
        
    </div>
  );
}

export default App;
