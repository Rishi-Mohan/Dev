import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function useCounter() {
  const [count, setCount] = useState(0);
  function increaseCount() {
    setCount(count + 1);
  }
  return { count, increaseCount };
}

const Counter = () => {  
  const { count, increaseCount } = useCounter();
  return (
    <div>
      <button onClick={increaseCount}>Increment</button>
      <br />
      {count}
    </div>
  );
};

const Counter2 = () => {  
  const { count, increaseCount } = useCounter();
  return (
    <div>
      <button onClick={increaseCount}>Increment</button>
      <br />
      {count}
    </div>
  );
};

function App() {
  
  return (
    <div>
      <Counter />
      <Counter />
      <Counter2 />
    </div>
  );
}

export default App;


/**
 * Here we acheive something that is called code reusability. 
 * We have created a custom hook called useCounter and we are using it in two different components.
 * This is the power of custom hooks.
 * 
 * Before that we were using the same logic in two different components.that will lead to same code 
 * in two different components.
 */