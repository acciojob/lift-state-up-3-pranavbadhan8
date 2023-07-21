
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {

    let [ans,setAns] = useState("Selected Option");

    let clicking1 = () =>{
    setAns("Selected Option : Option 1"); 
    }

    let clicking2 = () =>{
    setAns("Selected Option : Option 2"); 
    }

  return (
    <div>
        <div className="parent">
          <h1>Parent Component</h1>
          <div className="child1">
              <h2>Child Component 1</h2>
              <button onClick={clicking1}>Option 1</button>
           </div>
           <div className="child2">
              <h2>Child Component 2</h2>
              <button onClick={clicking2}>Option 2</button>
           </div>
           <p>{ans}</p>
        </div>
    </div>
  )
}

export default App
