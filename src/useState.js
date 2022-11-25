import { useState } from "react";

function UseStateDemo() {
  const [input, setInput] = useState("");

  return (
    <div className="App">
      <h1>UseStateDemo</h1>
      <h1>Input value: {input}</h1>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
    </div>
  );
}

export default UseStateDemo;