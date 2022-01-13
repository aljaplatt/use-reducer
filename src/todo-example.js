import { useReducer, useState } from "react";
import "./App.css";

/* why use useReducer? 
- separate logic outside of component
- ensures you can only change state in specified ways 
- makes code more readable/maintable/testable 
*/

// use reducer better for larger, more complex tasks - nested components - massive obj - passing props etc
// you can quickly see all states in the reducer fn

// good practice to switch hard coded strings for inc/dec to obj like below
const ACTIONS = {};

// useReducer fn defined here - takes 2 params
// curr state & action - which is passed into dispatch fn
// whenever we call dispatch with, will be set as the action param
// reducer will return new updated state
function reducer(state, action) {}
// React docs -
function App() {
  //useReducer returns an array
  // UD takes 2 parameters
  //1 - reducer - fn that acts on state to get a new state
  //2 - initial value could be 0, but common to use obj - { count: 0 } - same as useState (0)
  // [state, dispatch]
  // - state - { count: 0 } - if 0 = count,
  // - dispatch fn - updates state - calls reducer fn
  const [todos, dispatch] = useReducer(reducer, []);
  // bring in name state and set to empty string
  const [name, setName] = useState("");

  return (
    // set up code for form input
    // value = name onChange = variable to be name  - setName
    // this will give us an input which will update our name state/variable - line 32
    <>
      <form>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
    </>
  );
}

export default App;
