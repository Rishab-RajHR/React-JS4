import { useState } from "react";
import "./App.css";
import Child from "./Child";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
        <h1>Welcome Alex</h1>
        <Child title="React.js course"/>
        <Child title="Next.js course"/>

        <h2>Count: {count}</h2>
        <button onClick={()=> setCount(count+1)}>
            Increment
        </button>
    </div>
  )
}

export default App
