import React, {useState, useEffect} from "react";
var effectedState;

function FunctionalUseEffect() {
    const [count, setCount] = useState(0);

    useEffect(() => {      
        effectedState = `You clicked ${count} times`;
      });
    return (
        <>  <h3>This is useState and useEffect demo.</h3>     
        <p>Clicked Update state button {count} times</p>
        <p id="usedEffect">{effectedState}</p>
        <button onClick={() => setCount(count + 1)}>Update State</button>
        </>
      );
}

export default FunctionalUseEffect;