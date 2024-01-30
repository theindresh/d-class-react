import React, { useState, useEffect } from "react";

function App() {
  let [data, setdata] = useState(1);
  let [val, setval] = useState(100);

  let fun1 = () => {
    setdata(data + 1);
  };
  let fun2 = () => {
    setval(val - 1);
  };
  useEffect(() => {
    console.log("useEffect called");
  }, [val]);
  return (
    <>
      <h2>app called</h2>
      <h2>data value={data}</h2>
      <button onClick={fun1}>increment</button>
      <h2>value={val}</h2>
      <button onClick={fun2}>decrement</button>
    </>
  );
}

export default App;
