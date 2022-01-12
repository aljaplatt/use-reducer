import { useState } from "react";
import "./App.css";

// React docs - useState counter
function App() {
  //usestate returns an array of 2 values
  //1 - state-curr state at render
  //2 - setState - function that allows us to update curr state - 1
  // useState(default state)
  // - you can run a function version of the initial state - will only run on first render - good if initial state is a complex operation
  // useState(() => functionName/{code - return  0})
  const [count, setCount] = useState(0);

  function increment() {
    /* prev - inbuilt functionality 
    If the new state is computed using the previous state, you can pass a function to setState(setCount). The function will receive the previous value, and return an updated value. */
    setCount((prevCount) => prevCount + 1);
  }
  function decrement() {
    setCount((prevCount) => prevCount - 1);
  }
  return (
    <>
      <button onClick={decrement}>-</button>
      <button>{count}</button>
      <button onClick={increment}>+</button>
    </>
  );
}

// export default App;
