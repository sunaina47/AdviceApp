import { useState } from "react";
import './App.css';

export default function App(){
const [advice, setAdvice] = useState("");
const [count, setCount] = useState(0)

  async function getAdvice(){
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
  }

  return (
  <div className="card-container">
    <h1>{advice}</h1>
    <button onClick={getAdvice}>Get Advice</button>
    <Message count={count}/>
  </div>
  );
}

function Message(props){
  return(
    <p>You have read <strong>{props.count}</strong> pieces of advice</p>
  )
}