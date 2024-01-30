/*
import React,{useState} from 'react'
function App(props) {
     let[val,setval]=useState(props.age)

     let show=()=>{
      setval(val+1)
     }
  return (
    <>
    <h1>App Component</h1>
    <h2>Age with props={props.age}</h2>
    <h2>value with useState={val}</h2>
    <button onClick={show}>click</button>
    </>
  )
}

export default App
*/

import React, { useState } from "react";
function App() {
  let [data, setdata] = useState("rahul");
  let fun = () => {
    setdata("amit");
  };
  return (
    <>
      <h2>App</h2>
      <h2>Value={data}</h2>
      <button onClick={fun}>click</button>
    </>
  );
}

export default App;

/*
import React,{useState} from 'react'
function App() {
       let data=useState('amit')

let show=()=>{
  data[1]("sumit")
}
  return (
   <>
   <h2>App Component</h2>
   <h2>Value={data[0]}</h2>
   <button onClick={show}>click</button>
   </>
  )
}

export default App
*/
