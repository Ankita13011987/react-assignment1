import React from "react";
import "./style.css";
import ClassCompDemo from "./classComponent"
import FunctionalCompDemo from "./functionalComponent"
import PropsDemo from "./demoProps"
import StatesDemo from "./demoState"
import LifeCycleMethodsDemo from "./lifeCycleMethod.js"
import functionalUseState from "./functionalUseState.js"
import UseEffectDemo from "./UseStateDemo.js"
import FunctionalUseEffect from "./FunctionalUseEffect.js"
import propDrillingContext from "./propDrillingContext.js"

export default function App() {
  return (
    <div>
      <ClassCompDemo></ClassCompDemo>  
      <FunctionalCompDemo></FunctionalCompDemo> 
      <PropsDemo name="Ankita Singh"/>   
      <StatesDemo></StatesDemo> 
       <LifeCycleMethodsDemo></LifeCycleMethodsDemo>
      <UseEffectDemo></UseEffectDemo>        
       <FunctionalUseEffect></FunctionalUseEffect>       
    </div>
  );
}

