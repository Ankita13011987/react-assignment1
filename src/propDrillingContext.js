import React, { useState} from "react";

function propDrillingContext(){
    const [message] = useState("Welcome to Context API");
    return (
        <>
            <h2>Q5. Create a React application to demonstrate how the prop drilling can be avoided using Context API.</h2>
            <h3>Answer:</h3>
            <p>This is a Parent component</p>
            <ChildA message={message} />
        </>
      );
}

function ChildA({message}){
    return (
        <>
          <p>This is ChildA Component.</p>
          <ChildB message={message} />
        </>
      );
}

function ChildB({message}){
    return (
        <>
          <p>This is ChildB Component.</p>
          <p>Data from Parent is: {message}</p>
        </>
      );
}

export default propDrillingContext